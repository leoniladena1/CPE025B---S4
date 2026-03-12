class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) {
        this.type = 'line';
        this.points = points.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = []) {
        this.addElements(elements);
    }

    addElements(elements = []) {
        this.elements = {
            points: elements.filter(e => e.type === 'point'),
            lines: elements.filter(e => e.type === 'line')
        };
        this.clean();
    }

    addPoint(x, y) {
        this.elements.points.push(new Point(x, y));
        this.clean();
    }

    addLine(points = []) {
        this.elements.lines.push(new Line(points));
        this.clean();
    }

    clean() {
        // remove duplicate points
        let uniquePoints = new Map();
        this.elements.points.forEach(p => {
            let key = `${p.x},${p.y}`;
            uniquePoints.set(key, p);
        });
        this.elements.points = Array.from(uniquePoints.values());

        // sort points
        this.elements.points.sort((a,b) => a.x - b.x || a.y - b.y);

        // remove duplicate lines
        let uniqueLines = new Map();
        this.elements.lines.forEach(l => {
            let key = JSON.stringify(
                l.points.map(p => [p.x,p.y]).sort()
            );
            uniqueLines.set(key, l);
        });
        this.elements.lines = Array.from(uniqueLines.values());

        // sort lines
        this.elements.lines.sort((a,b) => {
            let A = JSON.stringify(a.points.map(p => [p.x,p.y]));
            let B = JSON.stringify(b.points.map(p => [p.x,p.y]));
            return A.localeCompare(B);
        });
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(data="{}", add=false) {
        let obj = JSON.parse(data);

        if(add){
            this.elements.points =
                this.elements.points.concat(obj.points || []);
            this.elements.lines =
                this.elements.lines.concat(obj.lines || []);
        } else {
            this.elements = obj;
        }

        this.clean();
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

let f = new Figure();

// Add points (including duplicates)
f.addPoint(10, 20);
f.addPoint(5, 10);
f.addPoint(10, 20);
f.addPoint(0, 0);
f.addPoint(5, 10);

// Add lines (including duplicates)
f.addLine([[0,0], [10,10]]);
f.addLine([[5,5], [15,15]]);
f.addLine([[0,0], [10,10]]); 
f.addLine([[10,10], [20,20]]);

// Show results
console.log("Points:");
console.log(f.elements.points);

console.log("Lines:");
console.log(f.elements.lines);

// Convert to JSON
let json = f.toJSON();
console.log("JSON Data:");
console.log(json);

// Load JSON again (adding to collection)
f.fromJSON(json, true);

console.log("After loading JSON again:");
console.log("Points:", f.elements.points.length);
console.log("Lines:", f.elements.lines.length);

// Delete all
f.deleteAll();
console.log("After deleteAll:");
console.log(f.elements);
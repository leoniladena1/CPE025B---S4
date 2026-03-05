// Image constructor
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

// add show method to Image using prototype
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
};

// images object
let images = {
    list: [],

    contains: function(title) {
        let retVal = false;
        for (let image of this.list) {
            if (image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },

    show: function() {
        for (let image of this.list) {
            image.show();
        }
    },

    clear: function() {
        this.list = [];
    }
};

// edit method
images.edit = function(title, artist, date) {
    for (let image of this.list) {
        if (image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
};

// delete method
images.delete = function(title) {
    for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].title === title) {
            this.list.splice(i, 1);
            break;
        }
    }
};


// TESTING THE SCRIPT

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('The Scream', 'Edvard Munch', 1893);

console.log("Initial list:");
images.show();

images.edit('The Scream', 'Edvard Munch', 1895);

console.log("\nAfter editing The Scream:");
images.show();

images.delete('Mona Lisa');

console.log("\nAfter deleting Mona Lisa:");
images.show();

images.clear();

console.log("\nAfter clearing the list:");
images.show();
// Image constructor
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

// initial images array
let imagesData = [
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', date: 1503 },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', date: 1495 },
    { title: 'The Starry Night', artist: 'Vincent van Gogh', date: 1889 },
    { title: 'The Scream', artist: 'Edvard Munch', date: 1893 },
    { title: 'Guernica', artist: 'Pablo Picasso', date: 1937 },
    { title: 'The Kiss', artist: 'Gustav Klimt', date: 1907 },
    { title: 'Girl With a Pearl Earring', artist: 'Johannes Vermeer', date: 1665 },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', date: 1485 },
    { title: 'Las Meninas', artist: 'Diego Velázquez', date: 1656 },
    { title: 'Creation of Adam', artist: 'Michelangelo', date: 1512 }
];

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
            console.log(`${image.title} - ${image.artist} (${image.date})`);
        }
    },

    clear: function() {
        this.list = [];
    }
};

// TEST SEQUENCE
for (let img of imagesData) {
    images.add(img.title, img.artist, img.date);
}

images.show();   // display images
images.clear();  // remove all
images.show();   // should show nothing
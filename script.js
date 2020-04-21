const urls = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com',
];

const search = (searchInput, db) => {
    const matches = db.filter((website) => {
        return website.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = search;

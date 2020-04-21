const search = require('./script');

urlsMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('search', () => {
    it('is searching google', () => {
        expect(search('test', urlsMock)).toEqual([]);
    });

    it('works with undefined and null input', () => {
        expect(search(undefined, urlsMock)).toEqual([]);
        expect(search(null, urlsMock)).toEqual([]);
    });

    it('does not return more than 3 matches', () => {
        expect(search('.com', urlsMock).length).toEqual(3);
    });
});

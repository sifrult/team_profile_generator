const Manager = require('../lib/manager');

describe('manager', () => {
    describe('getOfficeNumber method', () => {
        it('prints out the employees office number', () => {
            const manager = new Manager("Amy", "01", "amy@gmail.com", "123");

            expect(manager.getOfficeNumber()).toEqual("123")
        })
    })
})

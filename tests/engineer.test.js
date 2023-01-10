const Engineer = require("../lib/engineer");

describe('engineer', () => {
    describe('getGithub method', () => {
        it('prints out the Employees Github', () => {
            const engineer = new Engineer("Amy", "01", "amy@gmail.com", "sifrult");

            expect(engineer.getGitHub()).toEqual("sifrult")
        })
    })
})

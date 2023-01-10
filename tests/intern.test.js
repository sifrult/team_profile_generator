const Intern = require("../lib/intern");

describe('intern', () => {
    describe('getSchool method', () => {
        it ('prints out the Employees school', () => {
            const intern = new Intern("Amy", "01", "amy@gmail.com", "UofU");

            expect(intern.getSchool()).toEqual("UofU")
        })
    })
})

const Employee = require("../lib/employee");

describe('employee', () => {
    describe('getName method', () => {
        it ("prints the Employees name" , () => {
            const employee = new Employee("Amy", "01", "amy@gmail.com");

            expect(employee.getName()).toEqual("Amy")
        })
    });
    describe('getId method', () => {
        it ("prints the Employees ID", () => {
            const employee = new Employee("Amy", "01", "amy@gmail.com");

            expect(employee.getId()).toEqual("01")
        })
    });
    describe('getEmail method', () => {
        it ("prints the Employees email", () => {
            const employee = new Employee("Amy", "01", "amy@gmail.com");

            expect(employee.getEmail()).toEqual("amy@gmail.com")
        })
    });
    describe('getRole method', () => {
        it ("prints the Employees role", () => {
            const employee = new Employee("Amy", "01", "amy@gmail.com");

            expect(employee.getRole()).toEqual("Employee")
        })
    })
})

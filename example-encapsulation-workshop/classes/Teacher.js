class Teacher {
    constructor(name, initials, subject) {
        this.yearsOfService = 0 //Default
        this.name = name
        this.initials = initials
        this.subject = subject
    }
    getName = () => {
        return this.name
    }
    getInitials = () => {
        return this.initials
    }
    getSubject = () => {
        return this.subject
    }
    getYearsService = () => {

    }
    setYearsService = years => {
        this.yearsOfService = years
    }
}
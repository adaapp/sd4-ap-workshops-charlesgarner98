class Student {
    constructor(name, tutorGroup) {
        this.name = name
        this.year = tutorGroup.substring(0, tutorGroup.length -1)
        this.form = tutorGroup.slice(-1)
    }
    getName = () => {
        return this.name
    }
    getYearGroup = () => {
        return this.year
    }
    getForm = () => {
        return this.form
    }
}
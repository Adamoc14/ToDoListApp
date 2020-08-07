const functions = {
    preselect: (values , priority) => {
        let valuesArr = [],
            startIndex = values.indexOf("<option" ),
            endIndex = values.indexOf("</option>") + 9
        for (let i = 0; i < values.length; i++) {
            valuesArr.push(values.slice(startIndex ,endIndex))
            startIndex = values.indexOf("<option", endIndex)
            endIndex = values.indexOf("</option>", startIndex) + 9
            if(valuesArr.length === 5 ) break
        }
        valuesArr = valuesArr.map(value => Number(value.match(new RegExp('value="(.*)"'))[1]) === priority ? `<option value="${Number(value.match(new RegExp('value="(.*)"'))[1])}" selected>${Number(value.match(new RegExp('value="(.*)"'))[1])}</option>` : `<option value="${Number(value.match(new RegExp('value="(.*)"'))[1])}">${Number(value.match(new RegExp('value="(.*)"'))[1])}</option>`)
        return valuesArr;
    },
    validateId: id => {
        return isNaN(id)
    },
    validateTask: task => {
        return task.title.trim() !== "" && task.title.length > 3 && !isNaN(task.priority)
    },
    debug: (value) => {
        console.log(value)
    },
    // getOptionHTML: (value) => {
    //     const parser = new DomParser()
    //         option = parser.parseFromString(value);
    //     return option.rawHTML
    // }
}

module.exports = functions


module.exports = {
    validation: (fields, files, res) => {
        let message = {};
        if (typeof fields.name == "undefined" || fields.name == "")
            message.name = res.__("validation.required.name")
        
        if (typeof files.banner == "undefined" || files.banner.name == "")
            message.banner = res.__("validation.required.banner")
        
        if (typeof files.icon == "undefined" || files.icon.name == "")
            message.icon = res.__("validation.required.icon")
        if (message)
            return message
    }
}
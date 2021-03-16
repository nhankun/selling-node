

module.exports = {
    validation: (parameter, res) => {
        let message = {};
        if (typeof parameter.name == "undefined" || parameter.name == "")
            message.name = res.__("validation.required.name")
        
        if (typeof parameter.banner == "undefined" || parameter.banner.name == "")
            message.banner = res.__("validation.required.banner")
        
        if (typeof parameter.icon == "undefined" || parameter.icon.name == "")
            message.icon = res.__("validation.required.icon")
        if (message)
            return message
    }
}
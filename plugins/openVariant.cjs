const plugin = require("tailwindcss/plugin")


// addVariant allow us to create variant class
const openVariant = plugin(function ({ addVariant }) {
    addVariant("group-open", ":merge(.group).open &")
    addVariant("peer-open", ":merge(.peer).open ~ &")
})

module.exports = openVariant
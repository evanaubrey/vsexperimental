AFRAME.registerComponent('group-opacity', {
    schema: {opacity: {default: 1.0}},
    update: function () {
        var opacity = this.data.opacity;
        var children = [].slice.call(this.el.children);
        children
            .filter(function (child) { return child.hasAttribute('opacity'); })
            .forEach(function (child) {
                child.setAttribute('opacity', opacity);
            });
    }
});
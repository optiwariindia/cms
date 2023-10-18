HTMLFormElement.prototype.checkValidity = function () {
    const valid = Array.from(this.querySelectorAll("[name]")).reduce((a, c) => {
        return c?.validity?.valid && a;
    }, true);
    return valid;
}
HTMLFormElement.prototype.getData = function () {
    const data = Array.from(this.querySelectorAll("[name]")).reduce((a, c) => {
        let fldName = c.getAttribute("name");
        let fldType = c.getAttribute("type");
        switch (fldType) {
            case "radio":
            case "checkbox":
                if(!c.checked)return a;
                break;

            default:
                break;
        }

        if (!(fldName in a)) {
            a[fldName] = c.value;
            return a;
        }
        if (a[fldName] instanceof Array) {
            a[fldName].push(c.value);
            return a;
        }
        a[fldName] = [a[fldName], c.value];
        return a;
    }, {})
    return data;
}
HTMLFormElement.prototype.getInvalidInputs=function(){
    return Array.from(this.querySelectorAll(":invalid"));
}
Array.prototype.rotate = function (direction = "right") {
    let array = this;
    switch (direction) {
        case "left":
            let firstElement = array[0];
            array.shift();
            array.push(firstElement);
            break;
        case "right":
            let lastElement = array.pop();
            array.unshift(lastElement);
            break;
    }
}
String.prototype.slug=function(){
    let exp=RegExp(/\W/g);
    return this.replace(exp,"-").toLowerCase()
}
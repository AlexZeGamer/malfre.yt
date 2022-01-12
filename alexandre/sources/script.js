function copy(text) {
    if (window.confirm(text + "\nCopier dans le presse papier ?")) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
}
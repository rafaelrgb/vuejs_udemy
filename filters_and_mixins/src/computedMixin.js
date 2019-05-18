export const computedMixin = {
    computed: {
        reversedText() {
            return this.baseText.split("").reverse().join("");
        },
        countedText() {
            return this.baseText + ' (' + this.baseText.length + ')';
        }
    }
};

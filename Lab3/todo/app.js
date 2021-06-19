var vue = new Vue({
    el: '#div',
    data: {
        newList: '',
        lists: []
    },
    methods: {
        addCheckList() {
            this.lists.push({
                title: this.newList,
                done: false
            });
            this.newList = '';
        },
        removeCheckList(list) {
            const listIndex = this.lists.indexOf(list);
            this.lists.splice(listIndex, 1);
        }
    }
})
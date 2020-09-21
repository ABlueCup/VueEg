Vue.component('v-table', {
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        },
        width: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            currentColumns: [],
            currentInformation: [],
            currentWidth: this.width
        }
    },
    /*     template:`<table>
            <thead>
                <tr>
                    <th v-for="(col,index) in currentColumns">
                        <span>{{col.title}}</span>
                        <a v-if="col.sortable" :class="{on:col.sortType==='asc'}" @click="handleSortByAsc(index)">↑</a>
                        <a v-if="col.sortable" :class="{on:col.sortType==='desc'}" @click="handleSortByDesc(index)">↓</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in currentInformation">
                    <td v-for="ceil in currentColumns">{{row[ceil.key]}}</td>
                </tr>
            </tbody>
        </table>`, */
    render(createElement) {
        //columns

        ; let ths = [];
        this.currentColumns.map((col, index) => {
            if (col.sortable) {
                ths.push(createElement("th", [
                    createElement('span', col.title),
                    createElement('a', {
                        class: {
                            on: col.sortType === "asc"
                        },
                        on: {
                            click: () => { this.handleSortByAsc(index) }
                        }
                    }, '↑'),
                    createElement('a', {
                        class: {
                            on: col.sortType === "desc"
                        },
                        on: {
                            click: () => { this.handleSortByDesc(index) }
                        }
                    }, '↓')
                ]));
            } else {
                ths.push(createElement("th", [
                    createElement("span", col.title)
                ]));
            }
        });
        let trs = [];
        this.currentInformation.forEach((row, index) => {
            let tds = [];
            this.currentColumns.forEach((ceil, _index) => {
                tds.push(createElement('td', row[ceil.key]));
            });

            // return createElement("td", content);
            trs.push(createElement('tr', tds));

        });
        return createElement('table', [
            createElement('colgroup', [
                createElement('col', {
                    domProps: {
                        span: 2
                    },
                    style: {
                        width: `${this.currentWidth}px`
                    }
                })
            ]),
            createElement('thead', [
                createElement('tr', ths)
            ]),
            createElement('tbody', trs)
        ]);
    },
    methods: {
        makeColumns() {
            this.currentColumns = this.columns.map((col, index) => {
                col.sortType = "normal";
                col._index = index; // origin index
                return col;
            });
        },
        makeInformation() {
            this.currentInformation = this.data.map((row, index) => {
                row._index = index;
                return row;
            });
        },
        handleSortByAsc(index) {
            let key = this.currentColumns[index].key;
            this.currentColumns.forEach(col => {
                col.sortType = 'normal';
            });
            this.currentColumns[index].sortType = "asc";
            this.currentInformation.sort((a, b) => {
                return a[key] > b[key] ? 1 : -1;
            });
        },
        handleSortByDesc(index) {
            let key = this.currentColumns[index].key;
            this.currentColumns.forEach(col => {
                col.sortType = "normal";
            });
            this.currentColumns[index].sortType = "desc";
            this.currentInformation.sort((a, b) => {
                return b[key] - a[key] > 0 ? 1 : -1;
            });
        }
    },
    watch: {
        data() {
            this.makeInformation();
        },
        width() {
            console.log(2);
            this.currentWidth = this.width;
        }
    },
    mounted() {
        this.makeColumns();
        this.makeInformation();
    }
});
(function anonymous() {
    let getTodayTime = () => {
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setUTCMilliseconds(0);
        return today.getTime();
    };
    let getThisYearTime = () => {
        let thisYear = new Date();
        thisYear.setMonth(0);
        thisYear.setDate(1);
        thisYear.setHours(0);
        thisYear.setMinutes(0);
        thisYear.setSeconds(0);
        // thisYear.setMinutes(0);
        return thisYear.getTime();
    };
    let getThisMonthTime = () => {
        let thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0);
        thisMonth.setMinutes(0);
        thisMonth.setSeconds(0);
        // thisYear.setMinutes(0);
        return thisMonth.getTime();
    }
    let getTimeTip = (currentTime, oldTIme) => {
        let todayTime = getTodayTime(), thisYear = getThisYearTime(), thisMonth = getThisMonthTime();
        let dif = currentTime - oldTIme;
        if (dif < 60000) return "刚刚";
        if (dif < 60000 * 60) return `${Math.floor(dif / 60000)}分钟前`;
        if (oldTIme >= todayTime) return `${Math.floor(dif / (60000 * 60))}小时前`;
        if (oldTIme >= thisMonth) return `${Math.floor(dif / (60000 * 60 * 24))}天前`;
        if (oldTIme >= thisYear) return `${new Date(currentTime).getMonth() - new Date(oldTIme).getMonth()}月前`;
        return new Date(oldTIme).toLocaleDateString().replace(/\//g, '-');
    };

    let getAge = (currentTime, birthday) => {
        let birthdayAry = new Date(birthday).toLocaleDateString().split('/'),
            nowAry = new Date(currentTime).toLocaleDateString().split('/');
        let age = nowAry[0] - birthdayAry[0] + 1;
        if (nowAry[1] < birthdayAry[1]) return age--;
        if (nowAry[1] === birthdayAry[1] && nowAry[2] < birthdayAry[2]) return age--;
        return age;
    }
    window.getTimeTip = getTimeTip;
    window.getAge = getAge;
})();
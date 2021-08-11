
export const type = () => {
        let tmp = ["손님/배달원", "점주"];
        let lists = [];

        for (let i = 0; i < 2; i++) {
            lists.push(<option value={i + 1} key={i+1}>{tmp[i]}</option>);
        }

        return lists;
    }

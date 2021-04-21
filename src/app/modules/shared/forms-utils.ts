export class FormsUtils {

    static enumSelector(enums) {
        return Object.keys(enums)
            .filter(e => !isNaN(Number(e)))
            .map(key => ({ title: enums[key], value: key }));
    }


}
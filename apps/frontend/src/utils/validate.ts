export const email = (email: string = "") => {
    if (!email) {
        return '';
    }
    const r: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return r.test(email);
};

export const phone = (phone: string = "") => {
    if (!phone) {
        return '';
    }
    const val_phone = phone.replace(/[()-\s+]/g, "");
    const r: RegExp = /^(((\+7|7|8)?)(9{1})([0-9]){9})$/;
    return r.test(val_phone) ? val_phone.length == 11 ? val_phone.substring(1) : val_phone : false;
};

interface LocalStorage {
    isSupported: boolean
}

class LocalStorage {
    constructor() {
        this.isSupported = (!localStorage || typeof localStorage.setItem !== "function") ? false : true;
    }

    /**
     * Сохраняет данные
     * в локальное хранилище
     */
    save(key: string, object: any): boolean {
        try {
            if (!this.isSupported) {
                throw (new Error("LocalStorage is not Supported"))
            }
            localStorage.setItem(key, JSON.stringify(object));
            return true;
        } catch (e) {
            console.error(e);
        }
        return false;
    }

    remove(): boolean {
        try {
            if (!this.isSupported) {
                throw (new Error("LocalStorage is not Supported"))
            }
            this.save("preferences", null);
            return true;
        } catch (e) {
            console.error(e);
        }
        return false;
    }

    /**
     * Загружает данные
     * из локального хранилища
     * @param {String} key 
     */
    load(key: string): any | null {
        try {
            if (!this.isSupported) {
                throw (new Error("LocalStorage is not Supported"))
            }
            const jsonObject = localStorage.getItem(key);

            if (jsonObject && jsonObject != "undefined" && typeof jsonObject != "undefined") {
                return JSON.parse(jsonObject);
            }
        } catch (e) {
            console.error(e);
        }
        return null;
    }

    /**
     * Сохраняет настройку
     * в локальное хранилище
     */
    setPreference(key: string, value: string): boolean {
        try {
            if (!this.isSupported) {
                throw (new Error("LocalStorage is not Supported"))
            }
            const currentPreferences = this.load("preferences") || {};
            let writeObject: { [key: string]: string } = {};
            writeObject[key] = value;
            this.save("preferences", Object.assign({}, currentPreferences, writeObject));
            return true;
        } catch (e) {
            console.error(e);
        }
        return false;
    }

    /**
     * Загружает настройку
     * из локального хранилища
     */
    getPreference(key: string): string | null {
        try {
            if (!this.isSupported) {
                throw (new Error("LocalStorage is not Supported"))
            }
            const object = this.load("preferences");
            if (object && typeof object[key] !== "undefined") {
                return object[key];
            }
        } catch (e) {
            console.error(e);
        }
        return null;
    }
}

export default new LocalStorage();
class PrefsEndpoint {
    private readonly prefs: any;


    constructor(prefs: { color: string }) {
        this.prefs = prefs;
    }

    fetchPrefs(): Promise<{ color: string }> {
        return Promise.resolve(this.prefs);
    }


}

export default PrefsEndpoint;

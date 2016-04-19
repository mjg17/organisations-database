import loki from 'lokijs';

export default class LokiPersist {
    constructor(path) {
        this.db = new loki(path);
    }

    load() {
        console.log('lp.load entered');
        let p = new Promise( (resolve, reject) => {
            console.log('lp.load promise started');
            this.db.loadDatabase({}, () => {
                resolve(); 
                console.log('lp.load promise resolved');
            }); 
        });
        console.log('lp.load returning promise object');
        return p;
    }
    
    save() {
        console.log('lp.save entered');
        let p = new Promise( (resolve, reject) => {
            console.log('lp.save promise started');
            this.db.saveDatabase(() => {
                resolve(); 
                console.log('lp.save promise resolved');
            });
        });
        console.log('lp.save returning promise object');
        return p;
    }
    
    persist(action) {
        console.log('lp.persist entered');
        let result;

        let p = this.load()
                .then( () => { result = action(this.db) } )
                .then( () => this.save() )
                .then( () => console.log('lp.persist about to resolve promise chain with result') )
                .then( () => result );

        console.log('lp.persist returning promise chain');
        return p;
    }
}

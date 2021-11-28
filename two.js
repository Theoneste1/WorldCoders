const compareFn = (a, b) => {
    
    let [aDepName, aSplit] = a.split('-');
    let [bDepName, bSplit] = b.split('-');
    
    aSplit = aSplit.split('.')
    bSplit = bSplit.split('.')
    const _A = aDepName
    const _B = bDepName
    
    const versionA = aSplit[0]
    const versionB= bSplit[0]


    const majorA = aSplit[1] 
    const majorB = bSplit[1] 
    
    const minorA = aSplit[2] 
    const minorB = bSplit[2]
    
    if(_A > _B) {
        return 1;
        
    } else if(_A < _B) {
        return -1;
        
    } else {
        // check main version
   
        if(+versionA > +versionB)  {
            return 1;
            
        } else if (+versionA < +versionB) {
            return -1;
            
        } else {
            
            if(+majorA > +majorB) {
                return 1;
            } else if(+majorA < +majorB) {
                return -1;
            } else {
                if(+minorA > +minorB) {
                    return 1;
                } else if(+minorA < +minorB) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
        
    }
    
}

function solution(operations) {
    let installedDeps = [];
    let addedDeps = [];
    

    operations.forEach((operation) => {
        
        const [command, dependency, version] = operation;
        
        // add library
        
        if(command === 'add') {
            const depIndex =  addedDeps.findIndex((deps) => deps.includes(dependency));
            
            if(depIndex !== -1) {
                addedDeps[depIndex] = `${dependency}-${version}`;
            } else {
                addedDeps.push(`${dependency}-${version}`);
            }
        // install library
            
        } else if (command === 'install') {
    
            installedDeps = [...installedDeps, ...addedDeps];
            addedDeps = [];
            
        }  
    });
    
    return installedDeps.sort(compareFn)
}
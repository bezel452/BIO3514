//Author:王宇尘
//Date:2023/1/18
function display_pathway(){
    document.getElementById("cy").innerHTML='';
    document.getElementById("error").innerHTML='';
    document.getElementById("content").innerHTML='';
    if(document.getElementById("pathway").checked && document.getElementById("text").value.toLowerCase() == "phenylketonuria")
    {
        Promise.all([
            fetch('cy-style.json', {mode: 'no-cors'})
            .then(function(res) {
                return res.json()
            })
        ])

            .then(function(dataArray){
            // var toJson = function(res){ return res.json(); };
            // var col = function(){ var tmp='red';return tmp;}
            // alert(col);
            var cy = window.cy = cytoscape({
                container: document.getElementById('cy'),
            
                // layout: {
                // name: 'grid',
                // columns: 3
                // },
                // 样式1
                layout: {
                    name: 'circle'
                    // name: 'fcose'
                    // name: 'grid'
                    // name: 'cise'
                },
                // 样式2
                // layout: {
                //     name: 'cose',
                //     idealEdgeLength: 100,
                //     nodeOverlap: 20,
                //     refresh: 20,
                //     fit: true,
                //     padding: 30,
                //     randomize: false,
                //     componentSpacing: 100,
                //     nodeRepulsion: 400000,
                //     edgeElasticity: 100,
                //     nestingFactor: 5,
                //     gravity: 80,
                //     numIter: 1000,
                //     initialTemp: 200,
                //     coolingFactor: 0.95,
                //     minTemp: 1.0
                // },
            
                style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                    'background-color': '#333a56',
                    'label': 'data(id)'
                    }
                },
            
                {
                    selector: 'edge',
                    style: {
                    'width': 2,
                    'line-color': '#333a56',
                    'target-arrow-color': '#333a56',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                    }
                }
                ],
            
                elements: [
                    { group: 'nodes', data: { id: 'p-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Acetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Betaine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Cysteinylglycine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Citric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Homovanillic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Glycine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Phenylalanine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Histidine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Phenylpyruvic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Phenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Vanillylmandelic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: '17-Hydroxyprogesterone' ,color:"black"} },
                    { group: 'nodes', data: { id: '3-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'ortho-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Leucine' ,color:"black"} },
                    { group: 'nodes', data: { id: '4-Hydroxyphenylpyruvic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hippuric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hydroxyphenyllactic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Phenyllactic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Valine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hydrogen Ion' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Carbon dioxide' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Coenzyme A' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Oxoglutaric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Glutamic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'NAD/NADH' ,color:"black"} },
                    { group: 'edges', data: { id: 'e1', source: 'Hydrogen Ion', target: 'Phenylacetic acid'} },
                    { group: 'edges', data: { id: 'e2', source: 'Hydrogen Ion', target: 'Homovanillic acid' } },
                    { group: 'edges', data: { id: 'e3', source: 'Hydrogen Ion', target: 'Vanillylmandelic acid' } },
                    { group: 'edges', data: { id: 'e4', source: 'Hydrogen Ion', target: 'p-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e5', source: 'Hydrogen Ion', target: 'Betaine' } },
                    { group: 'edges', data: { id: 'e6', source: 'Glycine', target: 'Cysteinylglycine' } },
                    { group: 'edges', data: { id: 'e7', source: 'Glycine', target: 'Carbon dioxide' } },
                    { group: 'edges', data: { id: 'e8', source: 'Glycine', target: 'Hippuric acid' } },
                    { group: 'edges', data: { id: 'e9', source: 'Carbon dioxide', target: 'L-Histidine' } },
                    { group: 'edges', data: { id: 'e10', source: 'Carbon dioxide', target: 'ortho-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e11', source: 'Coenzyme A', target: 'Citric acid' } },
                    { group: 'edges', data: { id: 'e12', source: 'Coenzyme A', target: 'Hippuric acid' } },
                    { group: 'edges', data: { id: 'e13', source: 'Coenzyme A', target: 'Glycine' } },
                    { group: 'edges', data: { id: 'e14', source: 'L-Phenylalanine', target: 'Phenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e15', source: 'Oxoglutaric acid', target: 'Phenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e16', source: 'Oxoglutaric acid', target: 'L-Valine' } },
                    { group: 'edges', data: { id: 'e17', source: 'Oxoglutaric acid', target: 'L-Leucine' } },
                    { group: 'edges', data: { id: 'e18', source: 'Oxoglutaric acid', target: '4-Hydroxyphenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e19', source: 'L-Glutamic acid', target: 'L-Leucine' } },
                    { group: 'edges', data: { id: 'e20', source: 'L-Glutamic acid', target: '4-Hydroxyphenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e21', source: 'L-Glutamic acid', target: 'L-Valine' } },
                    { group: 'edges', data: { id: 'e22', source: 'L-Glutamic acid', target: 'Phenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e23', source: 'L-Glutamic acid', target: 'L-Phenylalanine' } },
                    { group: 'edges', data: { id: 'e24', source: 'Phenylpyruvic acid', target: 'ortho-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e25', source: 'NAD/NADH', target: 'p-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e26', source: 'NAD/NADH', target: 'Betaine' } },
                    { group: 'edges', data: { id: 'e27', source: 'NAD/NADH', target: 'Homovanillic acid' } },
                    { group: 'edges', data: { id: 'e28', source: 'NAD/NADH', target: 'Phenylacetic acid' } },
                    { group: 'edges', data: { id: 'e29', source: 'NAD/NADH', target: 'Vanillylmandelic acid' } }
                ]
            
            
            

            });
        

            })();
    }
    else if(document.getElementById("pathway").checked && document.getElementById("text").value.toLowerCase() == "lung cancer")
    {
        Promise.all([
            fetch('cy-style.json', {mode: 'no-cors'})
            .then(function(res) {
                return res.json()
            })
        ])

            .then(function(dataArray){
            // var toJson = function(res){ return res.json(); };
            // var col = function(){ var tmp='red';return tmp;}
            // alert(col);
            var cy = window.cy = cytoscape({
                container: document.getElementById('cy'),
            
                // layout: {
                // name: 'grid',
                // columns: 3
                // },
                // 样式1
                layout: {
                    name: 'circle'
                    // name: 'fcose'
                    // name: 'grid'
                    // name: 'cise'
                },
                // 样式2
                // layout: {
                //     name: 'cose',
                //     idealEdgeLength: 100,
                //     nodeOverlap: 20,
                //     refresh: 20,
                //     fit: true,
                //     padding: 30,
                //     randomize: false,
                //     componentSpacing: 100,
                //     nodeRepulsion: 400000,
                //     edgeElasticity: 100,
                //     nestingFactor: 5,
                //     gravity: 80,
                //     numIter: 1000,
                //     initialTemp: 200,
                //     coolingFactor: 0.95,
                //     minTemp: 1.0
                // },
            
                style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                    'background-color': '#333a56',
                    'label': 'data(id)'
                    }
                },
            
                {
                    selector: 'edge',
                    style: {
                    'width': 2,
                    'line-color': '#333a56',
                    'target-arrow-color': '#333a56',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                    }
                }
                ],
            
                elements: [
                    { group: 'nodes', data: { id: 'Hypoxanthine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Acetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Propylene glycol' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Sucrose' ,color:"black"} },
                    { group: 'nodes', data: { id: 'D-Xylose' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Ethanol' ,color:"black"} },
                    { group: 'nodes', data: { id: '1-Methylnicotinamide' ,color:"black"} },
                    { group: 'nodes', data: { id: 'alpha-Hydroxyisobutyric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: '3-Hydroxyisovaleric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'p-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Alanine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Betaine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Carnitine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Choline' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Citric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'cis-Aconitic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Trimethylamine N-oxide' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Formic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Coenzyme A' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Glycine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Glutamic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hydrogen Ion' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hippuric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'NAD/NADH' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Water' ,color:"black"} },
                    { group: 'edges', data: { id: 'e1', source: 'alpha-Hydroxyisobutyric acid', target: '3-Hydroxyisovaleric acid'} },
                    { group: 'edges', data: { id: 'e2', source: '3-Hydroxyisovaleric acid', target: 'p-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e3', source: 'p-Hydroxyphenylacetic acid', target: 'alpha-Hydroxyisobutyric acid' } },
                    { group: 'edges', data: { id: 'e4', source: 'Hydrogen Ion', target: 'p-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e5', source: 'Hydrogen Ion', target: 'Betaine' } },
                    { group: 'edges', data: { id: 'e6', source: 'cis-Aconitic acid', target: 'Citric acid' } },
                    { group: 'edges', data: { id: 'e7', source: 'Glycine', target: 'Hippuric acid' } },
                    { group: 'edges', data: { id: 'e8', source: 'Coenzyme A', target: 'Citric acid' } },
                    { group: 'edges', data: { id: 'e9', source: 'Coenzyme A', target: 'L-Carnitine' } },
                    { group: 'edges', data: { id: 'e10', source: 'Coenzyme A', target: 'Choline' } },
                    { group: 'edges', data: { id: 'e11', source: 'Coenzyme A', target: 'Glycine' } },
                    { group: 'edges', data: { id: 'e12', source: 'Coenzyme A', target: 'Hippuric acid' } },
                    { group: 'edges', data: { id: 'e13', source: 'Water', target: 'Hypoxanthine' } },
                    { group: 'edges', data: { id: 'e14', source: 'Water', target: 'Sucrose' } },
                    { group: 'edges', data: { id: 'e15', source: 'Water', target: '1-Methylnicotinamide' } },
                    { group: 'edges', data: { id: 'e16', source: 'Water', target: 'p-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e17', source: 'Water', target: 'L-Alanine' } },
                    { group: 'edges', data: { id: 'e18', source: 'Water', target: 'Betaine' } },
                    { group: 'edges', data: { id: 'e19', source: 'Water', target: 'Formic acid' } },
                    { group: 'edges', data: { id: 'e20', source: 'NAD/NADH', target: 'Formic acid' } },
                    { group: 'edges', data: { id: 'e21', source: 'NAD/NADH', target: 'Trimethylamine N-oxide' } },
                    { group: 'edges', data: { id: 'e22', source: 'NAD/NADH', target: 'p-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e23', source: 'NAD/NADH', target: 'Betaine' } },
                    { group: 'edges', data: { id: 'e24', source: 'NAD/NADH', target: 'Hypoxanthine' } },
                    { group: 'edges', data: { id: 'e25', source: 'NAD/NADH', target: 'Propylene glycol' } },
                    { group: 'edges', data: { id: 'e26', source: 'NAD/NADH', target: 'D-Xylose' } }
                ]
        
        
            
            
            

            });
        

            })();
    }
    else if(document.getElementById("pathway").checked && document.getElementById("text").value.toLowerCase() == "prostate cancer")
    {
        Promise.all([
            fetch('cy-style.json', {mode: 'no-cors'})
            .then(function(res) {
                return res.json()
            })
        ])

            .then(function(dataArray){
            // var toJson = function(res){ return res.json(); };
            // var col = function(){ var tmp='red';return tmp;}
            // alert(col);
            var cy = window.cy = cytoscape({
                container: document.getElementById('cy'),
            
                // layout: {
                // name: 'grid',
                // columns: 3
                // },
                // 样式1
                layout: {
                    name: 'circle'
                    // name: 'fcose'
                    // name: 'grid'
                    // name: 'cise'
                },
                // 样式2
                // layout: {
                //     name: 'cose',
                //     idealEdgeLength: 100,
                //     nodeOverlap: 20,
                //     refresh: 20,
                //     fit: true,
                //     padding: 30,
                //     randomize: false,
                //     componentSpacing: 100,
                //     nodeRepulsion: 400000,
                //     edgeElasticity: 100,
                //     nestingFactor: 5,
                //     gravity: 80,
                //     numIter: 1000,
                //     initialTemp: 200,
                //     coolingFactor: 0.95,
                //     minTemp: 1.0
                // },
            
                style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                    'background-color': '#333a56',
                    'label': 'data(id)'
                    }
                },
            
                {
                    selector: 'edge',
                    style: {
                    'width': 2,
                    'line-color': '#333a56',
                    'target-arrow-color': '#333a56',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                    }
                }
                ],
            
                elements: [
                    { group: 'nodes', data: { id: 'Selenomethionine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Orotidylic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Deoxyuridine triphosphate' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hydroxyphenyllactic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Gulonolactone' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Gluconolactone' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Sorbose' ,color:"black"} },
                    { group: 'nodes', data: { id: 'myo-Inositol 6-phosphate' ,color:"black"} },
                    { group: 'nodes', data: { id: 'N-Acetyl-L-glutamic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Histidine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Methyldopa' ,color:"black"} },
                    { group: 'nodes', data: { id: 'N-Acetyl-b-glucosaminylamine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Ureidosuccinic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Glycine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Glutamic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'ortho-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Leucine' ,color:"black"} },
                    { group: 'nodes', data: { id: '4-Hydroxyphenylpyruvic acid' ,color:"black"} }, 
                    { group: 'nodes', data: { id: 'Phenyllactic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Valine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hydrogen Ion' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Carbon dioxide' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Coenzyme A' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Oxoglutaric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Water' ,color:"black"} },
                    { group: 'nodes', data: { id: 'NAD/NADH' ,color:"black"} },
                    { group: 'edges', data: { id: 'e1', source: 'Hydrogen Ion', target: 'ortho-Hydroxyphenylacetic acid'} },
                    { group: 'edges', data: { id: 'e2', source: 'Hydrogen Ion', target: 'Hydroxyphenyllactic acid' } },
                    { group: 'edges', data: { id: 'e3', source: 'Hydrogen Ion', target: 'L-Sorbose' } },
                    { group: 'edges', data: { id: 'e4', source: 'Glycine', target: 'Gluconolactone' } },
                    { group: 'edges', data: { id: 'e5', source: 'Glycine', target: 'Carbon dioxide' } },
                    { group: 'edges', data: { id: 'e6', source: 'Carbon dioxide', target: 'L-Histidine' } },
                    { group: 'edges', data: { id: 'e7', source: 'Carbon dioxide', target: 'ortho-Hydroxyphenylacetic acid' } },
                    { group: 'edges', data: { id: 'e8', source: 'Coenzyme A', target: 'N-Acetyl-L-glutamic acid' } },
                    { group: 'edges', data: { id: 'e9', source: 'Coenzyme A', target: 'Glycine' } },
                    { group: 'edges', data: { id: 'e10', source: 'Gluconolactone', target: 'L-Gulonolactone' } },
                    { group: 'edges', data: { id: 'e11', source: 'Oxoglutaric acid', target: 'L-Valine' } },
                    { group: 'edges', data: { id: 'e12', source: 'Oxoglutaric acid', target: 'L-Leucine' } },
                    { group: 'edges', data: { id: 'e13', source: 'Oxoglutaric acid', target: '4-Hydroxyphenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e14', source: 'L-Glutamic acid', target: 'N-Acetyl-L-glutamic acid' } },
                    { group: 'edges', data: { id: 'e15', source: 'L-Glutamic acid', target: '4-Hydroxyphenylpyruvic acid' } },
                    { group: 'edges', data: { id: 'e16', source: 'Water', target: 'L-Gulonolactone' } },
                    { group: 'edges', data: { id: 'e17', source: 'Water', target: 'Gluconolactone' } },
                    { group: 'edges', data: { id: 'e18', source: 'Water', target: 'myo-Inositol 6-phosphate' } },
                    { group: 'edges', data: { id: 'e19', source: 'Water', target: 'N-Acetyl-b-glucosaminylamine' } },
                    { group: 'edges', data: { id: 'e20', source: 'NAD/NADH', target: 'L-Sorbose' } },
                    { group: 'edges', data: { id: 'e21', source: 'NAD/NADH', target: 'Selenomethionine' } },
                    { group: 'edges', data: { id: 'e22', source: 'NAD/NADH', target: 'Ureidosuccinic acid' } },
                    { group: 'edges', data: { id: 'e23', source: 'NAD/NADH', target: 'Orotidylic acid' } }
                ]
        
        
        
        
            
            
            

            });
        

            })();
    }
    else if(document.getElementById("pathway").checked && document.getElementById("text").value.toLowerCase() == "diabetes")
    {
        Promise.all([
            fetch('cy-style.json', {mode: 'no-cors'})
            .then(function(res) {
                return res.json()
            })
        ])

            .then(function(dataArray){
            // var toJson = function(res){ return res.json(); };
            // var col = function(){ var tmp='red';return tmp;}
            // alert(col);
            var cy = window.cy = cytoscape({
                container: document.getElementById('cy'),
            
                // layout: {
                // name: 'grid',
                // columns: 3
                // },
                // 样式1
                layout: {
                    name: 'circle'
                    // name: 'fcose'
                    // name: 'grid'
                    // name: 'cise'
                },
                // 样式2
                // layout: {
                //     name: 'cose',
                //     idealEdgeLength: 100,
                //     nodeOverlap: 20,
                //     refresh: 20,
                //     fit: true,
                //     padding: 30,
                //     randomize: false,
                //     componentSpacing: 100,
                //     nodeRepulsion: 400000,
                //     edgeElasticity: 100,
                //     nestingFactor: 5,
                //     gravity: 80,
                //     numIter: 1000,
                //     initialTemp: 200,
                //     coolingFactor: 0.95,
                //     minTemp: 1.0
                // },
            
                style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                    'background-color': '#333a56',
                    'label': 'data(id)'
                    }
                },
            
                {
                    selector: 'edge',
                    style: {
                    'width': 2,
                    'line-color': '#333a56',
                    'target-arrow-color': '#333a56',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                    }
                }
                ],
            
                elements: [
                    { group: 'nodes', data: { id: 'D-Glucose' ,color:"black"} },
                    { group: 'nodes', data: { id: 'alpha-D-Glucose' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Lactic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Valine' ,color:"black"} },
                    { group: 'nodes', data: { id: '3-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'gamma-Aminobutyric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Citric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Dimethylamine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hippuric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Glycine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Formic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'beta-Carotene' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Uric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: '3-Methylhistidine' ,color:"black"} },
                    { group: 'nodes', data: { id: '1,5-Anhydrosorbitol' ,color:"black"} },
                    { group: 'nodes', data: { id: '3-Hydroxybutyric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'ortho-Hydroxyphenylacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Acetoacetic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'S-Adenosylmethionine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Carnitine' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Glycerol' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Hydrogen Ion' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Carbon dioxide' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Coenzyme A' ,color:"black"} },
                    { group: 'nodes', data: { id: 'Oxoglutaric acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'L-Glutamic acid' ,color:"black"} },
                    { group: 'nodes', data: { id: 'NAD/NADH' ,color:"black"} },
                    { group: 'nodes', data: { id: 'D-Lactic acid',color:"black"} },
                    { group: 'nodes', data: { id: 'Estriol',color:"black"} },
                    { group: 'nodes', data: { id: 'Pyruvaldehyde',color:"black"} },
                    { group: 'nodes', data: { id: 'D-Fructose',color:"black"} },
                    { group: 'nodes', data: { id: 'L-Leucine',color:"black"} },
                    { group: 'nodes', data: { id: 'Water',color:"black"} },
                    { group: 'nodes', data: { id: 'NADP/NADPH',color:"black"} },
                    { group: 'nodes', data: { id: 'Oxygen',color:"black"} },
                    { group: 'nodes', data: { id: 'ADP',color:"black"} },
                    { group: 'edges', data: { id: 'e1', source: 'Hydrogen Ion', target: 'L-Lactic acid'} },
                    { group: 'edges', data: { id: 'e2', source: 'Hydrogen Ion', target: 'gamma-Aminobutyric acid' } },
                    { group: 'edges', data: { id: 'e3', source: 'Hydrogen Ion', target: 'Formic acid' } },
                    { group: 'edges', data: { id: 'e4', source: 'Hydrogen Ion', target: 'Estriol' } },
                    { group: 'edges', data: { id: 'e5', source: 'Hydrogen Ion', target: 'Pyruvaldehyde' } },
                    { group: 'edges', data: { id: 'e6', source: 'D-Glucose', target: 'alpha-D-Glucose' } },
                    { group: 'edges', data: { id: 'e7', source: 'alpha-D-Glucose', target: 'D-Glucose' } },
                    { group: 'edges', data: { id: 'e8', source: 'Glycine', target: 'Hippuric acid' } },
                    { group: 'edges', data: { id: 'e9', source: 'Carbon dioxide', target: 'L-Valine' } },
                    { group: 'edges', data: { id: 'e10', source: 'Coenzyme A', target: 'L-Carnitine' } },
                    { group: 'edges', data: { id: 'e11', source: 'Coenzyme A', target: 'Citric acid' } },
                    { group: 'edges', data: { id: 'e12', source: 'Coenzyme A', target: 'Hippuric acid' } },
                    { group: 'edges', data: { id: 'e13', source: 'Coenzyme A', target: 'Glycine' } },
                    { group: 'edges', data: { id: 'e14', source: 'Water', target: 'Dimethylamine' } },
                    { group: 'edges', data: { id: 'e15', source: 'Water', target: 'Formic acid' } },
                    { group: 'edges', data: { id: 'e16', source: 'Oxoglutaric acid', target: 'L-Valine' } },
                    { group: 'edges', data: { id: 'e17', source: 'Oxoglutaric acid', target: 'L-Leucine' } },
                    { group: 'edges', data: { id: 'e18', source: 'Water', target: 'Uric acid' } },
                    { group: 'edges', data: { id: 'e19', source: 'L-Glutamic acid', target: 'L-Leucine' } },
                    { group: 'edges', data: { id: 'e20', source: 'ADP', target: 'D-Fructose' } },
                    { group: 'edges', data: { id: 'e21', source: 'L-Glutamic acid', target: 'L-Valine' } },
                    { group: 'edges', data: { id: 'e22', source: 'ADP', target: 'Citric acid' } },
                    { group: 'edges', data: { id: 'e23', source: 'ADP', target: 'alpha-D-Glucose' } },
                    { group: 'edges', data: { id: 'e24', source: 'ADP', target: 'D-Glucose' } },
                    { group: 'edges', data: { id: 'e25', source: 'NAD/NADH', target: 'L-Lactic acid' } },
                    { group: 'edges', data: { id: 'e26', source: 'NAD/NADH', target: 'Estriol' } },
                    { group: 'edges', data: { id: 'e27', source: 'NAD/NADH', target: 'Pyruvaldehyde' } },
                    { group: 'edges', data: { id: 'e28', source: 'NADP/NADPH', target: 'gamma-Aminobutyric acid' } },
                    { group: 'edges', data: { id: 'e29', source: 'NADP/NADPH', target: 'Formic acid' } },
                    { group: 'edges', data: { id: 'e30', source: 'NADP/NADPH', target: '1,5-Anhydrosorbitol' } },
                    { group: 'edges', data: { id: 'e31', source: 'NADP/NADPH', target: 'Glycerol' } },
                    { group: 'edges', data: { id: 'e32', source: 'Water', target: 'D-Lactic acid' } },
                    { group: 'edges', data: { id: 'e33', source: 'Oxygen', target: 'Dimethylamine' } },
                    { group: 'edges', data: { id: 'e34', source: 'Oxygen', target: 'Formic acid' } },
                    { group: 'edges', data: { id: 'e35', source: 'Oxygen', target: 'beta-Carotene' } },
                    { group: 'edges', data: { id: 'e36', source: 'Oxygen', target: 'Uric acid' } }
        
                ]
        
        
        
        
            
            
            

            });
        

            })();
    }
    else
    {
        document.getElementById("error").innerHTML="Oops, nothing was found."
    }   
}   

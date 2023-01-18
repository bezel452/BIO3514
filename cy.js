function display(){
    document.getElementById("cy").innerHTML='';
    document.getElementById("error").innerHTML='';
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
    else
    {
        document.getElementById("error").innerHTML="Oops, nothing was found."
    }   
}   

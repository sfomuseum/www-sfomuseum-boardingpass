window.addEventListener("load", function load(event){

    var btn = document.getElementById("button");
    


	btn.onclick = function(){
	    parse();
	    return false;
	}
	
	btn.innerText = "Parse";
	btn.removeAttribute("disabled");
	
    }).catch(err => {
	console.error("Failed to initialize parse_bcbp.wasm", err)
    });
    
});

async function parse() {
    
    var raw_el = document.getElementById("raw");
    var bcbp_str = raw_el.value;
    
    var result_el = document.getElementById("result");
    result_el.style.display = "none";
    
    result_el.innerHTML = "";

    console.log("Parse BCBP string '" + bcbp_str + "'");
    
    parse_bcbp(bcbp_str).then(rsp => {

	var bcbp_data;
	
	try {
	    bcbp_data = JSON.parse(rsp)
	} catch(e){
	    result_el.innerText = "Unable to parse your BCBP string: " + e;
	    
	    result_el.style.display = "block";
	    return;
	}
	
	var pre = document.createElement("pre");
	pre.innerText = JSON.stringify(bcbp_data, '', 2);
	
	result_el.appendChild(pre);
	result_el.style.display = "block";	    	    	
	
    }).catch(err => {

	console.error("Failed to parse BCBP string ", err);
	
	result_el.innerText = "There was a problem parsing your BCBP string:" + err;
	result_el.style.display = "block";    	
    });
    
    return false;
}
    

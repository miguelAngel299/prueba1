function ClienteRest(){

	// this.crearPartida=function(nick,num){
	// 	$.getJSON("/crearPartida/"+nick+"/"+num,function(data){    
 //    		console.log(data);
	// 	});
	// };
	//Aportacion JAGallud
	this.crearPartida=function(nick,num,callback){
		$.getJSON("/crearPartida/"+nick+"/"+num,function(data){    
    		console.log(data);
    		callback(data);
		});
	}


	this.unirAPartida=function(nick,codigoPartida){
		$.getJSON("/unirAPartida/"+nick+"/"+codigoPartida,function(data){    
    		console.log(data);
		});
	};

	this.listaPartidas=function(){
		$.getJSON("/listaPartidas",function(data){    
    		console.log(data);
		});
	};
}

//esta función está en el archivo clienteRest.js pero NO está dentro del objeto ClienteRest()
function pruebas(){
	var codigo=undefined;
	rest.crearPartida("pepe",3,function(data){
		codigo=data.codigo;		
	});
	rest.crearPartida("pepe",4,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	rest.crearPartida("pepe",5,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});

	rest.crearPartida("pepe",6,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	rest.crearPartida("pepe",7,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	rest.crearPartida("pepe",8,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	rest.crearPartida("pepe",9,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	rest.crearPartida("pepe",10,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	rest.crearPartida("pepe",11,function(data){
		codigo=data.codigo;
		rest.unirAPartida("juan",codigo);
		rest.unirAPartida("juani",codigo);
		rest.unirAPartida("juana",codigo);
		rest.unirAPartida("juanma",codigo);
	});
	
//agregar otras partidas de 6, 7… hasta 10 jugadores
}

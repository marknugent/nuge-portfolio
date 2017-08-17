(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vertline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,2).p("EAAAgngMAAABPB");
	this.shape.setTransform(0,236.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-18.5,5,510.8);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#252525","rgba(0,0,0,0.298)","rgba(25,25,25,0.4)","rgba(0,0,0,0)"],[0,0.584,0.682,0.902,1],0.1,0.1,0,0.1,0.1,70.8).s().p("AnrHsQjLjMAAkgQAAkfDLjLQDMjMEfAAQEgAADLDMQDMDLAAEfQAAEgjMDMQjLDLkgAAQkfAAjMjLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-69.5,139,139);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#252525","rgba(0,0,0,0.298)","rgba(25,25,25,0.4)","rgba(0,0,0,0)"],[0,0.584,0.682,0.902,1],0.1,0.1,0,0.1,0.1,70.8).s().p("AnrHsQjLjMAAkgQAAkfDLjLQDMjMEfAAQEgAADLDMQDMDLAAEfQAAEgjMDMQjLDLkgAAQkfAAjMjLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-69.5,139,139);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1616").s().p("AnSHTQjBjBAAkSQAAkQDBjCQDCjBEQAAQESAADBDBQDBDCAAEQQAAESjBDBQjBDBkSAAQkQAAjCjBg");
	this.shape.setTransform(66,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,132,132), null);


(lib.switchol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,0,0,4).p("AnfrJIO/AAQEoAADRDRQBjBjA2CAQA4CFAACQQAACRg4CFQg2CAhjBjQjRDRkoAAIu/AAQkoAAjRjRQhihjg3iAQg4iFAAiRQAAiQA4iFQA3iABihjQBjhiCAg3QCFg4CRAAg");
	this.shape.setTransform(113.6,69.5,0.951,0.973);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,234.1,146);


(lib.splodecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8B+Qg1g0AAhKQAAhIA1g0QA0g1BIAAQBKAAA0A1QA0A0gBBIQABBKg0A0Qg0A0hKgBQhIABg0g0g");
	this.shape.setTransform(17.8,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,35.5);


(lib.rightshade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtyAseIAAtnMA87AAAMAAAhLUIa6AAMAAABK2IDwAAIAAOFg");
	this.shape.setTransform(-96.9,284.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,0,586.2,569.2);


(lib.radioselected = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(47).p("AHgAAQAADHiMCMQiNCNjHAAQjGAAiMiNQiNiMAAjHQAAjGCNiNQCMiMDGAAQDHAACNCMQCMCNAADGg");
	this.shape.setTransform(48.5,47.5,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.radioselected, new cjs.Rectangle(-22.5,-23.5,142,142), null);


(lib.lineanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,2).p("EAAAgoMMAAABQZ");
	this.shape.setTransform(0,231.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lineanimate, new cjs.Rectangle(-2.5,-28.1,5,519.6), null);


(lib.ioshline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.4)").ss(5,2).p("EgqsAAAMBVZAAA");
	this.shape.setTransform(273.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,551.6,5);


(lib.hline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("EggCAAAMBAFAAA");
	this.shape.setTransform(205.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,415.1,5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AurGaIAAszIdXAAIAAMzg");
	this.shape.setTransform(94,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,188,82), null);


(lib.closebog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEMFHIgZgOIjxjqIjwDqQgNAJgQAFQgiAJgWgXQgWgYAMghIAQgcIDtjkIjtjmQgIgKgEgPQgJgeAVgYQAWgXAeAGQAQAEALAIIDwDpIDxjpQALgKARgEQAcgFAWAYQAWAYgJAeQgEAPgJAKIjsDmIDsDkIAOAcQAJAhgXAYQgQARgUAAQgIAAgJgDg");
	this.shape.setTransform(32.4,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,67.6,65.9);


(lib.circlefill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAK8QkhAAjNjNQjNjNAAkiQAAkhDNjNIAAAAQDNjNEhAAQEiAADNDNIAAAAQDNDNAAEhQAAEijNDNQjNDNkiAAIAAAAg");
	this.shape.setTransform(68,68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,140,140);


(lib.circleFAB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAK8QkhAAjNjNQjNjNAAkiQAAkhDNjNIAAAAQDNjNEhAAQEiAADNDNIAAAAQDNDNAAEhQAAEijNDNQjNDNkiAAIAAAAgAjAAhICgAAIAAChIBBAAIAAihIChAAIAAhBIihAAIAAigIhBAAIAACgIigAAg");
	this.shape.setTransform(68,68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,140,140);


(lib.circlebasic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4).p("AAAKoQEZAADIjHQDHjHAAkaQAAkYjHjIQjIjHkZAAQkZAAjHDHQjHDIAAEYQAAEaDHDHQDHDHEZAAg");
	this.shape.setTransform(68,68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circlebasic, new cjs.Rectangle(-2,-2,140,140), null);


(lib.circ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6363").s().p("AncHeQjGjGABkYQgBkXDGjGQDFjFEXAAQEXAADGDFQDGDGAAEXQAAEYjGDGQjGDFkXAAQkXAAjFjFg");
	this.shape.setTransform(66.2,66.2,0.982,0.981);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ2, new cjs.Rectangle(0,0,132.5,132.5), null);


(lib.circ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AivCxQhKhKAAhnQAAhnBKhJQBIhJBnAAQBoAABJBJQBJBJAABnQAABnhJBKQhJBJhoAAQhnAAhIhJg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50.1);


(lib.buttondown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AngHhQjHjHAAkaQAAkZDHjHQDHjHEZAAQEaAADHDHQDHDHAAEZQAAEajHDHQjHDHkaAAQkZAAjHjHg");
	this.shape.setTransform(66,66,0.971,0.971);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.bshad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Egj7AkfQiQAAiDg4Qh+g1hihhQhihig1h+Qg3iEAAiPMAAAgy7QAAiQA3iCQA1h/BihhQBihiB+g2QCDg3CQAAMBH3AAAQCQAACCA3QB/A2BhBiQBiBhA2B/QA3CCAACQMAAAAy7QAACPg3CEQg2B+hiBiQhhBhh/A1QiCA4iQAAg");
	this.shape.setTransform(303,236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egj7AlRQiZAAiNg8QiIg4hohpQhohog6iHQg7iNAAiaMAAAgy7QAAiaA7iMQA6iHBohpQBohoCIg6QCNg7CZAAMBH3AAAQCZAACNA7QCIA6BoBoQBoBpA5CHQA8CMAACaMAAAAy7QAACag8CNQg5CHhoBoQhoBpiIA4QiNA8iZAAgEgoOgjnQh+A2hiBiQhiBhg1B/Qg3CCAACQMAAAAy7QAACPA3CEQA1B+BiBiQBiBhB+A1QCDA4CQAAMBH3AAAQCQAACCg4QB/g1BhhhQBihiA2h+QA3iEAAiPMAAAgy7QAAiQg3iCQg2h/hihhQhhhih/g2QiCg3iQAAMhH3AAAQiQAAiDA3g");
	this.shape_1.setTransform(303,236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,611,477);


(lib.browserbarshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.118)","rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.51,1],0,-126.2,0,126.2).s().p("EgvMATuMAAAgg7QBahTA4hsIADAEIABAEQA8hPBog1QAGgFAKgDQAegmBbggQAMgEAMgBQANgMARgGMBWfAAAMAAAAnbgAF4nfQjGDHgBEZQABEaDGDHQDIDIEaAAQEaAADHjIQDIjHAAkaQAAkZjIjHQjHjHkaAAQkaAAjIDHgA9ankQjGDHgBEaQABEZDGDHQDIDIEaAAQEaAADHjIQDIjHAAkZQAAkajIjHQjHjHkaAAQkaAAjIDHg");
	this.shape.setTransform(302.1,126.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604.1,252.5);


(lib.browserframe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("Egj7gk3MBH3AAAQCUAACIA5QCDA4BlBlQBlBlA4CDQA5CIAACUMAAAAy7QAACUg5CJQg4CChlBmQhlBliDA3QiIA5iUAAMhH3AAAQiVAAiIg5QiCg3hmhlQhlhmg3iCQg5iJAAiUMAAAgy7QAAiUA5iIQA3iDBlhlQBmhlCCg4QCIg5CVAAg");
	this.shape.setTransform(303,236);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-6.2,614.8,480.7);


(lib.broswerhline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,2).p("EgnsAAAMBPZAAA");
	this.shape.setTransform(254.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,513.2,5);


(lib.anothermasky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiSCSQg8g8AAhWQAAhVA8g9QA+g8BUAAQBWAAA9A8QA8A9AABVQAABWg8A8Qg9A9hWAAQhUAAg+g9gAg4g6QgVAWAAAgQAAAeAVAWQAWAWAgAAQAeAAAWgWQAXgWAAgeQAAgggXgWQgWgWgeAAQggAAgWAWg");
	this.shape.setTransform(20.7,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,41.4);


(lib.switchon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AnELQQiSAAiGg5QiBg2hjhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iBBkhkQBjhjCBg3QCGg5CSAAIOJAAQCSAACFA5QCBA3BkBjQBkBkA2CBQA5CGAACRQAACTg5CGQg2CAhkBkQhkBkiBA2QiFA5iSAAgAgenSQjADEAAESQAAERDDDEQBbBcB4A0QB8A0CFAAQCHAAB8g0QB5g0BehcQBdhdAzh2QA2h8gBiGQgEkkjJjAQjBi5kYAAQkQAAjADHg");
	this.shape.setTransform(128.6,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.4,3.6,234.4,144);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,66,66);
	this.instance.shadow = new cjs.Shadow("rgba(255,23,23,1)",-1,8,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-85,188,188);


(lib.shadowFAB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As6M7QlWlXAAnkQAAnkFWlWQFWlWHkAAQHkAAFXFWQFWFWAAHkQAAHklWFXQlXFWnkAAQnkAAlWlWgAnhnhQjIDHAAEaQAAEaDIDIQDHDIEaAAQEaAADIjIQDIjIAAkaQAAkajIjHQjIjIkaAAIgBAAQkZAAjHDIg");
	mask.setTransform(138.5,130.8);

	// Layer 1
	this.instance = new lib.circ();
	this.instance.parent = this;
	this.instance.setTransform(138.8,131,2.72,2.717,0,0,0,25.1,25.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",-2,19,23);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,55.8,190,190);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhwfDGXMAAAmMtMDg/AAAMAAAGMtg");
	mask.setTransform(720,1269.5);

	// Layer 3
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(1110,476,1,1,0,0,0,94,41);
	this.instance.alpha = 0.191;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(1016,435,188,82), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At5FoIAArPIbzAAIAALPg");
	mask.setTransform(1110,476);

	// Layer 3
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(720,1269.5,1,1,0,0,0,720,1269.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(1021,440,178,72), null);


(lib.controls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmAA5IAAhxIMBAAIAABxg");
	this.shape.setTransform(258.7,32.9);

	this.instance = new lib.closebog("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.4,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.2,65.9);


(lib.circledrop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlmFhQiViSAAjPQAAjOCViSQCViTDRAAQDSAACVCTQCVCSAADOQAADPiVCSQiVCTjSAAQjRAAiViTgAi3jBQhJBMAABrQAABpBJBLQBKBMBoAAQBoAABJhMQBJhLAAhpQAAhrhJhMQhJhLhoAAQhoAAhKBLg");
	mask.setTransform(25.6,26.3);

	// Layer 1
	this.instance = new lib.circ();
	this.instance.parent = this;
	this.instance.setTransform(25.1,25.2,1,1.019,0,0,0,25,25.1);
	this.instance.shadow = new cjs.Shadow("rgba(255,23,23,1)",-2,6,17);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circledrop, new cjs.Rectangle(-20.9,-13.4,89,89.7), null);


(lib.butcompose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlWFXQiOiOAAjJQAAjICOiPQCOiNDIAAQDJAACOCNQCOCPAADIQAADJiOCOQiOCOjJAAQjIAAiOiOgAjVBxIAABcIBcAAIEOkOIhchbgACAjkIgtAtIBcBcIAtgtQAGgGAAgLQAAgKgGgHIg6g6QgHgGgKAAQgLAAgGAGg");
	this.shape.setTransform(48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// icon color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F65554").s().p("AlVFVQhdhegfh3QgQg9AAhDQAAjICMiNQCOiMDHAAQDIAACMCMIADADQCLCNAADFQAADIiOCNQgmAmgqAcQgeATgfAPQhaAphtAAQjHAAiOiNg");
	this.shape_1.setTransform(48.9,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shad
	this.instance = new lib.shadowFAB("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.7,47.1,0.638,0.638,0,0,0,140,134.2);
	this.instance.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-5.4,141,125);


(lib.switchoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_138 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(68).call(this.frame_68).wait(70).call(this.frame_138).wait(4));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("AjmnzQgUgTAAgcQAAgbAUgUQATgTAbAAQAcAAATATQAUAUAAAbQAAAcgUATQgTATgcAAQgbAAgTgTg");
	var mask_graphics_28 = new cjs.Graphics().p("AjqndQgZgYAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAYAZAAAjQAAAjgYAYQgZAZgjAAQgjAAgZgZg");
	var mask_graphics_29 = new cjs.Graphics().p("AjunGQgegeAAgrQAAgrAegeQAfgeAqAAQArAAAeAeQAeAeAAArQAAArgeAeQgeAegrAAQgqAAgfgeg");
	var mask_graphics_30 = new cjs.Graphics().p("AjxmwQgkgjAAgzQAAgyAkgjQAjgkAzAAQAyAAAjAkQAkAjAAAyQAAAzgkAjQgjAkgyAAQgzAAgjgkg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj1mZQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQAoApAAA6QAAA6goApQgpAog6AAQg6AAgpgog");
	var mask_graphics_32 = new cjs.Graphics().p("Aj4mDQgvguAAhCQAAhBAvguQAugvBBAAQBCAAAuAvQAtAuAABBQAABCgtAuQguAuhCAAQhBAAgugug");
	var mask_graphics_33 = new cjs.Graphics().p("Aj8ltQg0gzAAhJQAAhJA0g0QA0g0BJAAQBJAAAzA0QAzA0AABJQAABJgzAzQgzA0hJAAQhJAAg0g0g");
	var mask_graphics_34 = new cjs.Graphics().p("AkAlWQg5g5AAhRQAAhQA5g5QA5g5BRAAQBRAAA3A5QA5A5AABQQAABRg5A5Qg3A5hRAAQhRAAg5g5g");
	var mask_graphics_35 = new cjs.Graphics().p("AkDlAQg/g+AAhZQAAhYA/g+QA+g+BYAAQBYAAA+A+QA+A+AABYQAABZg+A+Qg+A+hYAAQhYAAg+g+g");
	var mask_graphics_36 = new cjs.Graphics().p("AkHkqQhEhDAAhgQAAhgBEhEQBEhDBgAAQBfAABDBDQBEBEAABgQAABghEBDQhDBEhfAAQhgAAhEhEg");
	var mask_graphics_37 = new cjs.Graphics().p("AkKkTQhKhJAAhoQAAhnBKhJQBJhJBnAAQBmAABJBJQBKBJAABnQAABohKBJQhJBJhmAAQhnAAhJhJg");
	var mask_graphics_38 = new cjs.Graphics().p("AkOj9QhPhOAAhvQAAhvBPhPQBOhOBvAAQBuAABPBOQBOBPAABvQAABvhOBOQhPBPhuAAQhvAAhOhPg");
	var mask_graphics_39 = new cjs.Graphics().p("AkSjnQhThTAAh3QAAh2BThUQBUhUB3AAQB1AABUBUQBUBUAAB2QAAB3hUBTQhUBUh1AAQh3AAhUhUg");
	var mask_graphics_40 = new cjs.Graphics().p("AkVjQQhZhZAAh+QAAh/BZhZQBZhZB+AAQB9AABZBZQBaBZAAB/QAAB+haBZQhZBZh9AAQh+AAhZhZg");
	var mask_graphics_41 = new cjs.Graphics().p("AkZi6QheheAAiGQAAiGBeheQBfhfCFAAQCFAABfBfQBeBeAACGQAACGheBeQhfBfiFAAQiFAAhfhfg");
	var mask_graphics_42 = new cjs.Graphics().p("AkcijQhkhkAAiOQAAiNBkhkQBjhkCOAAQCMAABkBkQBkBkAACNQAACOhkBkQhkBjiMAAQiOAAhjhjg");
	var mask_graphics_43 = new cjs.Graphics().p("AkgiNQhphpAAiVQAAiVBphpQBphqCVAAQCUAABpBqQBqBpAACVQAACVhqBpQhpBpiUAAQiVAAhphpg");
	var mask_graphics_44 = new cjs.Graphics().p("Akkh3QhuhuAAidQAAicBuhvQBvhvCcAAQCcAABvBvQBuBvAACcQAACdhuBuQhvBvicAAQicAAhvhvg");
	var mask_graphics_45 = new cjs.Graphics().p("AknhgQh0h0AAikQAAilB0h0QB0h0CkAAQCjAAB0B0QB0B0AAClQAACkh0B0Qh0BzijAAQikAAh0hzg");
	var mask_graphics_46 = new cjs.Graphics().p("AkrhKQh5h5AAisQAAisB5h5QB5h6CsAAQCrAAB5B6QB6B5AACsQAACsh6B5Qh5B4irAAQisAAh5h4g");
	var mask_graphics_47 = new cjs.Graphics().p("Akxg0Qh/h+AAi0QAAizB/h/QB/h+CyAAQCzAAB/B+QB/B/AACzQAAC0h/B+Qh/B+izAAQiyAAh/h+g");
	var mask_graphics_48 = new cjs.Graphics().p("Ak+gdQiEiEAAi7QAAi7CEiEQCEiEC6AAQC7AACECEQCECEAAC7QAAC7iECEQiECDi7AAQi6AAiEiDg");
	var mask_graphics_49 = new cjs.Graphics().p("AlLgHQiJiJAAjDQAAjCCJiKQCKiJDBAAQDCAACKCJQCJCKAADCQAADDiJCJQiKCJjCAAQjBAAiKiJg");
	var mask_graphics_50 = new cjs.Graphics().p("AlYAOQiPiNAAjKQAAjKCPiPQCPiPDJAAQDKAACPCPQCPCPAADKQAADKiPCNQiPCPjKAAQjJAAiPiPg");
	var mask_graphics_51 = new cjs.Graphics().p("AllAlQiUiTAAjSQAAjSCUiUQCUiUDRAAQDSAACUCUQCUCUAADSQAADSiUCTQiUCUjSAAQjRAAiUiUg");
	var mask_graphics_52 = new cjs.Graphics().p("AlyA7QiZiYAAjaQAAjZCZiZQCaiaDYAAQDZAACaCaQCZCZAADZQAADaiZCYQiaCajZAAQjYAAiaiag");
	var mask_graphics_53 = new cjs.Graphics().p("Al/BSQifieAAjhQAAjhCfifQCfifDgAAQDhAACfCfQCfCfAADhQAADhifCeQifCfjhAAQjgAAififg");
	var mask_graphics_54 = new cjs.Graphics().p("AmMBoQikijAAjpQAAjoCkilQClikDnAAQDoAAClCkQCkClAADoQAADpikCjQilCkjoAAQjnAAilikg");
	var mask_graphics_55 = new cjs.Graphics().p("AmZB+QipioAAjwQAAjwCpiqQCqiqDvAAQDwAACqCqQCpCqAADwQAADwipCoQiqCqjwAAQjvAAiqiqg");
	var mask_graphics_56 = new cjs.Graphics().p("AmmCVQiviuAAj4QAAj4CvivQCvivD3AAQD4AACvCvQCvCvAAD4QAAD4ivCuQivCvj4AAQj3AAivivg");
	var mask_graphics_57 = new cjs.Graphics().p("AmzCrQi0izAAkAQAAj/C0i0QC1i1D+AAQD/AAC1C1QC0C0AAD/QAAEAi0CzQi1C0j/AAQj+AAi1i0g");
	var mask_graphics_58 = new cjs.Graphics().p("AnADBQi5i5AAkGQAAkHC5i6QC6i6EGAAQEHAAC6C6QC5C6AAEHQAAEGi5C5Qi6C6kHAAQkGAAi6i6g");
	var mask_graphics_59 = new cjs.Graphics().p("AnNDYQi/i/AAkOQAAkOC/i/QDAjAENAAQEOAADADAQC/C/AAEOQAAEOi/C/QjAC/kOAAQkNAAjAi/g");
	var mask_graphics_60 = new cjs.Graphics().p("AnZDuQjFjEAAkVQAAkWDFjFQDEjEEVAAQEWAADEDEQDFDFAAEWQAAEVjFDEQjEDFkWAAQkVAAjEjFg");
	var mask_graphics_61 = new cjs.Graphics().p("AnmEEQjKjJAAkdQAAkdDKjKQDJjKEdAAQEeAADJDKQDKDKAAEdQAAEdjKDJQjJDKkeAAQkdAAjJjKg");
	var mask_graphics_62 = new cjs.Graphics().p("AnzEbQjQjPAAklQAAklDQjPQDPjPEkAAQElAADPDPQDQDPAAElQAAEljQDPQjPDPklAAQkkAAjPjPg");
	var mask_graphics_63 = new cjs.Graphics().p("AoAExQjVjUAAksQAAktDVjVQDUjUEsAAQEtAADUDUQDVDVAAEtQAAEsjVDUQjUDVktAAQksAAjUjVg");
	var mask_graphics_64 = new cjs.Graphics().p("AoNFIQjajaAAk0QAAk0DajaQDajaEzAAQE0AADaDaQDaDaAAE0QAAE0jaDaQjaDak0AAQkzAAjajag");
	var mask_graphics_65 = new cjs.Graphics().p("AoaFeQjgjfAAk7QAAk8DgjgQDfjfE7AAQE8AADfDfQDgDgAAE8QAAE7jgDfQjfDfk8AAQk7AAjfjfg");
	var mask_graphics_66 = new cjs.Graphics().p("AonF0QjljkAAlDQAAlDDljlQDljlFCAAQFDAADlDlQDlDlAAFDQAAFDjlDkQjlDllDAAQlCAAjljlg");
	var mask_graphics_67 = new cjs.Graphics().p("Ao0GLQjqjrAAlKQAAlLDqjqQDqjqFKAAQFLAADqDqQDqDqAAFLQAAFKjqDrQjqDqlLAAQlKAAjqjqg");
	var mask_graphics_68 = new cjs.Graphics().p("ApBGcQjwjwAAlRQAAlTDwjvQDvjwFSAAQFTAADvDwQDwDvAAFTQAAFRjwDwQjvDvlTAAQlSAAjvjvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:-25.1,y:-61.3}).wait(1).to({graphics:mask_graphics_28,x:-26,y:-62.2}).wait(1).to({graphics:mask_graphics_29,x:-26.9,y:-63.1}).wait(1).to({graphics:mask_graphics_30,x:-27.8,y:-64}).wait(1).to({graphics:mask_graphics_31,x:-28.7,y:-64.9}).wait(1).to({graphics:mask_graphics_32,x:-29.6,y:-65.8}).wait(1).to({graphics:mask_graphics_33,x:-30.5,y:-66.7}).wait(1).to({graphics:mask_graphics_34,x:-31.4,y:-67.5}).wait(1).to({graphics:mask_graphics_35,x:-32.3,y:-68.4}).wait(1).to({graphics:mask_graphics_36,x:-33.2,y:-69.3}).wait(1).to({graphics:mask_graphics_37,x:-34.1,y:-70.2}).wait(1).to({graphics:mask_graphics_38,x:-35,y:-71.1}).wait(1).to({graphics:mask_graphics_39,x:-35.8,y:-72}).wait(1).to({graphics:mask_graphics_40,x:-36.7,y:-72.9}).wait(1).to({graphics:mask_graphics_41,x:-37.6,y:-73.8}).wait(1).to({graphics:mask_graphics_42,x:-38.5,y:-74.7}).wait(1).to({graphics:mask_graphics_43,x:-39.4,y:-75.6}).wait(1).to({graphics:mask_graphics_44,x:-40.3,y:-76.5}).wait(1).to({graphics:mask_graphics_45,x:-41.2,y:-77.4}).wait(1).to({graphics:mask_graphics_46,x:-42.1,y:-78.3}).wait(1).to({graphics:mask_graphics_47,x:-42.8,y:-79.1}).wait(1).to({graphics:mask_graphics_48,x:-42.7,y:-80}).wait(1).to({graphics:mask_graphics_49,x:-42.7,y:-80.9}).wait(1).to({graphics:mask_graphics_50,x:-42.7,y:-81.8}).wait(1).to({graphics:mask_graphics_51,x:-42.6,y:-82.7}).wait(1).to({graphics:mask_graphics_52,x:-42.6,y:-83.6}).wait(1).to({graphics:mask_graphics_53,x:-42.6,y:-84.5}).wait(1).to({graphics:mask_graphics_54,x:-42.5,y:-85.4}).wait(1).to({graphics:mask_graphics_55,x:-42.5,y:-86.3}).wait(1).to({graphics:mask_graphics_56,x:-42.4,y:-87.2}).wait(1).to({graphics:mask_graphics_57,x:-42.4,y:-88.1}).wait(1).to({graphics:mask_graphics_58,x:-42.4,y:-89}).wait(1).to({graphics:mask_graphics_59,x:-42.3,y:-89.9}).wait(1).to({graphics:mask_graphics_60,x:-42.3,y:-90.7}).wait(1).to({graphics:mask_graphics_61,x:-42.3,y:-91.6}).wait(1).to({graphics:mask_graphics_62,x:-42.2,y:-92.5}).wait(1).to({graphics:mask_graphics_63,x:-42.2,y:-93.4}).wait(1).to({graphics:mask_graphics_64,x:-42.1,y:-94.3}).wait(1).to({graphics:mask_graphics_65,x:-42.1,y:-95.2}).wait(1).to({graphics:mask_graphics_66,x:-42.1,y:-96.1}).wait(1).to({graphics:mask_graphics_67,x:-42,y:-97}).wait(1).to({graphics:mask_graphics_68,x:-43.2,y:-98.4}).wait(74));

	// Layer 3
	this.instance = new lib.circ2();
	this.instance.parent = this;
	this.instance.setTransform(-44.8,-115.2,1,1,0,0,0,66.2,66.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(65).to({scaleX:0.47,scaleY:0.47,x:-44.7,y:-115.1,alpha:0},38).to({_off:true},11).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#A12525","rgba(197,0,0,0.298)","rgba(200,25,25,0.4)","rgba(0,0,0,0)"],[0,0.584,0.682,0.902,1],0,0,0,0,0,70.2).s().p("AnrHsQjLjMAAkgQAAkfDLjLQDMjMEfAAQEgAADLDMQDMDLAAEfQAAEgjMDMQjLDLkgAAQkfAAjMjLg");
	this.shape.setTransform(-47.1,-112);

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.1,-112);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.1,-112);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.shape,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},27).to({state:[{t:this.instance_1}]},45).to({state:[{t:this.instance_2}]},20).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({_off:true,alpha:0},20).wait(50));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgbBVQgbgJgSgaQgRgZABgcQABgdAUgXQAUgYAcgHQAbgGAcAMQAcANAOAZQAMAVgBAZQgBAagOAUQgQAYgdAKQgQAFgNAAQgOAAgNgEg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiGBmQgbgcAAgjQAAgeATgbQARgaAcgSQAdgTAggFQASgDARACIAFgIQAUgYAcgHQAcgGAcAMQAcANAOAZQAMAVgBAaQgBAagOATQgQAYgdAKQgWAIgVgEQgOAWgeAWQguAlgnAAQgkAAgbgbg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AggDFQgGgCgMgIIAAAAIgngeQgjgcgdggIAAAAQgLgMgGgEIAAAAIgPgHIAAAAQgPgJgBgRIAAAAQgCgRAMgMIAAAAIADgCIAAAAQgKgNgDgHIAAAAQgDgLAGgMIAAAAQAGgLAKgEIAAAAQAHgDALAAIAAAAIASABIAAAAQATAAAIABIAAAAIAEABIAAAAQAIADAIAHIAAAAIANAPIAAAAIATARIAAAAIATATIAAAAQASAUAFATIAAAAIABAIIAAAAQABANgGANIAAAAQgDAHgFAEIAAAAIAJAHIAAAAQAOALAIAIIAAAAQAQARABAPIAAAAQABATgNALIAAAAQgJAHgKAAIAAAAQgGAAgGgCgAgwAUIgTgTIAAAAIgTgRIAAAAIgNgPIAAAAQgIgHgIgDIAAAAIgEgBIAAAAQADgYAPgWIAAAAQARgaAcgSIAAAAQAdgTAfgFIAAAAQASgDARACIAAAAIAGgIIAAAAQAUgYAcgHIAAAAQAcgGAcAMIAAAAQAcANAOAZIAAAAQAMAVgBAaIAAAAQgBAagOAUIAAAAQgQAYgdAKIAAAAQgWAIgVgEIAAAAQgOAVgeAWIAAAAQgsAjgkACIAAAAQgFgTgSgUg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiUDVQgWgCgSgMQgSgLgLgUQgLgTAAgVQgBgZAOgeQAag3ApgRIAFgEQAPgTAVgIQgBgIAAgJQABgdAUgXQANgQARgJQAMgMAQgKQAdgTAegFQATgDAQACIAHgIQATgYAcgHQAcgGAcAMQAcANAPAZQAMAVgBAaQgCAagNAUQgRAYgdAKQgWAIgVgEQgOAWgdAVQglAdggAGIAAANQgCAagMAUQgNATgVAKQgFANgIAMQgYAmghANQgQAGgSAAIgJAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjZFBQgagIgRgWQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgXAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgOAWgeAVQglAeggAGIAAANQgBAZgOAVQgNASgVAKQgFANgIAMQgXAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgeA6gnANQgMAFgNAAQgNAAgOgFg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AkTGHQgOgHgCgRIAAAAQgCgRAKgLIAAAAQAIgHAPgFIAAAAIgBgGIAAAAQgCgMAGgKIAAAAIgBgMIAAAAIgDgWIAAAAQAAgOAKgJIAAAAQAGgFAKgCIAAAAQAKgDAQAAIAAAAIBNAAIAIAAIAAAAQAcABAKANIAAAAQAJALgBAXIAAAAQAAAKgCAIIAAAAQAHAFAEAHIAAAAIABABIAAAAIAFADIAAAAQALAHADAOIAAAAQACAOgHALIAAAAQgMARgkAEIAAAAIg/AGIAAAAQgnADgYAEIAAAAQgRACgHAAIAAAAIgCAAIAAAAQgMAAgJgFgAj5DcQgQgUgEgcIAAAAQgEgbAJgaIAAAAQAGgPAPgeIAAAAIAIgZIAAAAQAFgPAFgJIAAAAQAJgRAPgKIAAAAQAPgMASgEIAAAAIALgCIAAAAQgIgRAAgSIAAAAQgBgYAOgeIAAAAQAag4ApgQIAAAAIAFgGIAAAAQAPgSAVgIIAAAAQgBgJAAgIIAAAAQABgdAUgYIAAAAQANgQAQgIIAAAAQAMgMAQgKIAAAAQAdgUAfgFIAAAAQATgDAQADIAAAAIAHgJIAAAAQATgXAcgHIAAAAQAcgHAcANIAAAAQAcAMAPAZIAAAAQAMAWgBAaIAAAAQgCAZgNAVIAAAAQgRAYgdAKIAAAAQgWAHgVgDIAAAAQgOAWgdAVIAAAAQglAeggAGIAAAAIAAANIAAAAQgCAZgNAVIAAAAQgNATgVAKIAAAAQgFANgIAMIAAAAQgXAkghANIAAAAQgNAGgOABIAAAAIACAEIAAAAQAKAXgBAbIAAAAQAAArgcA0IAAAAQgRAigVATIAAAAIgIAAIAAAAIhNAAQgQAAgKADIAAAAQgIgHgGgIg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjAG9QgUgDgQgKQgygggDheQgDhNAhgiIAIgIQgJgGgHgKQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgOAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAPgSAVgJQgBgIAAgIQABgdAUgYQANgQASgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgXAHgUgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgXAlghANQgNAFgOABIACAFQAKAWAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAxQAAAbgIAUQgHASgOAOQgPANgSAGQgNAEgOAAIgLAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Aj3HrQgNgNAEgSIAAAAIACgJIAAAAQABgGgCgDIAAAAIgIgHIAAAAQgLgKADgRIAAAAQACgOANgKIAAAAQAGgGAPgHIAAAAIAHgDIAAAAIBUglIAogQIAAAAIAKgDIAAAAQAPgEALABIAAAAIARACIAZAEIAAAAQASAFAEASIAAAAQAEASgMAOIAAAAQgFAGgPAIIAAAAIieBoQgQALgKACIAAAAIgGABIAAAAQgPAAgKgLgAkZD6QgDhNAhgiIAAAAIAIgIIAAAAQgJgHgHgJIAAAAQgQgUgEgcIAAAAQgDgbAJgaIAAAAQAFgOAPgeIAAAAIAJgZIAAAAQAFgPAFgJIAAAAQAJgRAPgLIAAAAQAPgMASgEIAAAAIALgCIAAAAQgIgRgBgSIAAAAQAAgYAOgeIAAAAQAZg4AqgQIAAAAIAEgGIAAAAQAPgSAVgJIAAAAQgBgIAAgIIAAAAQABgdAUgYIAAAAQANgQASgIIAAAAQALgMAPgKIAAAAQAdgUAggFIAAAAQASgDARADIAAAAIAGgJIAAAAQAUgXAcgHIAAAAQAcgHAcANIAAAAQAcAMAOAZIAAAAQAMAWgBAaIAAAAQgBAZgOAVIAAAAQgQAYgdAKIAAAAQgXAHgUgDIAAAAQgPAWgdAVIAAAAQglAeggAGIAAAAIAAANIAAAAQgBAZgOAVIAAAAQgNATgVAKIAAAAQgFANgIAMIAAAAQgXAlghANIAAAAQgNAFgOABIAAAAIACAFIAAAAQAKAXAAAbIAAAAQgBAqgbA0IAAAAQgUAmgXATIAAAAQAOALAJAQIAAAAQAJAQAEAWIAAAAIAGAqIAAAAIAEAxIAAAAQAAANgCAMIAAAAIgKADIAAAAIgoAQIAAAAIhUAlIgHADIAAAAQgrgigDhXg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AinIiQgrgMgYgvQgRglABg0QABgtARgcQgughgDhaQgDhNAhgiIAIgIQgJgGgHgKQgQgUgEgcQgDgaAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAPgSAVgIQgBgJAAgIQABgdAUgYQANgQASgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgXAHgUgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgXAlghANQgNAGgOABIACAEQAKAXAAAbQgBArgbAzQgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAxQAAAbgIAUIgHANIAFADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQACAVgJAVQgIAVgRAOQgRAOgWAFQgJACgKAAQgMAAgMgDg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ag+JuQgYgLgdgiQgWgcgHgTQgLgaAEgbIABgJQgJAAgIgDQgrgLgYgvQgRgmABg0QABgsARgdQgughgDhaQgDhNAhghIAIgIQgJgGgHgJQgQgVgEgcQgDgbAJgZQAFgQAPgeIAJgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgIgRgBgSQAAgZAOgeQAZg3AqgRIAEgFQAPgTAVgIQgBgIAAgJQABgdAUgXQANgQASgIQALgNAPgKQAdgTAggFQASgDARADIAGgJQAUgYAcgHQAcgGAcAMQAcANAOAZQAMAVgBAaQgBAagOAUQgQAYgdAKQgXAIgUgEQgPAXgdAVQglAdggAHIAAAMQgBAagOAUQgNATgVALQgFAMgIAMQgXAmghANQgNAFgOABIACAFQAKAXAAAaQgBAsgbA0QgUAmgXARQAOALAJAQQAJAQAEAXIAGApIAEAxQAAAcgIATIgHAOIAFADQARAOAIAUQAGANADAWIAFAjIAGAWIAEAWQABAMgCALQAJABAJADQATAHARASQAMALARAXQAbAjAHAYQAHAZgIAZQgIAagUARQgUARgaAEIgOABQgTAAgRgIg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ABWK4QgUgHgfgZQglgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgJgBgIgCQgrgMgYgvQgRglABg0QABgtARgcQgughgDhaQgDhMAhgiIAIgIQgJgGgHgKQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAPgSAVgIQgBgJAAgIQABgdAUgYQANgQASgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgXAHgUgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgXAlghANQgNAGgOABIACAEQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGApIAEAxQAAAbgIAUIgHANIAFADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGARASQAMAMARAXQAbAjAHAXQAFAUgDATQATAAAUAHQAZAJAWASQAbAXAOAfQAOAhgHAfQgIAlgiATQgVALgVAAQgOAAgPgFg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AD4LlQgQgCgTgHIghgPIgegOQgRgIgKgJQgPgNgIgSIgCgFIgBABQgjASgkgMQgUgHgegaQgmgegMgYQgJgTAAgVIABgLQgVABgTgJQgYgLgdgiQgWgcgHgTQgLgaAEgbIABgJQgJAAgIgDQgrgLgYgvQgRgmABg0QABgsARgdQgughgDhaQgDhMAhghIAIgIQgJgHgHgJQgQgVgEgcQgDgbAJgZQAFgQAPgeIAJgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgJgRAAgSQAAgZAOgeQAZg3AqgRIAEgFQAPgTAVgIQgBgIAAgJQABgdAUgXQANgQASgJQAMgMAPgKQAdgTAfgFQASgDARACIAGgIQAUgYAcgHQAcgGAcAMQAcANAOAZQAMAVgBAaQgBAagOAUQgQAYgdAKQgXAIgUgEQgPAWgdAWQglAdggAGIAAANQgBAagNAUQgNATgVAKQgFANgIAMQgYAmghANQgNAFgOABIACAFQAKAXAAAaQgBAsgbA0QgUAmgXASQAOALAJAQQAJAQAEAXIAGApIAEAwQAAAcgIATIgHANIAFAEQARAOAIAUQAGANADAWIAFAjIAGAWIAEAWQABAMgCALQAJABAJADQATAHASASQAMALARAXQAbAjAGAYQAFATgDATQASAAAVAHQAZAJAWATQAbAXAOAeIAEANQAYgNAgAAQAiAAAkAQQApASAUAbQAQAWADAbQADAbgMAYQgLAYgYAOQgVAMgXAAIgGAAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AEwL1QhEgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgiATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgJgHgHgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAbgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgcAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAaAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbBAAPQAqAJAYAVQARAQAJAWQAJAWgDAWQgCAXgOATQgOAUgUAJQgSAJgZAAQgTAAgVgFg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ADXL1QhDgPgagnIgJAFQgYAOgagCQgPgBgTgIIghgPIgegNQgQgIgLgKQgOgMgIgSIgCgGIgCABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QABgtAQgcQgtgigDhYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAag4ApgQIAFgGQAPgSAVgJQgCgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAbAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgcAKQgWAHgVgDQgOAWgdAVQglAeggAGIAAANQgCAZgNAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXgBAbQAAArgcA0QgTAmgYATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQACALgCAMQAJABAJADQATAGASASQALAMASAXQAbAjAGAXQAGATgEAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAeAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAIgPAOgNQAYgUAogFQAtgEAlAVQATALANARQANASAEAUQAFAcgKAbQgHATgNAOQgPAQgRAGQgdAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AB0L1QhEgPgZgnIgJAFQgXAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQAoARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATQAPANAJATQAIAUgBAUQgBAUgKASQgKASgQAMQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AAML1QhDgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgjATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgIgHgIgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAbAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbA/APQAjAIAXAPQAHgPAOgNQAYgUAogFQAtgEAmAVQARAKAMAPQAJgLAMgIQAkgVA/ALQAuAIAXATIAKAKIAIgIQAhgcBFACQAwABAbAPQAiAVAIAnQAEATgFASQgFATgNAPQgiAphSgEQgxgCgcgTQgIgGgHgIQgHAIgKAHQgmAahBgLQgvgIgYgWIgFgFIgJALQgOAQgSAGQgdAKgxgQQgdgKgSgLQgDAKgHAIQgOAUgUAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AhnL1QhEgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgjATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgIgHgIgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAbAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbBAAPQAjAIAXAPQAHgPANgNQAYgUAogFQAtgEAmAVQARAKAMAPQAJgLAMgIQAkgVA/ALQAuAIAXATIAKAKIAIgIQAhgcBFACQAwABAbAPQAMAHAJAKIAFgIQANgTAUgKQAUgKAcgBQATgBAfAEQAaADAPAEQAWAFAPALQARAKAKARQALASACATQACATgHATQgGATgOAOQgoAmhbgNQg1gIgYgTIgKgKIgJANQgiAphSgEQgxgCgcgTQgIgGgHgIQgHAIgKAHQgmAahBgLQgvgIgYgWIgFgFIgJALQgOAQgSAGQgdAKgxgQQgdgKgSgLQgDAKgHAIQgNAUgUAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjrL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgNATgVAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAHgPAPgNQAYgUAogFQAtgEAkAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAKAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAlgDAgAbQAfAcAAAlQAAAdgRAaQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgcAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AlTL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgtgigDhYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgNATgVAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQACALgDAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAGATgEAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAIgPAOgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAjgVA+ALQAvAIAWATIAKAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAfgDAaASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAfgSAmAKQAnAJARAfQATAigMArQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgJAHQgmAahBgLQgugIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AmnL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAuAIAWATIAKAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIQAbgIAaAHQAZAIASAWQASAWACAbQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgJAHQgmAahAgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AnTL1QhEgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgjATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgJgHgHgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAbAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbBAAPQAjAIAXAPQAHgPAOgNQAYgUAogFQAtgEAmAVQARAKAMAPQAJgLAMgIQAkgVA/ALQAuAIAWATIAKAKIAIgIQAhgcBFACQAwABAbAPQAMAHAJAKIAFgIQANgTAUgKQAUgKAcgBQATgBAfAEQAaADAPAEQAWAFAPALQARAKAKARIADAEIADgEQAOgTAVgJQAOgFAXgDIAlgGIAfgKQATgGAMgCQAfgDAbASQAEgHAFgHQAIgLAOgMIAZgVIAcgaQAQgPANgIQAagPAfAEQAAgjAWgYQAFgFAMgKIARgPQAHgIAJgPIAQgYQASgUAagIIAEgBQgHggAKgqQAJgrAUgbQAagiAlgIQAUgEAUAFQAUAGAPANQAPANAIATQAJATgBAUQgBAOgFASIgKAfQgKAegEALQgJAWgNAOQgMAOgTAHIgHACIABALQACAbgSAsQgWA2gaAWQgdAbgtADQgQABgOgCQAAAOgFAQQgKAjgfAfQgpApgxALQgsAKgigTIgBAAQgEAJgGAJQgQAYgaAPQgqAZhGgBQg7gDgcgXQgNgKgIgPQgFAGgFAGQgoAmhbgNQg1gIgYgTIgKgKIgJANQgiAphSgEQgxgCgcgTQgJgGgGgIQgIAIgJAHQglAahBgLQgvgIgYgWIgFgFIgJALQgOAQgSAGQgdAKgxgQQgdgKgSgLQgEAKgGAIQgOAUgUAJQgSAJgZAAQgTAAgVgFg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AnhL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgNATgVAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAfgDAaASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOQASgNAVgEQAWgEAVAIQAVAHAPAQQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgIAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AnjL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQQADgTALgRQALgRAQgKQARgKAUgCQAUgCASAHQAiANAXAnQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AnjL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgGgbgVQgggYgLgaQgMgaAEgoQAEgnAOgTQATgXAjgHQAngJAbAUQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AnjL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgGgbgVQgggYgLgaQgMgaAEgoIACgSQgmgHgogmQgtgogGgoQgDgTAGgUQAHgTANgOQANgOATgIQATgHAUABQAmACArAjQArAjALAkQAHAXgEAWQASACAPALQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AnjL9QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAHAXAQQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgnQAAguALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgHgbgUQgggYgLgaQgMgaAEgoIACgSQgmgHgogmQgsgmgGgnQghALgpgJQgxgKgbgdQgTgTgHgcQgGgbAIgaQAIgZAXgSQAXgRAbgBQAQgBAWAHIAkAOIAdAMQAPAHAKAJQAPANAHATQAEAJABAJQAPgEAQABQAmACArAjQArAjALAkQAHAXgEAWQASACAPALQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAIgZAAQgSAAgWgEg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AnjMTQhEgPgZgoIgJAGQgYAOgagCQgPgCgTgHIgigPIgegOQgQgIgLgJQgOgNgIgSIgDgFIgBABQgiASgkgMQgUgHgggaQglgegNgYQgJgTABgVIABgLQgWAAgTgIQgXgLgdgiQgWgcgIgTQgLgaAEgbIACgJQgJgBgIgCQgrgLgYgvQgSgmACg0QAAgtARgcQgughgChaQgDhMAgghIAJgIQgJgHgHgJQgQgVgEgcQgEgbAJgZQAGgQAPgeIAIgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgIgRAAgSQgBgZAOgeQAZg3AqgRIAFgFQAPgTAUgIQgBgIABgJQABgdAUgXQANgQARgJQAMgMAQgKQAdgTAfgFQATgDAQACIAHgIQATgYAcgHQAcgGAcAMQAcANAPAZQAMAVgBAaQgCAagNAUQgRAYgdAKQgWAIgVgEQgOAWgdAWQglAdghAGIABANQgCAagNAUQgOATgUAKQgGANgHAMQgYAmghANQgOAFgOABIADAFQAKAXgBAaQAAAsgcA0QgUAlgXATQAOALAKAQQAJAQAEAXIAFAoIAEAxQABAcgIATIgHANIAEAEQASAOAIAUQAFANADAWIAFAjIAGAWIAEAWQABAMgCALQAKABAJADQATAHASASQALALASAXQAbAjAGAYQAFATgDATQATAAAUAHQAZAJAWATQAcAXANAeIAFANQAXgNAgAAQAjAAAkAQQApASAUAbIAHAMQAogbBBAOQAiAIAXAQQAHgQAPgMQAYgVAogEQAtgFAlAWQARAJAMAPQAJgLANgHQAkgVA+AKQAvAJAWATIAJAKIAIgJQAhgcBFACQAxABAbAQQALAHAJAJIAFgIQAOgTAUgKQAUgJAcgBQASgBAgAEQAaADAOADQAXAGAPAKQAQALALARIACADIADgEQAPgTAVgIQANgFAXgEIAlgGIAfgJQATgHANgBQAegDAbASQAEgIAFgHQAIgKAPgNIAZgUIAbgaQARgQANgHQAagPAeAEQAAgkAXgYQAEgFANgJIARgQQAGgHAKgQIAQgXQARgVAbgIIAEgBQgIgfAKgqQAKgrAUgcQAMgRAQgKQgKgSgDgXQgEgVABgmQAAgvALgZQAIgTASgOIACgCQgQgPgLgZQgJgUgNgxIgJgkQgDgUACgQIAAgBQgcgHgbgUQgggYgLgaQgMgbAEgnIACgTQgmgGgogmQgsgngGgnQghALgpgIQgxgKgbgdQgRgSgHgXIAAABQgbASguABQg+ADghgeQgQgPgHgWQgIgVAEgVQAEgWANgSQAOgSAUgJQAXgLAoAAQAvAAAaAPQAUALAMATQAFAIADAIQAXgRAagBQAQAAAWAGIAkAOIAdAMQAPAIAKAJQAPANAHATQAEAIABAKQAPgFAQABQAmACArAkQArAiALAkQAHAXgEAWQASADAPALQAJAGALAOIARAWIAVAXQANAOAGAKQANAWgCAaIgDAOQAhANAXAnQAPAcALAuQAHAeACATQABAcgIAVQgHARgOANIgIAGIADADQAQASAHAeQAFAWABAhQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFAKQgJAWgMAOQgNAOgSAHIgIADIACAKQACAcgSAsQgWA1gaAXQgeAagtAEQgQABgOgCQAAAOgEAPQgLAkgfAfQgoAogyAMQgsAKgigTIgBgBQgEAJgFAJQgRAZgaAPQgqAZhGgBQg6gDgcgXQgOgLgIgPQgEAHgGAFQgnAmhcgNQg0gHgZgUIgKgJIgIAMQgiAqhSgEQgxgCgcgTQgJgHgHgIQgGAJgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAPgRAGQgdAKgygPQgdgKgRgLQgEAJgGAJQgOATgVAKQgSAIgZAAQgSAAgWgEg");
	var mask_1_graphics_33 = new cjs.Graphics().p("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");
	var mask_1_graphics_34 = new cjs.Graphics().p("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");
	var mask_1_graphics_35 = new cjs.Graphics().p("AnjMfQhEgPgZgoIgJAGQgYAOgagCQgPgCgTgHIgigPIgegOQgQgIgLgJQgOgNgIgSIgDgFIgBABQgiASgkgMQgUgHgggaQglgegNgYQgJgTABgVIABgLQgWAAgTgIQgXgLgdgiQgWgcgIgTQgLgaAEgbIACgJQgJgBgIgCQgrgLgYgvQgSgmACg0QAAgtARgcQgughgChaQgDhMAgghIAJgIQgJgHgHgJQgQgVgEgcQgEgbAJgZQAGgQAPgeIAIgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgIgRAAgSQgBgZAOgeQAZg3AqgRIAFgFQAPgTAUgIQgBgIABgJQABgdAUgXQANgQARgJQAMgMAQgKQAdgTAfgFQATgDAQACIAHgIQATgYAcgHQAcgGAcAMQAcANAPAZQAMAVgBAaQgCAagNAUQgRAYgdAKQgWAIgVgEQgOAWgdAWQglAdghAGIABANQgCAagNAUQgOATgUAKQgGANgHAMQgYAmghANQgOAFgOABIADAFQAKAXgBAaQAAAsgcA0QgUAlgXATQAOALAKAQQAJAQAEAXIAFAoIAEAxQABAcgIATIgHANIAEAEQASAOAIAUQAFANADAWIAFAjIAGAWIAEAWQABAMgCALQAKABAJADQATAHASASQALALASAXQAbAjAGAYQAFATgDATQATAAAUAHQAZAJAWATQAcAXANAeIAFANQAXgNAgAAQAjAAAkAQQApASAUAbIAHAMQAogbBBAOQAiAIAXAQQAHgQAPgMQAYgVAogEQAtgFAlAWQARAJAMAPQAJgLANgHQAkgVA+AKQAvAJAWATIAJAKIAIgJQAhgcBFACQAxABAbAQQALAHAJAJIAFgIQAOgTAUgKQAUgJAcgBQASgBAgAEQAaADAOADQAXAGAPAKQAQALALARIACADIADgEQAPgTAVgIQANgFAXgEIAlgGIAfgJQATgHANgBQAegDAbASQAEgIAFgHQAIgKAPgNIAZgUIAbgaQARgQANgHQAagPAeAEQAAgkAXgYQAEgFANgJIARgQQAGgHAKgQIAQgXQARgVAbgIIAEgBQgIgfAKgqQAKgrAUgcQAMgRAQgKQgKgSgDgXQgEgVABgmQAAgvALgZQAIgTASgOIACgCQgQgPgLgZQgJgUgNgxIgJgkQgDgUACgQIAAgBQgcgHgbgUQgggYgLgaQgMgbAEgnIACgTQgmgGgogmQgsgngGgnQghALgpgIQgxgKgbgdQgRgSgHgXIAAABQgbASguABQg+ADghgeQgHgGgEgGIgIAFQgbARguABQhCACghgdIgFgEIgEAEQgbASguABQg+ADghgeQgHgGgEgHQgJAMgMAJQgbASgsABQg+ADghgeQgQgPgHgWQgIgVAEgVQAEgWANgSQAOgSAUgJQAWgLApAAQAtAAAaAPQARAJAMAQIABgCQAOgSAUgJQAXgLAoAAQAvAAAaAPQAMAGAJAKIAHgFQAcgSA4AAQAvABAZAOQAQAJAMAQQAJgIALgFQAXgLAoAAQAvAAAaAPQAUALAMATQAFAIADAIQAXgRAagBQAQAAAWAGIAkAOIAdAMQAPAIAKAJQAPANAHATQAEAIABAKQAPgFAQABQAmACArAkQArAiALAkQAHAXgEAWQASADAPALQAJAGALAOIARAWIAVAXQANAOAGAKQANAWgCAaIgDAOQAhANAXAnQAPAcALAuQAHAeACATQABAcgIAVQgHARgOANIgIAGIADADQAQASAHAeQAFAVABAiQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFAKQgJAWgMAOQgNAOgSAHIgIADIACAKQACAcgSAsQgWA1gaAXQgeAagtAEQgQABgOgCQAAAOgEAPQgLAkgfAfQgoAogyAMQgsAKgigTIgBgBQgEAJgFAJQgRAZgaAPQgqAZhGgBQg6gDgcgXQgOgLgIgPQgEAHgGAFQgnAmhcgNQg0gHgZgUIgKgJIgIAMQgiAqhSgEQgxgCgcgTQgJgHgHgIQgGAJgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAPgRAGQgdAKgygPQgdgKgRgLQgEAJgGAJQgOATgVAKQgSAIgZAAQgSAAgWgEg");
	var mask_1_graphics_36 = new cjs.Graphics().p("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");
	var mask_1_graphics_37 = new cjs.Graphics().p("AnjMhQhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChZQgDhMAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFApIAEAxQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgnQAAguALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgGgbgVQgggYgLgaQgMgaAEgoIACgSQgmgHgogmQgsgmgGgnQghALgpgJQgxgKgbgdQgRgRgHgXIAAAAQgbATguABQg+ADghgfQgHgFgEgHIgIAGQgbARguABQhCACghgdIgFgEIgEADQgbATguABQg+ADghgfQgHgFgEgHQgJAMgMAIQgbATgsABQg+ADghgfIgDgCQgPAOgVAIQgdAKgbgKQgYgHgQgUQgNAMgTAHQgdAKgbgKQgcgJgRgZQgSgZACgdQABgdAUgYQATgXAcgHQAcgHAcANQAUAIANAPQARgQAWgFQAcgHAcANQARAHAMAMQALgMAQgHQAWgLApAAQAtAAAaAOQARAKAMAQIABgCQAOgSAUgJQAXgLAoAAQAvAAAaAOQAMAHAJAJIAHgEQAcgTA4AAQAvABAZAOQAQAKAMAPQAJgHALgFQAXgLAoAAQAvAAAaAOQAUALAMAUQAFAHADAIQAXgQAagBQAQgBAWAHIAkAOIAdAMQAPAHAKAJQAPANAHATQAEAJABAJQAPgEAQABQAmACArAjQArAjALAkQAHAXgEAWQASACAPALQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAVABAhQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_38 = new cjs.Graphics().p("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");
	var mask_1_graphics_39 = new cjs.Graphics().p("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");
	var mask_1_graphics_40 = new cjs.Graphics().p("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");
	var mask_1_graphics_41 = new cjs.Graphics().p("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");
	var mask_1_graphics_90 = new cjs.Graphics().p("A5nQzMAAAgjOMAzPAAAMAAAAjOg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A5nQ0MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A5nQ1MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A5nQ2MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A5nQ2MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A5nQ3MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A5nQ4MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A5nQ5MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A5nQ6MAAAgjQMAzPAAAMAAAAjQg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A5nQ6MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A5nQ7MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A5nQ8MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A5nQ8MAAAgjOMAzPAAAMAAAAjOg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A5nQ9MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A5nQ+MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A5nQ/MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A5nQ/MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A5nRAMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A5nRBMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A5nRCMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A5nRDMAAAgjQMAzPAAAMAAAAjQg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A5nRDMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A5nREMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A5nRFMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A5nRFMAAAgjOMAzPAAAMAAAAjOg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A5nRGMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A5nRHMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A5nRIMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A5nRIMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A6KRJMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A6tRKMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A7RRLMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A71RMMAAAgjQMAzPAAAMAAAAjQg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A8YRMMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A88RNMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A9gROMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A+DROMAAAgjOMAzPAAAMAAAAjOg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A+nRPMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A/LRQMAAAgjPMAzQAAAMAAAAjPg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A/uRRMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EggSARRMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_131 = new cjs.Graphics().p("Egg1ARSMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EghZARTMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Egh9ARUMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EgigARVMAAAgjQMAzPAAAMAAAAjQg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgjEARVMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgjoARWMAAAgjPMAzPAAAMAAAAjPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-76,y:-177.6}).wait(1).to({graphics:mask_1_graphics_1,x:-83.2,y:-173.6}).wait(1).to({graphics:mask_1_graphics_2,x:-87.3,y:-166.6}).wait(1).to({graphics:mask_1_graphics_3,x:-90,y:-165.2}).wait(1).to({graphics:mask_1_graphics_4,x:-95.2,y:-153.9}).wait(1).to({graphics:mask_1_graphics_5,x:-96.3,y:-146.8}).wait(1).to({graphics:mask_1_graphics_6,x:-95.3,y:-141.9}).wait(1).to({graphics:mask_1_graphics_7,x:-95.3,y:-136.3}).wait(1).to({graphics:mask_1_graphics_8,x:-95.3,y:-131.5}).wait(2).to({graphics:mask_1_graphics_10,x:-95.3,y:-123.5}).wait(2).to({graphics:mask_1_graphics_12,x:-95.3,y:-116.3}).wait(2).to({graphics:mask_1_graphics_14,x:-89.3,y:-112.4}).wait(2).to({graphics:mask_1_graphics_16,x:-79.7,y:-110.3}).wait(2).to({graphics:mask_1_graphics_18,x:-70.9,y:-110.3}).wait(2).to({graphics:mask_1_graphics_20,x:-61,y:-110.3}).wait(1).to({graphics:mask_1_graphics_21,x:-50.5,y:-110.3}).wait(1).to({graphics:mask_1_graphics_22,x:-38.9,y:-110.3}).wait(1).to({graphics:mask_1_graphics_23,x:-25.8,y:-110.3}).wait(1).to({graphics:mask_1_graphics_24,x:-15.4,y:-110.3}).wait(1).to({graphics:mask_1_graphics_25,x:-7,y:-110.3}).wait(1).to({graphics:mask_1_graphics_26,x:-2.5,y:-110.3}).wait(1).to({graphics:mask_1_graphics_27,x:-1.2,y:-110.3}).wait(1).to({graphics:mask_1_graphics_28,x:-1,y:-110.3}).wait(1).to({graphics:mask_1_graphics_29,x:-1,y:-110.3}).wait(1).to({graphics:mask_1_graphics_30,x:-1,y:-110.3}).wait(1).to({graphics:mask_1_graphics_31,x:-1,y:-111.1}).wait(1).to({graphics:mask_1_graphics_32,x:-1,y:-113.3}).wait(1).to({graphics:mask_1_graphics_33,x:-1,y:-114.1}).wait(1).to({graphics:mask_1_graphics_34,x:-1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_35,x:-1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_36,x:-1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_37,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_38,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_39,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_40,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_41,x:-1,y:-114.7}).wait(49).to({graphics:mask_1_graphics_90,x:35.9,y:-118}).wait(1).to({graphics:mask_1_graphics_91,x:28.7,y:-118}).wait(1).to({graphics:mask_1_graphics_92,x:21.6,y:-117.9}).wait(1).to({graphics:mask_1_graphics_93,x:14.5,y:-117.8}).wait(1).to({graphics:mask_1_graphics_94,x:7.3,y:-117.7}).wait(1).to({graphics:mask_1_graphics_95,x:0.2,y:-117.7}).wait(1).to({graphics:mask_1_graphics_96,x:-6.9,y:-117.6}).wait(1).to({graphics:mask_1_graphics_97,x:-14.1,y:-117.5}).wait(1).to({graphics:mask_1_graphics_98,x:-21.2,y:-117.4}).wait(1).to({graphics:mask_1_graphics_99,x:-28.3,y:-117.4}).wait(1).to({graphics:mask_1_graphics_100,x:-35.5,y:-117.3}).wait(1).to({graphics:mask_1_graphics_101,x:-42.6,y:-117.2}).wait(1).to({graphics:mask_1_graphics_102,x:-49.7,y:-117.1}).wait(1).to({graphics:mask_1_graphics_103,x:-56.8,y:-117.1}).wait(1).to({graphics:mask_1_graphics_104,x:-64,y:-117}).wait(1).to({graphics:mask_1_graphics_105,x:-71.1,y:-116.9}).wait(1).to({graphics:mask_1_graphics_106,x:-78.2,y:-116.8}).wait(1).to({graphics:mask_1_graphics_107,x:-85.4,y:-116.8}).wait(1).to({graphics:mask_1_graphics_108,x:-92.5,y:-116.7}).wait(1).to({graphics:mask_1_graphics_109,x:-99.6,y:-116.6}).wait(1).to({graphics:mask_1_graphics_110,x:-106.8,y:-116.5}).wait(1).to({graphics:mask_1_graphics_111,x:-113.9,y:-116.5}).wait(1).to({graphics:mask_1_graphics_112,x:-121,y:-116.4}).wait(1).to({graphics:mask_1_graphics_113,x:-128.1,y:-116.3}).wait(1).to({graphics:mask_1_graphics_114,x:-135.3,y:-116.2}).wait(1).to({graphics:mask_1_graphics_115,x:-142.4,y:-116.2}).wait(1).to({graphics:mask_1_graphics_116,x:-149.5,y:-116.1}).wait(1).to({graphics:mask_1_graphics_117,x:-156.7,y:-116}).wait(1).to({graphics:mask_1_graphics_118,x:-163.8,y:-115.9}).wait(1).to({graphics:mask_1_graphics_119,x:-167.5,y:-115.9}).wait(1).to({graphics:mask_1_graphics_120,x:-171,y:-115.8}).wait(1).to({graphics:mask_1_graphics_121,x:-174.6,y:-115.7}).wait(1).to({graphics:mask_1_graphics_122,x:-178.2,y:-115.6}).wait(1).to({graphics:mask_1_graphics_123,x:-181.7,y:-115.6}).wait(1).to({graphics:mask_1_graphics_124,x:-185.3,y:-115.5}).wait(1).to({graphics:mask_1_graphics_125,x:-188.9,y:-115.4}).wait(1).to({graphics:mask_1_graphics_126,x:-192.4,y:-115.3}).wait(1).to({graphics:mask_1_graphics_127,x:-196,y:-115.3}).wait(1).to({graphics:mask_1_graphics_128,x:-199.6,y:-115.2}).wait(1).to({graphics:mask_1_graphics_129,x:-203.1,y:-115.1}).wait(1).to({graphics:mask_1_graphics_130,x:-206.7,y:-115}).wait(1).to({graphics:mask_1_graphics_131,x:-210.2,y:-115}).wait(1).to({graphics:mask_1_graphics_132,x:-213.8,y:-114.9}).wait(1).to({graphics:mask_1_graphics_133,x:-217.4,y:-114.8}).wait(1).to({graphics:mask_1_graphics_134,x:-220.9,y:-114.7}).wait(1).to({graphics:mask_1_graphics_135,x:-224.5,y:-114.7}).wait(1).to({graphics:mask_1_graphics_136,x:-228.1,y:-114.6}).wait(6));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6E6E6").ss(7,0,0,4).p("AnfrJIO/AAQEoAADRDRQBjBjA2CAQA4CFAACQQAACRg4CFQg2CAhjBjQjRDRkoAAIu/AAQkoAAjRjRQhihjg3iAQg4iFAAiRQAAiQA4iFQA3iABihjQBjhiCAg3QCFg4CRAAg");
	this.shape_1.setTransform(-1.2,-115.4,0.951,0.973);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},137).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-186.4,17.8,17.8);


// stage content:
(lib.mainportfolio4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{circStart:56});

	// timeline functions:
	this.frame_148 = function() {
		// this.stop();
	}
	this.frame_1506 = function() {
		this.switchmc1.play();
	}
	this.frame_1518 = function() {
		this.switchmc2.play();
	}
	this.frame_1629 = function() {
		this.gotoAndPlay("circStart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(148).call(this.frame_148).wait(1358).call(this.frame_1506).wait(12).call(this.frame_1518).wait(111).call(this.frame_1629).wait(98));

	// switch2
	this.switchmc2 = new lib.switchoff();
	this.switchmc2.parent = this;
	this.switchmc2.setTransform(346.5,673.8,1,1,0,0,0,123,75);
	this.switchmc2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.switchmc2).wait(1260).to({_off:false},0).to({_off:true},371).wait(96));

	// switch1
	this.switchmc1 = new lib.switchoff();
	this.switchmc1.parent = this;
	this.switchmc1.setTransform(346.5,213,1,1,0,0,0,123,75);
	this.switchmc1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.switchmc1).wait(1250).to({_off:false},0).to({_off:true},381).wait(96));

	// switch shadowmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1248 = new cjs.Graphics().p("A48dQMAAAgj/MA6fAAAMAAAAj/gAAsCsQi/DBAAESQAAESC/DBQDCDBESAAQERAADCjBQDAjBAAkSQAAkSjAjBQjCjAkRAAQkSAAjCDAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1248).to({graphics:mask_graphics_1248,x:214.7,y:187.2}).wait(479));

	// switch shadow
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(265.9,251.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1248).to({_off:false},0).to({alpha:0.398},30).wait(237).to({alpha:0.469},0).to({alpha:0},57).to({_off:true},1).wait(154));

	// switch bg mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1248 = new cjs.Graphics().p("AJUVnQizizAAj9QAAj8CzizQCzizD8AAQD9AACzCzQCzCzAAD8QAAD9izCzQizCyj9AAQj8AAiziyg");
	var mask_1_graphics_1249 = new cjs.Graphics().p("AI1VsQi5i5AAkGQAAkGC5i5QC5i5EFAAQEGAAC5C5QC5C5AAEGQAAEGi5C5Qi5C5kGAAQkFAAi5i5g");
	var mask_1_graphics_1250 = new cjs.Graphics().p("AIVVxQi/jAAAkOQAAkPC/i/QDAi/EOAAQEPAAC/C/QC/C/AAEPQAAEOi/DAQi/C/kPAAQkOAAjAi/g");
	var mask_1_graphics_1251 = new cjs.Graphics().p("AH2V1QjGjFAAkYQAAkXDGjGQDGjFEXAAQEYAADFDFQDGDGAAEXQAAEYjGDFQjFDGkYAAQkXAAjGjGg");
	var mask_1_graphics_1252 = new cjs.Graphics().p("AHXV6QjMjMAAkgQAAkgDMjMQDMjMEgAAQEgAADMDMQDMDMAAEgQAAEgjMDMQjMDMkgAAQkgAAjMjMg");
	var mask_1_graphics_1253 = new cjs.Graphics().p("AG3V/QjSjSAAkpQAAkpDSjTQDTjSEpAAQEpAADSDSQDTDTAAEpQAAEpjTDSQjSDTkpAAQkpAAjTjTg");
	var mask_1_graphics_1254 = new cjs.Graphics().p("AGYWEQjZjYAAkyQAAkzDZjYQDZjZEyAAQEyAADZDZQDYDYAAEzQAAEyjYDYQjZDZkyAAQkyAAjZjZg");
	var mask_1_graphics_1255 = new cjs.Graphics().p("AF5WJQjfjfAAk7QAAk7DfjfQDejfE8AAQE7AADfDfQDfDfAAE7QAAE7jfDfQjfDfk7AAQk8AAjejfg");
	var mask_1_graphics_1256 = new cjs.Graphics().p("AFZWOQjljlAAlEQAAlEDljlQDljlFFAAQFEAADlDlQDlDlAAFEQAAFEjlDlQjlDmlEAAQlFAAjljmg");
	var mask_1_graphics_1257 = new cjs.Graphics().p("AE6WTQjsjrAAlNQAAlNDsjsQDrjrFNAAQFNAADsDrQDrDsAAFNQAAFNjrDrQjsDslNAAQlNAAjrjsg");
	var mask_1_graphics_1258 = new cjs.Graphics().p("AEaWYQjxjyAAlWQAAlVDxjyQDyjyFWAAQFWAADyDyQDyDyAAFVQAAFWjyDyQjyDylWAAQlWAAjyjyg");
	var mask_1_graphics_1259 = new cjs.Graphics().p("AD7WdQj4j4AAlfQAAlfD4j4QD4j3FfAAQFfAAD4D3QD4D4AAFfQAAFfj4D4Qj4D4lfAAQlfAAj4j4g");
	var mask_1_graphics_1260 = new cjs.Graphics().p("ADcWiQj+j+AAloQAAloD+j+QD+j+FoAAQFoAAD+D+QD/D+AAFoQAAFoj/D+Qj+D/loAAQloAAj+j/g");
	var mask_1_graphics_1261 = new cjs.Graphics().p("AC8WnQkDkFAAlwQAAlxEDkFQEFkEFxAAQFxAAEEEEQEFEFAAFxQAAFwkFEFQkEEFlxAAQlxAAkFkFg");
	var mask_1_graphics_1262 = new cjs.Graphics().p("ACdWsQkKkLAAl6QAAl5EKkLQELkKF6AAQF5AAELEKQEMELAAF5QAAF6kMELQkLELl5AAQl6AAkLkLg");
	var mask_1_graphics_1263 = new cjs.Graphics().p("AB+WxQkRkRAAmDQAAmCERkSQERkQGDAAQGCAAESEQQERESAAGCQAAGDkRERQkSERmCAAQmDAAkRkRg");
	var mask_1_graphics_1264 = new cjs.Graphics().p("ABeW2QkWkYAAmLQAAmMEWkXQEYkXGLAAQGMAAEYEXQEXEXAAGMQAAGLkXEYQkYEYmMAAQmLAAkYkYg");
	var mask_1_graphics_1265 = new cjs.Graphics().p("AA/W7QkdkeAAmUQAAmVEdkeQEekdGUAAQGVAAEeEdQEeEeAAGVQAAGUkeEeQkeEemVAAQmUAAkekeg");
	var mask_1_graphics_1266 = new cjs.Graphics().p("AAgXAQkkkkAAmeQAAmdEkkkQEkkkGdAAQGeAAEkEkQEkEkAAGdQAAGekkEkQkkEkmeAAQmdAAkkkkg");
	var mask_1_graphics_1267 = new cjs.Graphics().p("AAAXFQkpkrAAmmQAAmmEpkrQErkqGmAAQGmAAErEqQErErAAGmQAAGmkrErQkrErmmAAQmmAAkrkrg");
	var mask_1_graphics_1268 = new cjs.Graphics().p("AgeXKQkxkxAAmvQAAmvExkxQEwkwGvAAQGvAAExEwQExExAAGvQAAGvkxExQkxExmvAAQmvAAkwkxg");
	var mask_1_graphics_1269 = new cjs.Graphics().p("Ag+XPQk3k3AAm5QAAm4E3k2QE3k3G4AAQG4AAE3E3QE4E2AAG4QAAG5k4E3Qk3E3m4AAQm4AAk3k3g");
	var mask_1_graphics_1270 = new cjs.Graphics().p("AhdXUQk9k+AAnBQAAnBE9k8QE9k+HBAAQHBAAE9E+QE+E8AAHBQAAHBk+E+Qk9E9nBAAQnBAAk9k9g");
	var mask_1_graphics_1271 = new cjs.Graphics().p("Ah8XZQlElEAAnKQAAnKFElDQFDlEHKAAQHKAAFDFEQFEFDAAHKQAAHKlEFEQlDFEnKAAQnKAAlDlEg");
	var mask_1_graphics_1272 = new cjs.Graphics().p("AicXeQlKlLAAnSQAAnTFKlKQFKlKHTAAQHSAAFLFKQFKFKAAHTQAAHSlKFLQlLFKnSAAQnTAAlKlKg");
	var mask_1_graphics_1273 = new cjs.Graphics().p("Ai7XjQlRlRAAncQAAncFRlPQFQlRHbAAQHcAAFRFRQFQFPAAHcQAAHclQFRQlRFQncAAQnbAAlQlQg");
	var mask_1_graphics_1274 = new cjs.Graphics().p("AjaXoQlXlXAAnlQAAnlFXlWQFWlWHkAAQHlAAFXFWQFXFWAAHlQAAHllXFXQlXFWnlAAQnkAAlWlWg");
	var mask_1_graphics_1275 = new cjs.Graphics().p("Aj6XtQldleAAntQAAnuFdlcQFcldHuAAQHuAAFdFdQFdFcAAHuQAAHtldFeQldFdnuAAQnuAAlcldg");
	var mask_1_graphics_1276 = new cjs.Graphics().p("AkZXyQlklkAAn3QAAn2FkljQFiljH3AAQH3AAFjFjQFkFjAAH2QAAH3lkFkQljFjn3AAQn3AAliljg");
	var mask_1_graphics_1277 = new cjs.Graphics().p("Ak4X3QlqlqAAoAQAAn/FqlpQFolqIAAAQH/AAFqFqQFqFpAAH/QAAIAlqFqQlqFpn/AAQoAAAlolpg");
	var mask_1_graphics_1278 = new cjs.Graphics().p("AlYX7QlwlwAAoIQAAoJFwlvQFvlwIJAAQIIAAFwFwQFwFvAAIJQAAIIlwFwQlwFxoIAAQoJAAlvlxg");
	var mask_1_graphics_1279 = new cjs.Graphics().p("Al3YAQl3l2AAoRQAAoSF3l1QF2l3IRAAQIRAAF2F3QF3F1AAISQAAIRl3F2Ql2F3oRAAQoRAAl2l3g");
	var mask_1_graphics_1280 = new cjs.Graphics().p("AmXYFQl8l8AAobQAAoaF8l8QF9l8IZAAQIbAAF9F8QF8F8AAIaQAAIbl8F8Ql9F9obAAQoZAAl9l9g");
	var mask_1_graphics_1281 = new cjs.Graphics().p("Am2YKQmDmDAAojQAAojGDmCQGDmDIiAAQIkAAGDGDQGDGCAAIjQAAIjmDGDQmDGDokAAQoiAAmDmDg");
	var mask_1_graphics_1282 = new cjs.Graphics().p("AnVYPQmKmJAAosQAAosGKmJQGJmJIrAAQIsAAGKGJQGJGJAAIsQAAIsmJGJQmKGKosAAQorAAmJmKg");
	var mask_1_graphics_1283 = new cjs.Graphics().p("An1YUQmPmPAAo1QAAo2GPmOQGQmQI0AAQI1AAGQGQQGQGOAAI2QAAI1mQGPQmQGQo1AAQo0AAmQmQg");
	var mask_1_graphics_1284 = new cjs.Graphics().p("AoMYgQmWmWAAo+QAAo+GWmVQGWmWI9AAQI+AAGWGWQGWGVAAI+QAAI+mWGWQmWGWo+AAQo9AAmWmWg");
	var mask_1_graphics_1516 = new cjs.Graphics().p("AozZFQnKnKAAqIQAAqHHKnKQHKnKKHAAQKIAAHKHKQHKHKAAKHQAAKInKHKQnKHKqIAAQqHAAnKnKg");
	var mask_1_graphics_1517 = new cjs.Graphics().p("AocZBQnEnFAAqAQAAp/HEnEQHFnFJ/AAQKAAAHEHFQHFHEAAJ/QAAKAnFHFQnEHEqAAAQp/AAnFnEg");
	var mask_1_graphics_1518 = new cjs.Graphics().p("AoEY8Qm/m/AAp4QAAp3G/m/QG/m/J3AAQJ4AAG/G/QG/G/AAJ3QAAJ4m/G/Qm/G/p4AAQp3AAm/m/g");
	var mask_1_graphics_1519 = new cjs.Graphics().p("AntY4Qm5m6AApwQAApvG5m5QG5m5JwAAQJwAAG5G5QG5G5AAJvQAAJwm5G6Qm5G5pwAAQpwAAm5m5g");
	var mask_1_graphics_1520 = new cjs.Graphics().p("AnWY0Qmzm0AApoQAApoGzmzQG0m0JnAAQJoAAG0G0QG0GzAAJoQAAJom0G0Qm0GzpoAAQpnAAm0mzg");
	var mask_1_graphics_1521 = new cjs.Graphics().p("Am+YvQmvmuAApgQAApgGvmuQGumuJfAAQJgAAGvGuQGuGuAAJgQAAJgmuGuQmvGupgAAQpfAAmumug");
	var mask_1_graphics_1522 = new cjs.Graphics().p("AmnYrQmpmpAApYQAApYGpmoQGompJYAAQJYAAGpGpQGpGoAAJYQAAJYmpGpQmpGopYAAQpYAAmomog");
	var mask_1_graphics_1523 = new cjs.Graphics().p("AmQYnQmjmkAApQQAApQGjmjQGimjJRAAQJQAAGjGjQGjGjAAJQQAAJQmjGkQmjGjpQAAQpRAAmimjg");
	var mask_1_graphics_1524 = new cjs.Graphics().p("Al4YiQmemdAApJQAApHGemeQGcmdJJAAQJIAAGeGdQGdGeAAJHQAAJJmdGdQmeGepIAAQpJAAmcmeg");
	var mask_1_graphics_1525 = new cjs.Graphics().p("AlhYeQmYmYAApBQAApAGYmXQGXmYJBAAQJAAAGYGYQGYGXAAJAQAAJBmYGYQmYGYpAAAQpBAAmXmYg");
	var mask_1_graphics_1526 = new cjs.Graphics().p("AlKYZQmSmSAAo5QAAo4GSmSQGSmSI4AAQI5AAGSGSQGTGSAAI4QAAI5mTGSQmSGTo5AAQo4AAmSmTg");
	var mask_1_graphics_1527 = new cjs.Graphics().p("AkyYVQmNmNAAowQAAoxGNmMQGLmNIxAAQIxAAGNGNQGNGMAAIxQAAIwmNGNQmNGNoxAAQoxAAmLmNg");
	var mask_1_graphics_1528 = new cjs.Graphics().p("AkbYRQmHmHAAopQAAopGHmHQGGmHIpAAQIpAAGHGHQGHGHAAIpQAAIpmHGHQmHGHopAAQopAAmGmHg");
	var mask_1_graphics_1529 = new cjs.Graphics().p("AkEYMQmBmBAAohQAAohGBmBQGBmBIhgBQIhABGCGBQGBGBAAIhQAAIhmBGBQmCGCohAAQohAAmBmCg");
	var mask_1_graphics_1530 = new cjs.Graphics().p("AjtYIQl8l8AAoZQAAoZF8l7QF7l8IaAAQIZAAF8F8QF8F7AAIZQAAIZl8F8Ql8F8oZAAQoaAAl7l8g");
	var mask_1_graphics_1531 = new cjs.Graphics().p("AjVYEQl3l3AAoRQAAoRF3l2QF1l2ISAAQIRAAF2F2QF3F2AAIRQAAIRl3F3Ql2F2oRAAQoSAAl1l2g");
	var mask_1_graphics_1532 = new cjs.Graphics().p("Ai+X/QlxlwAAoKQAAoJFxlwQFwlxIJAAQIKAAFxFxQFwFwAAIJQAAIKlwFwQlxFxoKAAQoJAAlwlxg");
	var mask_1_graphics_1533 = new cjs.Graphics().p("AinX7QlrlrAAoCQAAoBFrlqQFrlsIBAAQICAAFrFsQFrFqAAIBQAAIClrFrQlrFroCAAQoBAAlrlrg");
	var mask_1_graphics_1534 = new cjs.Graphics().p("AiPX3QlmlmAAn6QAAn5FmllQFklmH6AAQH6AAFlFmQFmFlAAH5QAAH6lmFmQllFln6AAQn6AAlkllg");
	var mask_1_graphics_1535 = new cjs.Graphics().p("Ah4XyQlglgAAnxQAAnyFglfQFflgHyAAQHyAAFgFgQFgFfAAHyQAAHxlgFgQlgFhnyAAQnyAAlflhg");
	var mask_1_graphics_1536 = new cjs.Graphics().p("AhhXuQlalaAAnqQAAnqFalaQFalaHqAAQHqAAFaFaQFbFaAAHqQAAHqlbFaQlaFbnqAAQnqAAlalbg");
	var mask_1_graphics_1537 = new cjs.Graphics().p("AhJXqQlVlVAAniQAAniFVlUQFUlVHiAAQHiAAFUFVQFVFUAAHiQAAHilVFVQlUFVniAAQniAAlUlVg");
	var mask_1_graphics_1538 = new cjs.Graphics().p("AgyXlQlPlPAAnaQAAnaFPlOQFOlQHaAAQHaAAFQFQQFPFOAAHaQAAHalPFPQlQFQnaAAQnaAAlOlQg");
	var mask_1_graphics_1539 = new cjs.Graphics().p("AgbXhQlKlKAAnSQAAnSFKlJQFJlKHSAAQHSAAFKFKQFKFJAAHSQAAHSlKFKQlKFKnSAAQnSAAlJlKg");
	var mask_1_graphics_1540 = new cjs.Graphics().p("AgDXdQlFlEAAnLQAAnKFFlDQFDlEHKAAQHKAAFFFEQFEFDAAHKQAAHLlEFEQlFFEnKAAQnKAAlDlEg");
	var mask_1_graphics_1541 = new cjs.Graphics().p("AATXYQk+k+AAnDQAAnCE+k+QE+k+HDAAQHCAAE/E+QE+E+AAHCQAAHDk+E+Qk/E/nCAAQnDAAk+k/g");
	var mask_1_graphics_1542 = new cjs.Graphics().p("AAqXUQk4k5AAm6QAAm7E4k4QE5k5G7AAQG6AAE5E5QE5E4AAG7QAAG6k5E5Qk5E5m6AAQm7AAk5k5g");
	var mask_1_graphics_1543 = new cjs.Graphics().p("ABBXQQkyk0AAmyQAAmzEykzQE0kzGzAAQGyAAE0EzQEzEzAAGzQAAGykzE0Qk0EzmyAAQmzAAk0kzg");
	var mask_1_graphics_1544 = new cjs.Graphics().p("ABZXLQktktAAmrQAAmrEtkuQEuktGqAAQGrAAEuEtQEuEuAAGrQAAGrkuEtQkuEumrAAQmqAAkukug");
	var mask_1_graphics_1545 = new cjs.Graphics().p("ABwXHQknkoAAmjQAAmjEnkoQEoknGjAAQGjAAEoEnQEpEoAAGjQAAGjkpEoQkoEomjAAQmjAAkokog");
	var mask_1_graphics_1546 = new cjs.Graphics().p("ACHXDQkhkjAAmbQAAmbEhkjQEjkhGbAAQGbAAEjEhQEiEjAAGbQAAGbkiEjQkjEimbAAQmbAAkjkig");
	var mask_1_graphics_1547 = new cjs.Graphics().p("ACfW+QkckdAAmTQAAmTEckdQEdkcGTAAQGTAAEdEcQEdEdAAGTQAAGTkdEdQkdEemTAAQmTAAkdkeg");
	var mask_1_graphics_1548 = new cjs.Graphics().p("AC2W6QkXkXAAmMQAAmLEXkXQEYkXGLAAQGLAAEXEXQEYEXAAGLQAAGMkYEXQkXEYmLAAQmLAAkYkYg");
	var mask_1_graphics_1549 = new cjs.Graphics().p("ADNW2QkRkSAAmDQAAmEERkSQESkRGEAAQGDAAESERQESESAAGEQAAGDkSESQkSESmDAAQmEAAkSkSg");
	var mask_1_graphics_1550 = new cjs.Graphics().p("ADlWxQkMkMAAl7QAAl8EMkMQEMkLF7AAQF8AAEMELQEMEMAAF8QAAF7kMEMQkMENl8AAQl7AAkMkNg");
	var mask_1_graphics_1551 = new cjs.Graphics().p("AD8WtQkGkHAAlzQAAl0EGkGQEHkGFzAAQF0AAEGEGQEHEGAAF0QAAFzkHEHQkGEHl0AAQlzAAkHkHg");
	var mask_1_graphics_1552 = new cjs.Graphics().p("AETWpQkBkBAAlsQAAlsEBkBQEBkAFsAAQFsAAEBEAQEBEBAAFsQAAFskBEBQkBEBlsAAQlsAAkBkBg");
	var mask_1_graphics_1553 = new cjs.Graphics().p("AErWkQj8j7AAlkQAAlkD8j7QD7j7FkAAQFkAAD7D7QD8D7AAFkQAAFkj8D7Qj7D8lkAAQlkAAj7j8g");
	var mask_1_graphics_1554 = new cjs.Graphics().p("AFCWgQj2j2AAlcQAAlcD2j2QD2j2FcAAQFcAAD2D2QD2D2AAFcQAAFcj2D2Qj2D2lcAAQlcAAj2j2g");
	var mask_1_graphics_1555 = new cjs.Graphics().p("AFZWcQjwjxAAlUQAAlUDwjwQDxjwFUAAQFTAADxDwQDwDwAAFUQAAFUjwDxQjxDwlTAAQlUAAjxjwg");
	var mask_1_graphics_1556 = new cjs.Graphics().p("AFwWXQjqjqAAlNQAAlMDqjqQDrjrFMAAQFMAADrDrQDrDqAAFMQAAFNjrDqQjrDrlMAAQlMAAjrjrg");
	var mask_1_graphics_1557 = new cjs.Graphics().p("AGIWTQjmjlAAlEQAAlFDmjlQDljlFEAAQFEAADmDlQDlDlAAFFQAAFEjlDlQjmDllEAAQlEAAjljlg");
	var mask_1_graphics_1558 = new cjs.Graphics().p("AGfWPQjgjgAAk8QAAk9DgjfQDgjgE8AAQE8AADgDgQDgDfAAE9QAAE8jgDgQjgDfk8AAQk8AAjgjfg");
	var mask_1_graphics_1559 = new cjs.Graphics().p("AG2WKQjajaAAk0QAAk0DajbQDajaE1AAQE0AADaDaQDaDbAAE0QAAE0jaDaQjaDak0AAQk1AAjajag");
	var mask_1_graphics_1560 = new cjs.Graphics().p("AHOWGQjVjVAAksQAAksDVjVQDUjVEtAAQEsAADVDVQDUDVAAEsQAAEsjUDVQjVDVksAAQktAAjUjVg");
	var mask_1_graphics_1561 = new cjs.Graphics().p("AHlWCQjPjPAAklQAAkkDPjPQDPjPElAAQEkAADPDPQDPDPAAEkQAAEljPDPQjPDPkkAAQklAAjPjPg");
	var mask_1_graphics_1562 = new cjs.Graphics().p("AH8V9QjJjJAAkdQAAkcDJjKQDKjJEcAAQEdAADJDJQDKDKAAEcQAAEdjKDJQjJDKkdAAQkcAAjKjKg");
	var mask_1_graphics_1563 = new cjs.Graphics().p("AIUV5QjEjEAAkVQAAkUDEjEQDDjEEVAAQEVAADEDEQDEDEAAEUQAAEVjEDEQjEDEkVAAQkVAAjDjEg");
	var mask_1_graphics_1564 = new cjs.Graphics().p("AIrV1Qi+i/AAkMQAAkNC+i/QC+i+ENAAQENAAC+C+QC+C/AAENQAAEMi+C/Qi+C+kNAAQkNAAi+i+g");
	var mask_1_graphics_1565 = new cjs.Graphics().p("AJCVwQi4i4AAkFQAAkFC4i5QC5i5EFAAQEFAAC5C5QC4C5AAEFQAAEFi4C4Qi5C5kFAAQkFAAi5i5g");
	var mask_1_graphics_1566 = new cjs.Graphics().p("AJaVsQizizAAj9QAAj9CzizQCzizD9AAQD9AACzCzQCzCzAAD9QAAD9izCzQizCzj9AAQj9AAizizg");
	var mask_1_graphics_1567 = new cjs.Graphics().p("AJxVoQiuiuAAj1QAAj1CuiuQCtitD2AAQD1AACtCtQCuCuAAD1QAAD1iuCuQitCtj1AAQj2AAititg");
	var mask_1_graphics_1568 = new cjs.Graphics().p("AKIVjQioioAAjtQAAjtCoioQCoioDtAAQDuAACoCoQCnCoAADtQAADtinCoQioCojuAAQjtAAioiog");
	var mask_1_graphics_1569 = new cjs.Graphics().p("AKfVfQiiiiAAjmQAAjlCiiiQCjijDlAAQDmAACiCjQCiCiAADlQAADmiiCiQiiCijmAAQjlAAijiig");
	var mask_1_graphics_1570 = new cjs.Graphics().p("AK2VaQicicAAjeQAAjeCcicQCdidDeAAQDdAACdCdQCdCcAADeQAADeidCcQidCdjdAAQjeAAididg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1248).to({graphics:mask_1_graphics_1248,x:163.8,y:156.1}).wait(1).to({graphics:mask_1_graphics_1249,x:164.3,y:157.3}).wait(1).to({graphics:mask_1_graphics_1250,x:164.8,y:158.4}).wait(1).to({graphics:mask_1_graphics_1251,x:165.4,y:159.5}).wait(1).to({graphics:mask_1_graphics_1252,x:165.9,y:160.6}).wait(1).to({graphics:mask_1_graphics_1253,x:166.5,y:161.8}).wait(1).to({graphics:mask_1_graphics_1254,x:167,y:162.9}).wait(1).to({graphics:mask_1_graphics_1255,x:167.6,y:164}).wait(1).to({graphics:mask_1_graphics_1256,x:168.1,y:165.2}).wait(1).to({graphics:mask_1_graphics_1257,x:168.6,y:166.3}).wait(1).to({graphics:mask_1_graphics_1258,x:169.2,y:167.4}).wait(1).to({graphics:mask_1_graphics_1259,x:169.7,y:168.5}).wait(1).to({graphics:mask_1_graphics_1260,x:170.3,y:169.7}).wait(1).to({graphics:mask_1_graphics_1261,x:170.8,y:170.8}).wait(1).to({graphics:mask_1_graphics_1262,x:171.4,y:171.9}).wait(1).to({graphics:mask_1_graphics_1263,x:171.9,y:173}).wait(1).to({graphics:mask_1_graphics_1264,x:172.4,y:174.2}).wait(1).to({graphics:mask_1_graphics_1265,x:173,y:175.3}).wait(1).to({graphics:mask_1_graphics_1266,x:173.5,y:176.4}).wait(1).to({graphics:mask_1_graphics_1267,x:174.1,y:177.6}).wait(1).to({graphics:mask_1_graphics_1268,x:174.6,y:178.7}).wait(1).to({graphics:mask_1_graphics_1269,x:175.2,y:179.8}).wait(1).to({graphics:mask_1_graphics_1270,x:175.7,y:180.9}).wait(1).to({graphics:mask_1_graphics_1271,x:176.2,y:182.1}).wait(1).to({graphics:mask_1_graphics_1272,x:176.8,y:183.2}).wait(1).to({graphics:mask_1_graphics_1273,x:177.3,y:184.3}).wait(1).to({graphics:mask_1_graphics_1274,x:177.9,y:185.4}).wait(1).to({graphics:mask_1_graphics_1275,x:178.4,y:186.6}).wait(1).to({graphics:mask_1_graphics_1276,x:179,y:187.7}).wait(1).to({graphics:mask_1_graphics_1277,x:179.5,y:188.8}).wait(1).to({graphics:mask_1_graphics_1278,x:180,y:190}).wait(1).to({graphics:mask_1_graphics_1279,x:180.6,y:191.1}).wait(1).to({graphics:mask_1_graphics_1280,x:181.1,y:192.2}).wait(1).to({graphics:mask_1_graphics_1281,x:181.7,y:193.3}).wait(1).to({graphics:mask_1_graphics_1282,x:182.2,y:194.5}).wait(1).to({graphics:mask_1_graphics_1283,x:182.8,y:195.6}).wait(1).to({graphics:mask_1_graphics_1284,x:184.1,y:197.4}).wait(232).to({graphics:mask_1_graphics_1516,x:210.6,y:206.3}).wait(1).to({graphics:mask_1_graphics_1517,x:209.7,y:205.3}).wait(1).to({graphics:mask_1_graphics_1518,x:208.8,y:204.3}).wait(1).to({graphics:mask_1_graphics_1519,x:207.8,y:203.3}).wait(1).to({graphics:mask_1_graphics_1520,x:206.9,y:202.3}).wait(1).to({graphics:mask_1_graphics_1521,x:206,y:201.3}).wait(1).to({graphics:mask_1_graphics_1522,x:205.1,y:200.3}).wait(1).to({graphics:mask_1_graphics_1523,x:204.1,y:199.4}).wait(1).to({graphics:mask_1_graphics_1524,x:203.2,y:198.4}).wait(1).to({graphics:mask_1_graphics_1525,x:202.3,y:197.4}).wait(1).to({graphics:mask_1_graphics_1526,x:201.4,y:196.4}).wait(1).to({graphics:mask_1_graphics_1527,x:200.5,y:195.4}).wait(1).to({graphics:mask_1_graphics_1528,x:199.5,y:194.4}).wait(1).to({graphics:mask_1_graphics_1529,x:198.6,y:193.4}).wait(1).to({graphics:mask_1_graphics_1530,x:197.7,y:192.4}).wait(1).to({graphics:mask_1_graphics_1531,x:196.8,y:191.4}).wait(1).to({graphics:mask_1_graphics_1532,x:195.8,y:190.4}).wait(1).to({graphics:mask_1_graphics_1533,x:194.9,y:189.4}).wait(1).to({graphics:mask_1_graphics_1534,x:194,y:188.4}).wait(1).to({graphics:mask_1_graphics_1535,x:193.1,y:187.5}).wait(1).to({graphics:mask_1_graphics_1536,x:192.2,y:186.5}).wait(1).to({graphics:mask_1_graphics_1537,x:191.2,y:185.5}).wait(1).to({graphics:mask_1_graphics_1538,x:190.3,y:184.5}).wait(1).to({graphics:mask_1_graphics_1539,x:189.4,y:183.5}).wait(1).to({graphics:mask_1_graphics_1540,x:188.5,y:182.5}).wait(1).to({graphics:mask_1_graphics_1541,x:187.5,y:181.5}).wait(1).to({graphics:mask_1_graphics_1542,x:186.6,y:180.5}).wait(1).to({graphics:mask_1_graphics_1543,x:185.7,y:179.5}).wait(1).to({graphics:mask_1_graphics_1544,x:184.8,y:178.5}).wait(1).to({graphics:mask_1_graphics_1545,x:183.9,y:177.5}).wait(1).to({graphics:mask_1_graphics_1546,x:182.9,y:176.5}).wait(1).to({graphics:mask_1_graphics_1547,x:182,y:175.6}).wait(1).to({graphics:mask_1_graphics_1548,x:181.1,y:174.6}).wait(1).to({graphics:mask_1_graphics_1549,x:180.2,y:173.6}).wait(1).to({graphics:mask_1_graphics_1550,x:179.2,y:172.6}).wait(1).to({graphics:mask_1_graphics_1551,x:178.3,y:171.6}).wait(1).to({graphics:mask_1_graphics_1552,x:177.4,y:170.6}).wait(1).to({graphics:mask_1_graphics_1553,x:176.5,y:169.6}).wait(1).to({graphics:mask_1_graphics_1554,x:175.6,y:168.6}).wait(1).to({graphics:mask_1_graphics_1555,x:174.6,y:167.6}).wait(1).to({graphics:mask_1_graphics_1556,x:173.7,y:166.6}).wait(1).to({graphics:mask_1_graphics_1557,x:172.8,y:165.6}).wait(1).to({graphics:mask_1_graphics_1558,x:171.9,y:164.6}).wait(1).to({graphics:mask_1_graphics_1559,x:170.9,y:163.6}).wait(1).to({graphics:mask_1_graphics_1560,x:170,y:162.7}).wait(1).to({graphics:mask_1_graphics_1561,x:169.1,y:161.7}).wait(1).to({graphics:mask_1_graphics_1562,x:168.2,y:160.7}).wait(1).to({graphics:mask_1_graphics_1563,x:167.3,y:159.7}).wait(1).to({graphics:mask_1_graphics_1564,x:166.3,y:158.7}).wait(1).to({graphics:mask_1_graphics_1565,x:165.4,y:157.7}).wait(1).to({graphics:mask_1_graphics_1566,x:164.5,y:156.7}).wait(1).to({graphics:mask_1_graphics_1567,x:163.6,y:155.7}).wait(1).to({graphics:mask_1_graphics_1568,x:162.6,y:154.7}).wait(1).to({graphics:mask_1_graphics_1569,x:161.7,y:153.7}).wait(1).to({graphics:mask_1_graphics_1570,x:160.8,y:152.7}).wait(157));

	// switch bg
	this.instance_1 = new lib.switchon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216.8,251.1,0.998,1,0,0,0,123.4,75.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1248).to({_off:false},0).to({_off:true},326).wait(153));

	// Layer 29
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAqQgHgBgJgFIgPgJQgUgIAGgPQAEgKAOgMQAKgIAYgEQBAgKATAAQAbgCArACQBpAEBMAWQAdAJADAFQADAHgcgBQgHgBh3ANIh+ANQgnAEgUADQgWAEgKAAIgFAAg");
	this.shape.setTransform(259.3,182.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1200).to({_off:false},0).to({_off:true},321).wait(206));

	// switch ol mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1201 = new cjs.Graphics().p("AN1O1QAKgbArg1QAogwAJghQACgKADgSIAFgbIADgTQABgLgFgGQgDgEgEgBIAAgGIADgQQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUASgbAQQg6AkguACQAHgGAGgPgAMsO7IAAgBIATAKQgKgDgJgGg");
	var mask_2_graphics_1202 = new cjs.Graphics().p("ANMPIQgXgFgUgPQgPgMgJgPIAjghIAagXQAPgOAKgLIAQgTQAJgMAIgGIAOgJIAGgEIAHgGIABAAIAKgMIAKgLIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIADgQQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUASgbAQQg9AmgwAAQgMAAgLgCg");
	var mask_2_graphics_1203 = new cjs.Graphics().p("AL4PUQgdgFgVgSQgVgSgLgbQgKgcAFgbQAFgjAjgqQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAAAIABgQIADgQQAkgWAWgIIAbgHIAcgHIAvgPQAagGAZADQAbADAVANQAXAOAOAWQAPAWACAZQABAbgLAdQgNAdgUAOQgJAHgQAGIgcAJIg0AYQgnATgoAPQgiAMgVABQgUARgbARQhEAqg0gEQgVAOgUAGQgQAFgQAAQgLAAgMgDg");
	var mask_2_graphics_1204 = new cjs.Graphics().p("AieDAQgdgFgVgSIAAAAIgDgDIAAAAQAJAAAJgDIAAAAQAYgIAVgYIAAAAQAOgRAQgfIAAAAQAQggADgSIAAAAIAAgKIAAAAQAAgPgFgOIAAAAQgIgTgPgNIAAAAQgNgMgQgGIAAAAIASgMIAAAAQAsgaArAJIAAAAQAqAIAYApIAAAAIADAFIAAAAIAHgIIAAAAIAYgUIAAAAQAOgLAEgMIAAAAQACgGAAgKIAAAAIAAgBIABgPIAAAAIACgQIAAAAQAlgXAWgHIAAAAIAbgHIAAAAIAcgHIAAAAIAvgPIAAAAQAagGAZADIAAAAQAbADAVANIAAAAQAXAOAOAWIAAAAQAPAWACAZIAAAAQABAbgLAdIAAAAQgNAdgUANIAAAAQgJAHgQAGIAAAAIgcAJIAAAAIg0AYIAAAAQgnATgoAPIAAAAQgiALgWACIAAAAQgTARgbARIAAAAQhDAqg0gFIAAAAQgVAPgUAGIAAAAQgQAEgQAAIAAAAQgLAAgMgCgAj/CcQgQgJgLgMIAAAAQgYgBgagPIAAAAQgfgRgMgYIAAAAQgNgYAEgdIAAAAQAFgcATgUIAAAAQAUgTAcgHIAAAAQAcgHAbAHIAAAAQAJACAHAEIAAAAQAUgNATgDIAAAAQAUgEAUAGIAAAAIAGABIAAAAQAQAGANAMIAAAAQAPANAIATIAAAAQAFAOAAAPIAAAAIAAAKIAAAAQgDASgQAgIAAAAQgQAfgOARIAAAAQgVAYgYAIIAAAAQgJADgJAAIAAAAIgFAAIAAAAQgTAAgUgKg");
	var mask_2_graphics_1205 = new cjs.Graphics().p("AL4PUQgdgFgVgSQgVgSgLgbIgBgDQgSAPgcAIQgSAGghAGQgvAIgfgBQgqgCgdgTQgVgOgNgWQgNgXgBgZQgCgYALgYQALgYATgQQAagVA7gNQBCgPAqAGQAcAEAYANQAZAOAPAXIAGALQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAAAIABgQIADgQQAkgWAWgIIAbgHIAcgHIAvgPQAagGAZADQAbADAVANQAXAOAOAWQAPAWACAZQABAbgLAdQgNAdgUAOQgJAHgQAGIgcAJIg0AYQgnATgoAPQgiAMgVABQgUARgbARQhEAqg0gEQgVAOgUAGQgQAFgQAAQgLAAgMgDg");
	var mask_2_graphics_1206 = new cjs.Graphics().p("AgXDAQgdgFgVgSIAAAAQgVgSgLgbIAAAAIgBgDIAAAAQgSAPgcAIIAAAAQgSAGghAGIAAAAQgvAIgfgBIAAAAQgqgCgdgTIAAAAQgMgIgJgKIAAAAQgMALgRAGIAAAAQgcAKgfgLIAAAAQgfgLgPgaIAAAAQgQgaAEggIAAAAQAFggAWgUIAAAAQAWgUAggDIAAAAQAggCAZARIAAAAIAEADIAAAAQAVAPAJAdIAAAAQAEAOAAANIAAAAQAAgNgEgOIAAAAQgJgdgVgPIAAAAQAHgKAJgHIAAAAQAagVA7gNIAAAAQBCgPAqAGIAAAAQAcAEAYANIAAAAQAZAOAPAXIAAAAIAGALIAAAAQAhgpAigUIAAAAQArgaArAJIAAAAQAqAIAZApIAAAAIADAFIAAAAIAHgIIAAAAIAYgUIAAAAQAOgLAEgMIAAAAQACgGAAgKIAAAAIAAgBIABgPIAAAAIACgQIAAAAQAlgXAWgHIAAAAIAbgHIAAAAIAcgHIAAAAIAvgPIAAAAQAagGAZADIAAAAQAbADAVANIAAAAQAXAOAOAWIAAAAQAPAWACAZIAAAAQABAbgLAdIAAAAQgNAdgUANIAAAAQgJAHgQAGIAAAAIgcAJIAAAAIg0AYIAAAAQgnATgoAPIAAAAQgiALgWACIAAAAQgTARgbARIAAAAQhEAqg0gFIAAAAQgVAPgUAGIAAAAQgQAEgPAAIAAAAQgMAAgLgCg");
	var mask_2_graphics_1207 = new cjs.Graphics().p("ADPPVQgmgMgVgeQgWgeACgnQABgoAagbQAOgPAegQQAWgLA1gWQAlgPAUgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGAMQAhgqAigTQAsgaArAIQAqAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIADgQQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUASgbAQQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgQAFgRAAQgTAAgUgGg");
	var mask_2_graphics_1208 = new cjs.Graphics().p("ApPDRQgfgKgPgaIAAAAQgQgaAEggIAAAAQAFggAWgVIAAAAQAWgVAggCIAAAAQAZgCAUAJIAAAAIAMAHIAAAAQAZARAJAgIAAAAQAEANAAANIAAAAQAAgNgEgNIAAAAQgJgggZgRIAAAAIgMgHIAAAAQAFgbATgTIAAAAQAPgPAegQIAAAAQAWgLA1gWIAAAAQAlgPAUgDIAAAAQAMgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAYABASAFIAAAAIARgEIAAAAQBCgPAqAGIAAAAQAdAEAWANIAAAAQAaAOAOAWIAAAAIAHALIAAAAQAhgpAhgTIAAAAQAsgaArAIIAAAAQArAIAZApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgXAVgHIAAAAIAcgHIAAAAIAcgHIAAAAIAvgQIAAAAQAZgGAaADIAAAAQAbAEAVANIAAAAQAWANAOAWIAAAAQAPAWACAaIAAAAQACAbgMAcIAAAAQgNAegTAOIAAAAQgKAHgQAFIAAAAIgbAIIAAAAIg1AZIAAAAQgnATgnAPIAAAAQgiALgWABIAAAAQgTASgbAQIAAAAQhFArgzgFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgWgRgKgcIAAAAIgBgCIAAAAQgTAOgaAJIAAAAQgSAFgiAGIAAAAQguAJgfgCIAAAAQgZgBgTgGIAAAAIgbABIAAAAQgxABgUAGIAAAAQgOAEgcANIAAAAQgbAOgPAEIAAAAQgjALglgMIAAAAQgSgGgPgKIAAAAQgPAkglANIAAAAQgNAFgOAAIAAAAQgQAAgQgGg");
	var mask_2_graphics_1209 = new cjs.Graphics().p("AhCQyQgagJgUgUQgTgUgIgaQgIgbAFgbQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAgghQA1g3AqgRQAigOAqAAQAXAAAUAEIAhgOQAlgPAUgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGAMQAhgqAigTQAsgaArAIQAqAIAZApIADAGIACgDIAFgFIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIADgQQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUASgbAQQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgFgCIgCABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgaAFQgKACgKAAQgRAAgRgFg");
	var mask_2_graphics_1210 = new cjs.Graphics().p("ArRFYQgfgKgPgaIAAAAQgQgaAEggIAAAAQAFggAWgVIAAAAQANgMAQgGIAAAAIALgMIAAAAQATgTAcgEIAAAAIAHAAIAAAAIgHAAIAAAAQgGgXAFgXIAAAAQAFgbAQgXIAAAAQAQgXAYgNIAAAAIARgJIAAAAIAQgKIAAAAQAHgHAIgLIAAAAIAMgUIAAAAQAQgZAgghIAAAAQA1g3ArgRIAAAAQAhgOArAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQAMgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAYABASAFIAAAAIARgEIAAAAQBBgPAqAGIAAAAQAdAEAXANIAAAAQAaAOAOAWIAAAAIAHALIAAAAQAhgpAhgTIAAAAQAsgaArAIIAAAAQArAIAZApIAAAAIADAFIAAAAIACgCIAAAAIAFgFIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgXAVgHIAAAAIAcgHIAAAAIAcgHIAAAAIAvgQIAAAAQAZgGAaADIAAAAQAbAEAVANIAAAAQAWANAOAWIAAAAQAPAWACAaIAAAAQACAbgMAcIAAAAQgNAegTAOIAAAAQgKAHgQAFIAAAAIgbAJIAAAAIg1AZIAAAAQgnATgnAPIAAAAQgiALgWABIAAAAQgTASgbAQIAAAAQhFAqgzgFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgWgQgKgcIAAAAIgBgCIAAAAQgTAOgbAJIAAAAQgSAFgiAFIAAAAQguAJgegCIAAAAQgZgBgTgGIAAAAIgbABIAAAAQgxABgUAGIAAAAQgOAEgcANIAAAAQgbAOgPAEIAAAAQgjALglgMIAAAAIgFgCIAAAAIgBABIAAAAQgMAHgOASIAAAAIgdArIAAAAQgRAagNAOIAAAAQgWAXgnAaIAAAAQgoAbgcAFIAAAAQgNADgNgBIAAAAQAAgNgEgMIAAAAQgJgggZgRIAAAAIgCgBIAAAAIACABIAAAAQAZARAJAgIAAAAQAEAMAAANIAAAAQAAARgHARIAAAAQgHARgOANIAAAAQgNAMgQAHIAAAAQgPAVgbAJIAAAAQgNAFgOAAIAAAAQgQAAgQgGgApbCdIgBAAIAAAAIABAAgApdCcIgDgCIAAAAIADACgAqRCQIAHgBIAAAAIgHABgAqJCPIgBAAIAAAAIABAAg");
	var mask_2_graphics_1211 = new cjs.Graphics().p("AjVTaQgkAAgdgYQgegYgIgiQgEgSAAgXQgCgcABgiQABgiADgNQAFgYAHgVQATg4AagiQAmgtAvgGQARgCARAEQgFgWAEgXQAFgbAQgWQARgXAXgOIARgJIAQgLQAIgGAIgMIAMgUQAPgYAggiQA1g3AqgRQAigOAqAAQAXAAAUAFIAhgPQAlgPAUgDQANgCARAAIAeAAIA5AAQAYABASAFIARgFQBCgPAqAGQAcAEAYANQAZAOAPAXIAGALQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAAAIABgQIADgQQAkgWAWgIIAbgHIAcgHIAvgPQAagGAZADQAbADAVANQAXAOAOAWQAPAWACAZQABAbgLAdQgNAdgUAOQgJAHgQAGIgcAJIg0AYQgnATgoAPQgiAMgVABQgUARgbARQhEAqg0gEQgVAOgUAGQgbAIgcgGQgdgFgVgSQgVgSgLgbIgBgDQgSAPgcAIQgSAGghAGQgvAIgfgBQgYgBgUgHIgaACQgxABgUAFQgPAEgbAOQgcAOgOAEQgjAKglgMIgFgBIgCAAQgLAHgPATIgcAqQgRAagOAPQgVAXgnAZQgpAbgaAGQgWAEgWgFIACASQABAfgNAbIgOAXQgIAOgEAJQgJAVAAArQAAAugGATQgKAigeAXQgdAWgiAAIgDgBg");
	var mask_2_graphics_1212 = new cjs.Graphics().p("AriIMQgfgKgPgaIAAAAQgQgaAEggIAAAAQAFggAWgVIAAAAQAHgHAIgFIAAAAQARgKAWgBIAAAAQgWABgRAKIAAAAQgIgFgIgGIAAAAQgdgXgJgjIAAAAQgEgSAAgXIAAAAQgBgbABgiIAAAAQABgjACgMIAAAAQAFgZAIgUIAAAAQASg5AbghIAAAAQAlgtAvgFIAAAAQASgCAQADIAAAAQgEgWAEgWIAAAAQAFgbAQgXIAAAAQAQgXAYgNIAAAAIARgJIAAAAIAQgLIAAAAQAHgHAIgLIAAAAIAMgUIAAAAQAQgZAgghIAAAAQA1g3ArgRIAAAAQAhgOArAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQAMgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAYABASAFIAAAAIAQgEIAAAAQBCgPAqAGIAAAAQAdAEAXANIAAAAQAaAOAOAWIAAAAIAHALIAAAAQAhgpAhgTIAAAAQAsgaArAIIAAAAQArAIAZApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgXAVgHIAAAAIAcgHIAAAAIAcgHIAAAAIAvgQIAAAAQAZgGAaADIAAAAQAbAEAVANIAAAAQAWANAOAWIAAAAQAPAWACAaIAAAAQACAbgMAcIAAAAQgNAegTAOIAAAAQgKAHgQAFIAAAAIgbAJIAAAAIg1AZIAAAAQgnATgnAPIAAAAQgiALgWABIAAAAQgTASgbAQIAAAAQhFArgzgFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgWgRgKgcIAAAAIgBgCIAAAAQgTAOgbAJIAAAAQgSAFgiAGIAAAAQguAJgfgCIAAAAQgXgBgUgGIAAAAIgbABIAAAAQgxABgUAGIAAAAQgOAEgcANIAAAAQgbAOgPAEIAAAAQgjALglgMIAAAAIgFgCIAAAAIgBABIAAAAQgMAHgOASIAAAAIgdArIAAAAQgRAagNAOIAAAAQgWAXgnAZIAAAAQgoAbgcAFIAAAAQgVAEgWgFIAAAAIACASIAAAAQABAggOAbIAAAAIgNAWIAAAAQgJAOgDAJIAAAAQgJAWAAAqIAAAAQgBAvgFATIAAAAQgKAigfAWIAAAAQgJAHgJAFIAAAAIgBgBIAAAAIgBgBIAAAAIABABIAAAAIABABIAAAAQAYARAJAfIAAAAQAJAfgMAcIAAAAQgPAkglANIAAAAQgNAFgOAAIAAAAQgQAAgQgGgAqTFvIgCAAIAAAAIACAAgAqWFuIgDgCIAAAAIADACgArKFiIAHgBIAAAAIgHABgArCFhIgBAAIAAAAIABAAg");
	var mask_2_graphics_1213 = new cjs.Graphics().p("Ai0WfQgdgCgbgRQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegXgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARAEQgFgXAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAgghQA1g3AqgRQAigOAqAAQAXAAAUAEIAhgOQAlgPAUgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGAMQAhgqAigTQAsgaArAIQAqAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIADgQQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUASgbAQQhEArg0gFQgVAPgUAFQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYAAgUgHIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgFgCIgCABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgaAFQgWAFgWgFIACARQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAWQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgCAegQAYQgQAZgbANQgYAMgaAAIgGAAg");
	var mask_2_graphics_1214 = new cjs.Graphics().p("Ap0LKQgfgKgPgaIAAAAQgQgaAEggIAAAAIACgIIAAAAQgEgPACgRIAAAAIAAAAQAFggAWgVIAAAAQAWgVAggCIAAAAIADgBIAAAAIgDABIAAAAQggACgWAVIAAAAQgWAVgFAgIAAAAIAAAAQgVgFgVgMIAAAAQgZgQgTgaIAAAAQgfgugHhDIAAAAQgCgaAAgiIAAAAIAAg9IAAAAQAAgrAFgSIAAAAQAIggAbgWIAAAAIAGgFIAAAAIgEgDIAAAAQgdgXgJgjIAAAAQgEgSAAgXIAAAAQgBgbABgiIAAAAQABgiACgMIAAAAQAFgZAIgUIAAAAQASg5AbghIAAAAQAlguAvgFIAAAAQASgCAQADIAAAAQgEgWAEgWIAAAAQAFgbAQgXIAAAAQAQgXAYgNIAAAAIARgJIAAAAIAQgLIAAAAQAHgHAIgLIAAAAIAMgUIAAAAQAQgZAgghIAAAAQA1g3ArgRIAAAAQAhgOArAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQAMgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAYABASAFIAAAAIAQgEIAAAAQBCgPAqAGIAAAAQAdAEAXANIAAAAQAaAOAOAWIAAAAIAHALIAAAAQAhgpAhgTIAAAAQAsgaArAIIAAAAQArAIAZApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgXAVgHIAAAAIAcgHIAAAAIAcgHIAAAAIAvgQIAAAAQAZgGAaADIAAAAQAbAEAVANIAAAAQAWANAOAWIAAAAQAPAWACAaIAAAAQACAbgMAcIAAAAQgNAegTAOIAAAAQgKAHgQAFIAAAAIgbAJIAAAAIg1AZIAAAAQgnATgnAPIAAAAQgiALgWABIAAAAQgTASgbAQIAAAAQhFArgzgFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgWgRgKgcIAAAAIgBgCIAAAAQgTAOgbAJIAAAAQgSAFgiAGIAAAAQguAJgfgCIAAAAQgXgBgUgGIAAAAIgbABIAAAAQgxABgUAGIAAAAQgOAEgcANIAAAAQgbAOgPAEIAAAAQgjALglgMIAAAAIgFgCIAAAAIgBABIAAAAQgMAHgOASIAAAAIgdArIAAAAQgRAagNAOIAAAAQgWAXgnAaIAAAAQgoAbgcAFIAAAAQgVAEgWgFIAAAAIACASIAAAAQABAggOAbIAAAAIgNAWIAAAAQgJAOgDAJIAAAAQgJAVAAAqIAAAAQgBAvgFATIAAAAQgKAigfAWIAAAAQAWAQALAXIAAAAQAMAYACAjIAAAAQABALgCAzIAAAAQgBAnAJAVIAAAAQAFAMAOAXIAAAAQANAagCAeIAAAAQgBARgFAQIAAAAIgCgBIAAAAIACABIAAAAIANAHIAAAAQAZARAJAgIAAAAQAHAYgGAWIAAAAQAHAbgLAaIAAAAQgPAkglANIAAAAQgNAFgOAAIAAAAQgQAAgQgGgAo0H+IAAAAIAAAAIAAAAgApZH3IAEAAIAAAAIgEAAgApUH3IgBAAIAAAAIABAAg");
	var mask_2_graphics_1215 = new cjs.Graphics().p("AAQYqQgzgPgtgfQgtgfghgsQgdgpgJgkQgEgUAAgdQAAgYAEgSQgVgEgTgNQgagQgSgZQgfgugHhEQgDgZAAgjIAAg8QAAgsAFgSQAJgfAagXIAGgEIgDgDQgegYgIgiQgEgSAAgXQgCgcABgiQABgiADgNQAFgYAHgVQATg4AagiQAmgtAvgGQARgCARAEQgFgWAEgXQAFgbAQgWQARgXAXgOIARgJIAQgLQAIgGAIgMIAMgUQAPgYAggiQA1g3AqgRQAigOAqAAQAXAAAUAFIAhgPQAlgPAUgDQANgCARAAIAeAAIA5AAQAYABASAFIARgFQBCgPAqAGQAcAEAYANQAZAOAPAXIAGALQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAAAIABgQIADgQQAkgWAWgIIAbgHIAcgHIAvgOQAagGAZADQAbADAVAMQAXAOAOAWQAPAWACAZQABAbgLAdQgNAdgUAOQgJAHgQAGIgcAJIg0AYQgnATgoAPQgiAMgVABQgUARgbARQhEAqg0gEQgVAOgUAGQgbAIgcgGQgdgFgVgSQgVgSgLgbIgBgDQgSAPgcAIQgSAGghAGQgvAIgfgBQgYgBgUgHIgaACQgxABgUAFQgPAEgbAOQgcAOgOAEQgjAKglgMIgFgBIgCAAQgLAHgPATIgcAqQgRAagOAPQgVAXgnAZQgpAbgaAGQgWAEgWgFIACASQABAfgNAbIgOAXQgIAOgEAJQgJAVAAArQAAAugGATQgKAigeAXQAVAPAMAYQALAYACAiQABALgBAzQgBAnAIAWQAGAMAOAWQANAagCAeQgBAMgDALQAXAGATAPQAdAYAJAiQAGAcACAEQAKAUAcAMIAYAJIAYAJQAhAPATAgQATAggCAkQgDAjgZAdQgZAcgjAHQgKACgLAAQgXAAgcgJg");
	var mask_2_graphics_1216 = new cjs.Graphics().p("AkqNHQgbgJgQgWIAAAAQgcgKgPgZIAAAAQgHgMgDgMIAAAAIgIABIAAAAQggAGgogMIAAAAQg0gPgtgfIAAAAQgugggggrIAAAAQgegpgIglIAAAAQgFgUAAgcIAAAAQAAgYAFgSIAAAAQgVgFgUgMIAAAAQgZgQgTgaIAAAAQgfgugHhDIAAAAQgCgaAAgiIAAAAIAAg9IAAAAQAAgrAFgSIAAAAQAIggAbgWIAAAAIAGgFIAAAAIgEgDIAAAAQgdgXgJgiIAAAAQgEgSAAgXIAAAAQgBgbABgiIAAAAQABgjACgMIAAAAQAFgZAIgUIAAAAQASg5AbghIAAAAQAlguAvgFIAAAAQASgCAQAEIAAAAQgEgXAEgWIAAAAQAFgbAQgXIAAAAQAQgXAYgNIAAAAIARgJIAAAAIAQgLIAAAAQAHgHAIgLIAAAAIAMgUIAAAAQAQgZAgghIAAAAQA1g3ArgRIAAAAQAhgOArAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQAMgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAYABASAFIAAAAIAQgEIAAAAQBCgPAqAGIAAAAQAdAEAXANIAAAAQAaAOAOAWIAAAAIAHAMIAAAAQAhgqAhgTIAAAAQAsgaArAIIAAAAQArAIAZApIAAAAIADAGIAAAAIAHgIIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgXAVgHIAAAAIAcgHIAAAAIAcgHIAAAAIAvgQIAAAAQAZgGAaADIAAAAQAbAEAVANIAAAAQAWANAOAWIAAAAQAPAWACAaIAAAAQACAbgMAcIAAAAQgNAegTAOIAAAAQgKAHgQAFIAAAAIgbAJIAAAAIg1AZIAAAAQgnATgnAPIAAAAQgiALgWABIAAAAQgTASgbAQIAAAAQhFArgzgFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgWgRgKgcIAAAAIgBgCIAAAAQgTAOgbAJIAAAAQgSAFgiAGIAAAAQguAJgfgCIAAAAQgXgBgUgGIAAAAIgbABIAAAAQgxABgUAGIAAAAQgOAEgcANIAAAAQgbAOgPAEIAAAAQgjALglgMIAAAAIgFgCIAAAAIgBABIAAAAQgMAHgOASIAAAAIgdArIAAAAQgRAagNAOIAAAAQgWAXgnAaIAAAAQgoAbgcAFIAAAAQgVAEgWgEIAAAAIACARIAAAAQABAggOAbIAAAAIgNAWIAAAAQgJAOgDAJIAAAAQgJAWAAAqIAAAAQgBAvgFATIAAAAQgKAhgfAWIAAAAQAWAQALAXIAAAAQAMAYACAjIAAAAQABALgCAzIAAAAQgBAnAJAVIAAAAQAFAMAOAXIAAAAQANAagCAeIAAAAQAAAMgDALIAAAAQAWAFAUAQIAAAAQAdAXAJAjIAAAAQAHAcACAEIAAAAQAKAUAcAMIAAAAIAYAIIAAAAIAXAJIAAAAQAhAPATAgIAAAAQAQAbACAdIAAAAIgCAAIAAAAQggADgWAUIAAAAQgWAVgEAgIAAAAIgBAOIAAAAIABgOIAAAAQAEggAWgVIAAAAQAWgUAggDIAAAAIACAAIAAAAQAfgDAYARIAAAAQAMAIAJANIAAAAQAKADAJAGIAAAAQAZARAJAgIAAAAQAKAegMAcIAAAAQgHASgOANIAAAAQgOANgRAGIAAAAQgOAFgOAAIAAAAQgPAAgQgGg");
	var mask_2_graphics_1217 = new cjs.Graphics().p("AFQZqQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgTgHgVQgXAAgcgIQgzgPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgZAEgSQgVgEgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegXgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARADQgFgWAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAgghQA1g3AqgRQAigOAqAAQAXAAAUAEIAhgOQAlgPAUgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGALQAhgpAigTQAsgaArAIQAqAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIADgPQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAVACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUARgbARQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgFgCIgCABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgaAFQgWAEgWgFIACASQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAWQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBALgDAMQAXAFATAQQAdAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAgAGAUAJQAfAQASAfQASAggCAiQgCAjgZAcQgYAcgiAHQgKACgOAAQgSAAgZgEg");
	var mask_2_graphics_1218 = new cjs.Graphics().p("AgXNaQgTgLgLgRIAAAAQgQAKgSAEIAAAAQgZAGgqgIIAAAAQgmgGglgMIAAAAQgugMgKgCIAAAAQgngCgTgEIAAAAQgigIgYgdIAAAAQgQgSgGgWIAAAAQgYAAgbgIIAAAAQg0gPgtgfIAAAAQgugggggrIAAAAQgegpgIglIAAAAQgFgUAAgcIAAAAQAAgZAFgSIAAAAQgVgEgUgMIAAAAQgZgQgTgaIAAAAQgfgugHhDIAAAAQgCgaAAgiIAAAAIAAg9IAAAAQAAgrAFgSIAAAAQAIggAbgWIAAAAIAGgFIAAAAIgEgDIAAAAQgdgWgJgjIAAAAQgEgSAAgXIAAAAQgBgbABgiIAAAAQABgjACgMIAAAAQAFgZAIgUIAAAAQASg5AbghIAAAAQAlguAvgFIAAAAQASgCAQADIAAAAQgEgWAEgWIAAAAQAFgbAQgXIAAAAQAQgXAYgNIAAAAIARgJIAAAAIAQgLIAAAAQAHgHAIgLIAAAAIAMgUIAAAAQAQgZAgghIAAAAQA1g3ArgRIAAAAQAhgOArAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQAMgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAYABASAFIAAAAIAQgEIAAAAQBCgPAqAGIAAAAQAdAEAXANIAAAAQAaAOAOAWIAAAAIAHALIAAAAQAhgpAhgTIAAAAQAsgaArAIIAAAAQArAIAZApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgXAVgHIAAAAIAcgHIAAAAIAcgHIAAAAIAvgQIAAAAQAZgGAaADIAAAAQAbAEAVANIAAAAQAWANAOAWIAAAAQAPAWACAaIAAAAQACAbgMAcIAAAAQgNAegTAOIAAAAQgKAHgQAFIAAAAIgbAJIAAAAIg1AZIAAAAQgnATgnAPIAAAAQgiALgWABIAAAAQgTASgbAQIAAAAQhFArgzgFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgWgRgKgcIAAAAIgBgCIAAAAQgTAOgbAJIAAAAQgSAFgiAGIAAAAQguAJgfgCIAAAAQgXgBgUgGIAAAAIgbABIAAAAQgxABgUAGIAAAAQgOAEgcANIAAAAQgbAOgPAEIAAAAQgjALglgMIAAAAIgFgCIAAAAIgBABIAAAAQgMAHgOASIAAAAIgdArIAAAAQgRAagNAOIAAAAQgWAXgnAaIAAAAQgoAbgcAFIAAAAQgVAEgWgFIAAAAIACASIAAAAQABAggOAbIAAAAIgNAWIAAAAQgJAOgDAJIAAAAQgJAWAAAqIAAAAQgBAvgFATIAAAAQgKAigfAVIAAAAQAWAQALAXIAAAAQAMAYACAjIAAAAQABALgCAzIAAAAQgBAnAJAVIAAAAQAFAMAOAXIAAAAQANAagCAeIAAAAQAAAMgDALIAAAAQAWAFAUAQIAAAAQAdAXAJAjIAAAAQAHAcACAEIAAAAQAKAUAcAMIAAAAIAYAIIAAAAIAXAJIAAAAQAhAPATAgIAAAAQAJAPAFAPIAAAAIAFAAIAAAAQAtgEAiAIIAAAAQALACAUAGIAAAAIAeAIIAAAAIA2AKIAAAAQAgAGATAJIAAAAQAfAQASAfIAAAAIAEAHIAAAAQgeAVgNAaIAAAAQgKAVAAAZIAAAAQAAgZAKgVIAAAAQANgaAegVIAAAAIAOgKIAAAAQAtgcAoAFIAAAAQATADAQALIAAAAQARALAKAPIAAAAQAVAjgKAmIAAAAQgNA2hHAiIAAAAQgdAOgXABIAAAAIgEAAIAAAAQgUAAgUgMg");
	var mask_2_graphics_1219 = new cjs.Graphics().p("AIpZuQglgHgQgGQgdgJgSgPQgVAUgdAGQgYAFgrgHQgmgHglgLQgugNgKgBQgngDgTgEQghgHgYgdQgQgTgHgVQgXAAgcgIQgzgPgtgfQgtggghgsQgdgogJglQgEgUAAgdQAAgYAEgSQgVgEgTgMQgagRgSgZQgfgugHhEQgDgZAAgiIAAg9QAAgrAFgTQAJgfAagXIAGgEIgDgDQgegYgIgiQgEgSAAgXQgCgcABghQABgjADgNQAFgYAHgVQATg4AagiQAmgtAvgFQARgDARAEQgFgWAEgWQAFgbAQgXQARgXAXgOIARgJIAQgLQAIgGAIgMIAMgTQAPgZAggiQA1g2AqgSQAigOAqABQAXgBAUAFIAhgOQAlgPAUgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgQAqAHQAcAEAYANQAZANAPAXIAGALQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgLQACgGAAgKIAAgBIABgQIADgPQAkgWAWgHIAbgIIAcgHIAvgPQAagGAZADQAbADAVANQAXAOAOAWQAPAWACAYQABAbgLAdQgNAdgUAOQgJAIgQAFIgcAJIg0AYQgnAUgoAOQgiAMgVABQgUARgbARQhEAqg0gEQgVAOgUAGQgbAIgcgGQgdgFgVgSQgVgRgLgcIgBgDQgSAPgcAJQgSAFghAGQgvAIgfgBQgYgBgUgHIgaACQgxABgUAGQgPADgbAOQgcAOgOAEQgjALglgMIgFgCIgCABQgLAHgPASIgcAqQgRAagOAPQgVAXgnAZQgpAcgaAFQgWAEgWgFIACASQABAfgNAbIgOAXQgIAOgEAJQgJAWAAAqQAAAugGATQgKAjgeAWQAVAQAMAXQALAYACAjQABAKgBAzQgBAnAIAWQAGAMAOAWQANAbgCAdQgBAMgDAMQAXAFATAPQAdAYAJAjQAGAcACADQAKAVAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGgBQAsgDAjAIQALACATAFIAfAIIA1AKQAgAHAUAJQARAIANAOIAJgHQAdgUAsgBQAegBAyAIQArAHAVAIQAiALAUAWQARARAHAYQAHAYgEAYQgEAXgPAVQgOAUgVAMQgfARgrABQgdAAgygKg");
	var mask_2_graphics_1220 = new cjs.Graphics().p("AA9NaQgkgHgRgGIAAAAQgbgJgTgQIAAAAQgVAVgcAGIAAAAQgZAFgqgHIAAAAQgmgHglgLIAAAAQgugNgKgBIAAAAQgngDgTgEIAAAAQgigIgYgcIAAAAQgQgTgGgVIAAAAQgYAAgbgJIAAAAQg0gPgtgfIAAAAQgugfgggsIAAAAQgegpgIgkIAAAAQgFgUAAgdIAAAAQAAgYAFgSIAAAAQgVgEgUgNIAAAAQgZgQgTgZIAAAAQgfgugHhEIAAAAQgCgZAAgjIAAAAIAAg8IAAAAQAAgsAFgSIAAAAQAIgfAbgXIAAAAIAGgFIAAAAIgEgCIAAAAQgdgXgJgiIAAAAQgEgSAAgXIAAAAQgBgcABgiIAAAAQABgiACgNIAAAAQAFgYAIgVIAAAAQASg4AbgiIAAAAQAlgtAvgGIAAAAQASgCAQAEIAAAAQgEgWAEgXIAAAAQAFgbAQgWIAAAAQAQgXAYgOIAAAAIARgJIAAAAIAQgLIAAAAQAHgGAIgMIAAAAIAMgUIAAAAQAQgYAggiIAAAAQA1g3ArgRIAAAAQAhgOArAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQAMgCARAAIAAAAIAeAAIAAAAIA5AAIAAAAQAYAAASAFIAAAAIAQgEIAAAAQBCgPAqAGIAAAAQAdAEAXANIAAAAQAaAOAOAXIAAAAIAHALIAAAAQAhgpAhgUIAAAAQAsgaArAJIAAAAQArAIAZApIAAAAIADAFIAAAAIAHgIIAAAAIAYgUIAAAAQAOgLAEgMIAAAAQACgGAAgKIAAAAIAAgBIAAgPIAAAAIADgQIAAAAQAlgWAVgIIAAAAIAcgHIAAAAIAcgHIAAAAIAvgPIAAAAQAZgGAaADIAAAAQAbADAVANIAAAAQAWAOAOAWIAAAAQAPAWACAZIAAAAQACAbgMAdIAAAAQgNAdgTAOIAAAAQgKAHgQAGIAAAAIgbAJIAAAAIg1AYIAAAAQgnATgnAPIAAAAQgiAMgWABIAAAAQgTARgbARIAAAAQhFAqgzgFIAAAAQgVAPgUAGIAAAAQgbAIgcgGIAAAAQgdgFgVgSIAAAAQgWgSgKgbIAAAAIgBgDIAAAAQgTAPgbAIIAAAAQgSAGgiAGIAAAAQguAIgfgBIAAAAQgXgBgUgHIAAAAIgbACIAAAAQgxABgUAFIAAAAQgOAEgcAOIAAAAQgbAOgPAEIAAAAQgjAKglgMIAAAAIgFgCIAAAAIgBABIAAAAQgMAHgOATIAAAAIgdAqIAAAAQgRAagNAPIAAAAQgWAXgnAZIAAAAQgoAbgcAGIAAAAQgVAEgWgFIAAAAIACASIAAAAQABAfgOAbIAAAAIgNAXIAAAAQgJAOgDAJIAAAAQgJAVAAArIAAAAQgBAugFATIAAAAQgKAigfAWIAAAAQAWAPALAYIAAAAQAMAYACAiIAAAAQABALgCAzIAAAAQgBAnAJAWIAAAAQAFAMAOAWIAAAAQANAagCAeIAAAAQAAAMgDALIAAAAQAWAGAUAPIAAAAQAdAYAJAiIAAAAQAHAcACAEIAAAAQAKAUAcAMIAAAAIAYAJIAAAAIAXAJIAAAAQAhAPATAgIAAAAQAJAOAFAQIAAAAIAFgBIAAAAQAtgDAiAHIAAAAQALACAUAGIAAAAIAeAIIAAAAIA2AKIAAAAQAgAGATAKIAAAAQARAIANANIAAAAIAJgGIAAAAQAdgUAsgBIAAAAQAdgBAzAIIAAAAQAqAHAVAIIAAAAQASAGANAIIAAAAQgKAFgJAIIAAAAQgWAVgEAgIAAAAIgBANIAAAAIABgNIAAAAQAEggAWgVIAAAAQAJgIAKgFIAAAAQANgHAPgCIAAAAQARgJAUgCIAAAAQAhgCAYARIAAAAQAQAKAJARIAAAAIAFADIAAAAQAZARAJAfIAAAAQAJAfgLAcIAAAAQgPAkglAOIAAAAQgdAKgegLIAAAAQgQgFgLgKIAAAAQgMABgMgDIAAAAQgLAMgPAIIAAAAQgeARgsAAIAAAAQgdAAgygJg");
	var mask_2_graphics_1221 = new cjs.Graphics().p("AIpZuQglgHgQgGQgdgJgSgPQgVAUgdAGQgYAFgrgHQgmgHglgLQgugNgKgBQgngDgTgEQghgHgYgdQgQgTgHgVQgXAAgcgIQgzgPgtgfQgtggghgsQgdgogJglQgEgUAAgdQAAgYAEgSQgVgEgTgMQgagRgSgZQgfgugHhEQgDgZAAgiIAAg9QAAgrAFgTQAJgfAagXIAGgEIgDgDQgegYgIgiQgEgSAAgXQgCgcABghQABgjADgNQAFgYAHgVQATg4AagiQAmgtAvgFQARgDARAEQgFgWAEgWQAFgbAQgXQARgXAXgOIARgJIAQgLQAIgGAIgMIAMgTQAPgZAggiQA1g2AqgSQAigOAqABQAXgBAUAFIAhgOQAlgPAUgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgQAqAHQAcAEAYANQAZANAPAXIAGALQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgLQACgGAAgKIAAgBIABgQIADgPQAkgWAWgHIAbgIIAcgHIAvgPQAagGAZADQAbADAVANQAXAOAOAWQAPAWACAYQABAbgLAdQgNAdgUAOQgJAIgQAFIgcAJIg0AYQgnAUgoAOQgiAMgVABQgUARgbARQhEAqg0gEQgVAOgUAGQgbAIgcgGQgdgFgVgSQgVgRgLgcIgBgDQgSAPgcAJQgSAFghAGQgvAIgfgBQgYgBgUgHIgaACQgxABgUAGQgPADgbAOQgcAOgOAEQgjALglgMIgFgCIgCABQgLAHgPASIgcAqQgRAagOAPQgVAXgnAZQgpAcgaAFQgWAEgWgFIACASQABAfgNAbIgOAXQgIAOgEAJQgJAWAAAqQAAAugGATQgKAjgeAWQAVAQAMAXQALAYACAjQABAKgBAzQgBAnAIAWQAGAMAOAWQANAbgCAdQgBAMgDAMQAXAFATAPQAdAYAJAjQAGAcACADQAKAVAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGgBQAsgDAjAIQALACATAFIAfAIIA1AKQAgAHAUAJQARAIANAOIAJgHQAdgUAsgBQAegBAyAIQArAHAVAIQAiALAUAWIAIAJIACgDQANgUAUgNQAbgRAngDQAbgCAtAFQAhADAQAFQAaAGASAMQAWANAOAYQANAWABAaQABAagLAYQgMAYgUAQQgaASgmAGQgcACgrgDQgogDgZgIQgkgKgVgVQgGgGgFgHIgGAIQgOAUgVAMQgfARgrABQgdAAgygKg");
	var mask_2_graphics_1222 = new cjs.Graphics().p("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");
	var mask_2_graphics_1223 = new cjs.Graphics().p("AQnZ6QgpgDgbgSIgFgDQgVAMgeAEQgbADgrgEQgogDgagHQgjgLgVgUQgHgHgFgHIgFAIQgPAVgVAMQgeARgsAAQgdAAgygKQgkgHgRgFQgcgKgTgPQgVAUgcAGQgZAGgqgIQgmgGglgMQgugMgKgCQgngCgTgEQgigIgYgdQgQgSgGgWQgYAAgbgIQgzgPgtgfQgugggggrQgegpgIglQgFgUAAgcQAAgYAEgSQgUgFgUgMQgZgQgTgaQgfgugHhDQgCgaAAgiIAAg9QAAgrAFgSQAIggAbgWIAGgFIgEgDQgdgXgJgjQgEgSAAgXQgBgbABgiQABgjACgMQAFgZAIgUQASg5AbghQAlguAvgFQARgCARAEQgFgXAFgWQAFgbAQgXQAQgXAYgNIARgJIAQgLQAHgHAIgLIAMgUQAQgZAfghQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAdAEAXANQAaAOAOAWIAGAMQAigqAhgTQAsgaArAIQArAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgOIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAZgGAaADQAbAEAVANQAWANAOAWQAPAWACAZQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTASgbAQQhFArgzgFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgWgRgKgcIgBgCQgTAOgbAJQgSAFgiAGQguAJgfgCQgZgBgUgGIgaABQgxABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgdArQgRAagNAOQgWAXgnAaQgoAbgbAFQgWAEgVgEIACARQABAggOAbIgNAWQgJAOgDAJQgJAWAAAqQgBAvgFATQgKAigfAWQAWAQALAXQAMAYACAjQABALgCAzQgBAnAJAVQAFAMAOAXQANAagCAeQAAAMgDALQAWAFAUAQQAdAXAIAjQAHAcACAEQAKAUAcAMIAYAIIAXAJQAhAPATAgQAJAPAEAPIAGAAQAtgEAiAIQALACAUAGIAeAIIA2AKQAgAGATAJQARAJANANIAJgHQAdgUAtgBQAdgBAzAIQAqAIAVAHQAjAMATAVIAIAKIACgDQANgVAUgNQAbgRAogDQAbgCAtAFQAhAEAPAEQAbAGASAMIAFAEIAIgEQAVgKAhgDIA4gDQAVgBArgEQAlgCAZAJQAbAKAUAYQATAXAFAdQAEAdgLAcQgMAdgXARQgZATgoAHQgWAEgzACIgwABIgZgBg");
	var mask_2_graphics_1224 = new cjs.Graphics().p("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");
	var mask_2_graphics_1227 = new cjs.Graphics().p("AOPZ6QgpgDgbgSIgFgDQgWAMgdAEQgbADgsgEQgogDgZgHQgkgLgUgUQgHgHgFgHIgFAIQgPAVgVAMQgfARgrAAQgdAAgygKQgkgHgRgFQgdgKgSgPQgVAUgdAGQgYAGgqgIQgngGgkgMQgvgMgKgCQgngCgRgEQgigIgYgdQgQgSgGgWQgYAAgcgIQg0gPgsgfQgugggggrQgegpgIglQgFgUAAgcQAAgYAEgSQgUgFgUgMQgagQgSgaQgfgugHhDQgDgaABgiIAAg9QAAgrAEgSQAJggAagWIAHgFIgEgDQgegXgIgjQgEgSAAgXQgBgbABgiQAAgjADgMQAFgZAIgUQASg5AbghQAlguAvgFQARgCARAEQgFgXAFgWQAFgbAPgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAQgZAgghQA1g3AqgRQAigOAqAAQAWAAAUAEIAhgOQAmgPATgDQANgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGAMQAigqAhgTQAsgaArAIQAqAIAZApIAEAGIAGgIIAYgUQAPgMADgLQACgGAAgKIAAgBIABgOIADgQQAlgXAVgHIAbgHIAcgHIAwgQQAZgGAZADQAbAEAWANQAWANAOAWQAPAWACAZQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgoAPQghALgWABQgUASgbAQQhEArgzgFQgVAOgVAGQgbAIgbgFQgdgGgWgSQgVgRgKgcIgBgCQgTAOgbAJQgTAFghAGQguAJgggCQgYgBgUgGIgaABQgxABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgcArQgRAagOAOQgVAXgnAaQgoAbgcAFQgWAEgWgEIACARQACAggOAbIgNAWQgJAOgEAJQgIAWgBAqQAAAvgFATQgKAigfAWQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBAMgCALQAWAFAUAQQAdAXAJAjQAHAcACAEQAKAUAbAMIAZAIIAXAJQAhAPATAgQAIAPAEAPIAGAAQAsgEAjAIQALACATAGIAfAIIA2AKQAgAGATAJQARAJANANIAJgHQAdgUAtgBQAdgBAzAIQAqAIAVAHQAjAMATAVIAIAKIACgDQANgVAUgNQAbgRAngDQAcgCAsAFQAiAEAPAEQAbAGARAMIAGAEIAIgEQAVgKAhgDIA4gDQAVgBArgEQAlgCAZAJQARAGAOAMQARgSAXgIQAUgHAfgBIAzAAQAQgBAPgEQAKgDASgIQAdgKAeAHQAeAHAVAUQAWAUAIAeQAIAegIAcQgMAlggAcQgdAbgkAIQgWAGggAAIg2gBIgiABQgVAAgNgDQgbgFgUgSIgLAJQgaATgoAHQgVAEgzACIgwABIgZgBg");
	var mask_2_graphics_1228 = new cjs.Graphics().p("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");
	var mask_2_graphics_1229 = new cjs.Graphics().p("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");
	var mask_2_graphics_1230 = new cjs.Graphics().p("AEbNmQgogDgbgSIgFgDQgWAMgdAEQgcADgrgEQgogDgZgHQgjgLgVgUIgLgOIgGAIQgOAVgVAMQgfARgrAAQgdAAgygKQglgHgQgFQgdgKgSgPQgWAUgcAGQgYAGgrgIQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgSgHgWQgXAAgcgIQg0gPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgZAEgRQgVgFgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegWgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARAEQgFgXAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAhghQA1g3AqgRQAigOAqAAQAXAAAUAEIAhgOQAlgPAUgDQANgCARgBIAeABIA5gBQAXABATAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGAMQAhgqAigTQArgaArAIQAqAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIADgQQAkgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgVABQgUASgbAQQhEArg0gFQgVAOgUAGQgaAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgFgCIgCABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgWAEgWgEIACARQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAVQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBAMgDALQAXAFATAQQAeAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAgAGAUAJQARAJANANIAJgHQAdgUAsgBQAegBAyAIQArAIAVAHQAiAMAUAVIAIAKIACgDQANgVAUgNQAagRAngDQAbgCAtAFQAhAEAQAEQAaAGASAMIAGAEIAHgEQAWgKAggDIA5gDQAVgBArgEQAlgCAZAJQARAGAOAMQARgSAXgIQAUgHAegBIA0AAQAPgBAPgEQAKgDATgIQAcgKAfAHQAOADANAHIABgEQAMgaAWgPIAmgWQAOgIASgSIAegdQAhgcAkgGQAfgFAeAOQAdANASAaQARAaAAAhQABAggRAbQgIAOgfAdQguAugKAIQghAdggAKQgZAIgcgDQgcgCgWgNQgMAegcAYQgeAbgjAIQgWAGggAAIg2gBIgjABQgUAAgOgDQgagGgVgRIgKAJQgaATgoAHQgVAEgzACIgwABIgagBg");
	var mask_2_graphics_1231 = new cjs.Graphics().p("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");
	var mask_2_graphics_1232 = new cjs.Graphics().p("AKjZ6QgogDgbgSIgFgDQgWAMgdAEQgcADgrgEQgogDgZgHQgkgLgVgUQgGgHgGgHIgFAIQgOAVgVAMQgfARgrAAQgdAAgygKQglgHgQgFQgdgKgSgPQgWAUgcAGQgXAGgrgIQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgSgHgWQgXAAgcgIQg0gPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgYAEgSQgVgFgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegXgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARAEQgFgXAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAhghQA1g3AqgRQAigOAqAAQAXAAATAEIAigOQAlgPAUgDQANgCARgBIAeABIA4gBQAXABASAFIASgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGAMQAhgqAigTQAsgaArAIQAqAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgOIACgQQAlgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAZQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgWABQgTASgbAQQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgwABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgGgCIgBABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgWAEgWgEIACARQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAWQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBAMgDALQAXAFATAQQAeAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAIAPAFAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAfAGAUAJQARAJANANIAJgHQAdgUAsgBQAegBAyAIQArAIAVAHQAiAMAUAVIAIAKIACgDQANgVAUgNQAbgRAngDQAbgCAtAFQAhAEAQAEQAaAGASAMIAGAEIAHgEQAWgKAggDIA5gDQAVgBArgEQAlgCAZAJQARAGANAMQASgSAXgIQAUgHAegBIA0AAQAPgBAPgEQAKgDATgIQAcgKAfAHQAOADAMAHIACgEQAMgaAWgPIAmgWQAOgIASgSIAegdQAhgcAkgGQAbgEAbAKIgBgOQAAgbALgXIAOgWQAKgPAEgIQAEgIAGgRIAJgZQANgaAYgSQAZgRAdgEQAcgDAcAMQAcAMARAYQAXAggCAuQgBAogTAqQgZA1gkAdQgtAjgxgGQgNgBgMgEIABAOQABAggRAbQgIAOgfAdQguAugKAIQghAdggAKQgZAIgcgDQgcgCgWgNQgNAegbAYQgeAbgjAIQgWAGggAAIg2gBIgjABQgUAAgOgDQgagFgVgSIgKAJQgaATgoAHQgVAEgzACIgwABIgagBg");
	var mask_2_graphics_1233 = new cjs.Graphics().p("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");
	var mask_2_graphics_1234 = new cjs.Graphics().p("AKNZ6QgpgDgbgSIgFgDQgVAMgeAEQgbADgrgEQgogDgagHQgjgLgVgUQgHgHgFgHIgFAIQgPAVgVAMQgeARgsAAQgdAAgygKQgkgHgRgFQgcgKgTgPQgVAUgbAGQgZAGgqgIQgmgGglgMQgugMgKgCQgngCgTgEQgigIgYgdQgQgSgGgWQgYAAgbgIQg0gPgtgfQgugggggrQgegpgIglQgFgUAAgcQAAgYAFgSQgVgFgUgMQgZgQgTgaQgfgugHhDQgCgaAAgiIAAg9QAAgrAFgSQAIggAbgWIAGgFIgEgDQgdgXgJgjQgEgSAAgXQgBgbABgiQABgjACgMQAFgZAIgUQASg5AbghQAlguAvgFQASgCAQAEQgEgXAEgWQAFgbAQgXQAQgXAYgNIARgJIAQgLQAHgHAIgLIAMgUQAQgZAgghQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARgBIAeABIA4gBQAYABASAFIARgEQBCgPAqAGQAdAEAXANQAaAOAOAWIAGAMQAigqAhgTQAsgaArAIQArAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgOIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAZgGAaADQAbAEAVANQAWANAOAWQAPAWACAZQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTASgbAQQhFArgzgFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgWgRgKgcIgBgCQgTAOgbAJQgSAFgiAGQguAJgfgCQgZgBgTgGIgbABQgwABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgdArQgRAagNAOQgWAXgnAaQgoAbgcAFQgVAEgWgEIACARQABAggOAbIgNAWQgJAOgDAJQgJAWAAAqQgBAvgFATQgKAigfAWQAWAQALAXQAMAYACAjQABALgCAzQgBAnAJAVQAFAMAOAXQANAagCAeQAAAMgDALQAWAFAUAQQAdAXAJAjQAHAcACAEQAKAUAcAMIAYAIIAXAJQAhAPATAgQAJAPAFAPIAFAAQAtgEAiAIQALACAUAGIAeAIIA2AKQAgAGASAJQARAJANANIAJgHQAdgUAtgBQAdgBAzAIQAqAIAVAHQAjAMATAVIAIAKIACgDQANgVAUgNQAbgRAogDQAbgCAtAFQAhAEAPAEQAbAGASAMIAFAEIAIgEQAVgKAhgDIA4gDQAVgBArgEQAlgCAZAJQARAGAOAMQARgSAXgIQAUgHAfgBIAzAAQAQgBAPgEQAKgDATgIQAcgKAeAHQAPADAMAHIACgEQALgaAWgPIAngWQANgIATgSIAegdQAggcAkgGQAcgEAbAKIgBgOQgBgbAMgXIAOgWQAKgPAEgIQAEgIAFgRIAKgZQAMgaAZgSQAQgLASgFQgJgIgGgKQgTgggDhBQgDg3AKgjQAOgyAkgXQAegUAmAGQAmAGAZAbQAXAYAIAnQAFAUAAAbIgCAvQgEAzgMAZQgNAZgYAQQgLAHgMAEQAGAGAGAIQAXAggCAuQgCAogTAqQgYA1gkAdQguAjgxgGQgNgBgLgEIABAOQAAAggQAbQgJAOgeAdQgvAugJAIQgiAdgfAKQgaAIgcgDQgbgCgXgNQgMAegcAYQgdAbgkAIQgVAGggAAIg2gBIgjABQgUAAgOgDQgbgFgUgSIgLAJQgZATgoAHQgWAEgzACIgwABIgZgBg");
	var mask_2_graphics_1235 = new cjs.Graphics().p("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");
	var mask_2_graphics_1236 = new cjs.Graphics().p("AKNZ6QgpgDgbgSIgFgDQgVAMgeAEQgbADgrgEQgogDgagHQgjgLgVgUQgHgHgFgHIgFAIQgPAVgVAMQgeARgsAAQgdAAgygKQgkgHgRgFQgcgKgTgPQgVAUgbAGQgZAGgqgIQgmgGglgMQgugMgKgCQgngCgTgEQgigIgYgdQgQgSgGgWQgYAAgbgIQg0gPgtgfQgugggggrQgegpgIglQgFgUAAgcQAAgYAFgSQgVgFgUgMQgZgQgTgaQgfgugHhDQgCgaAAgiIAAg9QAAgrAFgSQAIggAbgWIAGgFIgEgDQgdgXgJgjQgEgSAAgXQgBgbABgiQABgjACgMQAFgZAIgUQASg5AbghQAlguAvgFQASgCAQAEQgEgXAEgWQAFgbAQgXQAQgXAYgNIARgJIAQgLQAHgHAIgLIAMgUQAQgZAgghQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARgBIAeABIA4gBQAYABASAFIARgEQBCgPAqAGQAdAEAXANQAaAOAOAWIAGAMQAigqAhgTQAsgaArAIQArAIAZApIADAGIAHgIIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgOIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAZgGAaADQAbAEAVANQAWANAOAWQAPAWACAZQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTASgbAQQhFArgzgFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgWgRgKgcIgBgCQgTAOgbAJQgSAFgiAGQguAJgfgCQgZgBgTgGIgbABQgwABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgdArQgRAagNAOQgWAXgnAaQgoAbgcAFQgVAEgWgEIACARQABAggOAbIgNAWQgJAOgDAJQgJAWAAAqQgBAvgFATQgKAigfAWQAWAQALAXQAMAYACAjQABALgCAzQgBAnAJAVQAFAMAOAXQANAagCAeQAAAMgDALQAWAFAUAQQAdAXAJAjQAHAcACAEQAKAUAcAMIAYAIIAXAJQAhAPATAgQAJAPAFAPIAFAAQAtgEAiAIQALACAUAGIAeAIIA2AKQAgAGASAJQARAJANANIAJgHQAdgUAtgBQAdgBAzAIQAqAIAVAHQAjAMATAVIAIAKIACgDQANgVAUgNQAbgRAogDQAbgCAtAFQAhAEAPAEQAbAGASAMIAFAEIAIgEQAVgKAhgDIA4gDQAVgBArgEQAlgCAZAJQARAGAOAMQARgSAXgIQAUgHAfgBIAzAAQAQgBAPgEQAKgDATgIQAcgKAeAHQAPADAMAHIACgEQALgaAWgPIAngWQANgIATgSIAegdQAggcAkgGQAcgEAbAKIgBgOQgBgbAMgXIAOgWQAKgPAEgIQAEgIAFgRIAKgZQAMgaAZgSQAQgLASgFQgJgIgGgKQgTgggDhBQgDg3AKgjQANgwAigYQgOgHgMgMQgUgVgHgbQgDgJgCgVQgDgUgDgLIgKgWIgKgWQgNggAJgkQAIgkAagXQAbgXAlgFQAlgEAeARQA/AjARBoQAIAvgHAmQgHAtgcAbQgJAIgJAGQAQAIANAOQAXAYAIAnQAFAUAAAbIgCAvQgEAzgMAZQgNAZgYAQQgLAHgMAEQAGAGAGAIQAXAggCAuQgCAogTAqQgYA1gkAdQguAjgxgGQgNgBgLgEIABAOQAAAggQAbQgJAOgeAdQgvAugJAIQgiAdgfAKQgaAIgcgDQgbgCgXgNQgMAegcAYQgdAbgkAIQgVAGggAAIg2gBIgjABQgUAAgOgDQgbgFgUgSIgLAJQgZATgoAHQgWAEgzACIgwABIgZgBg");
	var mask_2_graphics_1237 = new cjs.Graphics().p("AChNmQgogDgbgSIAAAAIgFgDIAAAAQgWAMgdAEIAAAAQgcADgqgEIAAAAQgogDgZgHIAAAAQgkgLgVgUIAAAAQgGgHgGgHIAAAAIgFAIIAAAAQgOAVgVAMIAAAAQgfARgrAAIAAAAQgdAAgygKIAAAAQglgHgQgFIAAAAQgdgKgSgPIAAAAQgWAUgcAGIAAAAQgYAGgrgIIAAAAQgmgGglgMIAAAAQgugMgKgCIAAAAQgngCgTgEIAAAAQghgIgYgdIAAAAQgQgTgHgVIAAAAQgXAAgcgIIAAAAQg0gPgtgfIAAAAQgtggghgrIAAAAQgdgpgJglIAAAAQgEgUAAgcIAAAAQAAgZAEgSIAAAAQgVgEgTgMIAAAAQgagQgSgaIAAAAQgfgugHhDIAAAAQgDgaAAgiIAAAAIAAg9IAAAAQAAgrAFgSIAAAAQAJggAagWIAAAAIAGgFIAAAAIgDgDIAAAAQgegWgIgjIAAAAQgEgSAAgXIAAAAQgCgbABgiIAAAAQABgjADgMIAAAAQAFgZAHgUIAAAAQATg5AaghIAAAAQAmguAvgFIAAAAQARgCARADIAAAAQgFgWAEgWIAAAAQAFgbAQgXIAAAAQARgXAXgNIAAAAIARgJIAAAAIAQgLIAAAAQAIgHAIgLIAAAAIAMgUIAAAAQAPgZAhghIAAAAQA1g3AqgRIAAAAQAigOAqAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQANgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAXABASAFIAAAAIASgEIAAAAQBCgPAqAGIAAAAQAcAEAYANIAAAAQAZAOAPAWIAAAAIAGALIAAAAQAhgpAigTIAAAAQAsgaArAIIAAAAQAqAIAYApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIABgPIAAAAIACgQIAAAAQAlgXAWgHIAAAAIAbgHIAAAAIAcgHIAAAAIAvgQIAAAAQAagGAZADIAAAAQAbAEAVANIAAAAQAXANAOAWIAAAAQAPAWACAaIAAAAQABAbgLAcIAAAAQgNAegUAOIAAAAQgJAHgQAFIAAAAIgcAJIAAAAIg0AZIAAAAQgnATgoAPIAAAAQgiALgWABIAAAAQgTARgbARIAAAAQhDArg0gFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgVgRgLgcIAAAAIgBgCIAAAAQgSAOgcAJIAAAAQgSAFghAGIAAAAQgvAJgfgCIAAAAQgYgBgUgGIAAAAIgaABIAAAAQgxABgUAGIAAAAQgPAEgbANIAAAAQgcAOgOAEIAAAAQgjALglgMIAAAAIgGgCIAAAAIgBABIAAAAQgLAHgPASIAAAAIgcArIAAAAQgRAagOAOIAAAAQgVAXgnAaIAAAAQgpAbgbAFIAAAAQgWAEgWgFIAAAAIACASIAAAAQABAggNAbIAAAAIgOAWIAAAAQgIAOgEAJIAAAAQgJAWAAAqIAAAAQAAAvgGATIAAAAQgKAigeAVIAAAAQAVAQAMAXIAAAAQALAYACAjIAAAAQABALgBAzIAAAAQgBAnAIAVIAAAAQAGAMAOAXIAAAAQANAagCAeIAAAAQgBALgDAMIAAAAQAXAFATAQIAAAAQAeAXAJAjIAAAAQAGAcACAEIAAAAQAKAUAcAMIAAAAIAYAIIAAAAIAYAJIAAAAQAhAPATAgIAAAAQAJAPAEAPIAAAAIAGAAIAAAAQAsgEAjAIIAAAAQALACATAGIAAAAIAfAIIAAAAIA1AKIAAAAQAgAGAUAJIAAAAQARAJANANIAAAAIAJgHIAAAAQAdgUAsgBIAAAAQAegBAyAIIAAAAQArAIAVAHIAAAAQAiAMAUAVIAAAAIAIAJIAAAAIACgCIAAAAQANgVAUgNIAAAAQAbgRAngDIAAAAQAbgCAsAFIAAAAQAhAEAQAEIAAAAQAaAGASAMIAAAAIAGADIAAAAIAHgDIAAAAQAWgKAggDIAAAAIA5gDIAAAAQAVgBArgEIAAAAQAlgCAZAJIAAAAQARAGANAMIAAAAQASgSAXgIIAAAAQAUgHAegBIAAAAIA0AAIAAAAQAPgBAPgEIAAAAQAKgDATgIIAAAAQAcgKAfAHIAAAAQAOADAMAGIAAAAIACgDIAAAAQAMgaAWgPIAAAAIAmgWIAAAAQAOgIASgSIAAAAIAegdIAAAAQAhgcAkgGIAAAAQAbgEAbAKIAAAAIgBgOIAAAAQAAgbALgXIAAAAIAOgWIAAAAQAKgPAEgIIAAAAQAEgIAGgRIAAAAIAJgZIAAAAQANgaAYgSIAAAAQAQgLASgGIAAAAQgIgIgGgJIAAAAQgUgggDhBIAAAAQgCg3AJgjIAAAAQAOgxAigWIAAAAQgOgHgMgMIAAAAQgVgVgHgbIAAAAQgCgJgDgVIAAAAQgCgUgEgLIAAAAIgJgWIAAAAIgLgWIAAAAQgNggAJgkIAAAAQAGgYANgSIAAAAIANgCIAAAAQABALAIAJIAAAAQAHAKALADIAAAAQgLgDgHgKIAAAAQgIgJgBgLIAAAAIgNACIAAAAQgUADgMAAIAAAAQgcAAgLgRIAAAAQgNgVAUgeIAAAAQAPgWAcgUIAAAAQAggXAbAAIAAAAQAQABANALIAAAAQAOALABAQIAAAAQAngDASAKIAAAAQAOAHAGAPIAAAAQAGAQgIAMIAAAAIgFAFIAAAAQgIAGgPAFIAAAAQgYAHgHAHIAAAAIgIAMIAAAAIgJANIAAAAQgHAIgMADIAAAAIgKABIAAAAIAKgBIAAAAQAMgDAHgIIAAAAIAJgNIAAAAIAIgMIAAAAQAHgHAYgHIAAAAQAPgFAIgGIAAAAQA6AkAQBkIAAAAQAIAvgGAmIAAAAQgIAtgcAbIAAAAQgIAIgKAGIAAAAQAQAIANAOIAAAAQAXAXAJAnIAAAAQAEAUAAAbIAAAAIgCAvIAAAAQgEAzgMAZIAAAAQgMAZgZAQIAAAAQgLAHgMAEIAAAAQAHAGAFAIIAAAAQAXAggCAuIAAAAQgBAogTAqIAAAAQgZA1gkAdIAAAAQgtAjgxgGIAAAAQgNgBgMgFIAAAAIABAPIAAAAQABAggRAbIAAAAQgIAOgfAdIAAAAQguAugKAIIAAAAQghAdggAKIAAAAQgZAIgcgDIAAAAQgcgCgWgNIAAAAQgNAegbAYIAAAAQgeAbgjAIIAAAAQgWAGggAAIAAAAIg2gBIAAAAIgjABIAAAAQgUAAgOgDIAAAAQgagGgVgRIAAAAIgKAJIAAAAQgaATgoAHIAAAAQgVAEgzACIAAAAIgwABIAAAAIgagBgAQYkOIgBAAIAAAAIABAAgAQOkPIgBAAIAAAAIABAAg");
	var mask_2_graphics_1238 = new cjs.Graphics().p("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");
	var mask_2_graphics_1239 = new cjs.Graphics().p("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");
	var mask_2_graphics_1240 = new cjs.Graphics().p("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");
	var mask_2_graphics_1241 = new cjs.Graphics().p("AChNmQgogDgbgSIAAAAIgFgDIAAAAQgWAMgdAEIAAAAQgcADgqgEIAAAAQgogDgZgHIAAAAQgkgLgVgUIAAAAQgGgHgGgHIAAAAIgFAIIAAAAQgOAVgVAMIAAAAQgfARgrAAIAAAAQgdAAgygKIAAAAQglgHgQgFIAAAAQgdgKgSgPIAAAAQgWAUgcAGIAAAAQgYAGgrgIIAAAAQgmgGglgMIAAAAQgugMgKgCIAAAAQgngCgTgEIAAAAQghgIgYgdIAAAAQgQgTgHgVIAAAAQgXAAgcgIIAAAAQg0gPgtgfIAAAAQgtggghgrIAAAAQgdgpgJglIAAAAQgEgUAAgcIAAAAQAAgZAEgSIAAAAQgVgEgTgMIAAAAQgagQgSgaIAAAAQgfgugHhDIAAAAQgDgaAAgiIAAAAIAAg9IAAAAQAAgrAFgSIAAAAQAJggAagWIAAAAIAGgFIAAAAIgDgDIAAAAQgegWgIgjIAAAAQgEgSAAgXIAAAAQgCgbABgiIAAAAQABgjADgMIAAAAQAFgZAHgUIAAAAQATg5AaghIAAAAQAmguAvgFIAAAAQARgCARADIAAAAQgFgWAEgWIAAAAQAFgbAQgXIAAAAQARgXAXgNIAAAAIARgJIAAAAIAQgLIAAAAQAIgHAIgLIAAAAIAMgUIAAAAQAPgZAhghIAAAAQA1g3AqgRIAAAAQAigOAqAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQANgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAXABASAFIAAAAIASgEIAAAAQBCgPAqAGIAAAAQAcAEAYANIAAAAQAZAOAPAWIAAAAIAGALIAAAAQAhgpAigTIAAAAQAsgaArAIIAAAAQAqAIAYApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIABgPIAAAAIACgQIAAAAQAlgXAWgHIAAAAIAbgHIAAAAIAcgHIAAAAIAvgQIAAAAQAagGAZADIAAAAQAbAEAVANIAAAAQAXANAOAWIAAAAQAPAWACAaIAAAAQABAbgLAcIAAAAQgNAegUAOIAAAAQgJAHgQAFIAAAAIgcAJIAAAAIg0AZIAAAAQgnATgoAPIAAAAQgiALgWABIAAAAQgTARgbARIAAAAQhDArg0gFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgVgRgLgcIAAAAIgBgCIAAAAQgSAOgcAJIAAAAQgSAFghAGIAAAAQgvAJgfgCIAAAAQgYgBgUgGIAAAAIgaABIAAAAQgxABgUAGIAAAAQgPAEgbANIAAAAQgcAOgOAEIAAAAQgjALglgMIAAAAIgGgCIAAAAIgBABIAAAAQgLAHgPASIAAAAIgcArIAAAAQgRAagOAOIAAAAQgVAXgnAaIAAAAQgpAbgbAFIAAAAQgWAEgWgFIAAAAIACASIAAAAQABAggNAbIAAAAIgOAWIAAAAQgIAOgEAJIAAAAQgJAWAAAqIAAAAQAAAvgGATIAAAAQgKAigeAVIAAAAQAVAQAMAXIAAAAQALAYACAjIAAAAQABALgBAzIAAAAQgBAnAIAVIAAAAQAGAMAOAXIAAAAQANAagCAeIAAAAQgBALgDAMIAAAAQAXAFATAQIAAAAQAeAXAJAjIAAAAQAGAcACAEIAAAAQAKAUAcAMIAAAAIAYAIIAAAAIAYAJIAAAAQAhAPATAgIAAAAQAJAPAEAPIAAAAIAGAAIAAAAQAsgEAjAIIAAAAQALACATAGIAAAAIAfAIIAAAAIA1AKIAAAAQAgAGAUAJIAAAAQARAJANANIAAAAIAJgHIAAAAQAdgUAsgBIAAAAQAegBAyAIIAAAAQArAIAVAHIAAAAQAiAMAUAVIAAAAIAIAJIAAAAIACgCIAAAAQANgVAUgNIAAAAQAbgRAngDIAAAAQAbgCAsAFIAAAAQAhAEAQAEIAAAAQAaAGASAMIAAAAIAGADIAAAAIAHgDIAAAAQAWgKAggDIAAAAIA5gDIAAAAQAVgBArgEIAAAAQAlgCAZAJIAAAAQARAGANAMIAAAAQASgSAXgIIAAAAQAUgHAegBIAAAAIA0AAIAAAAQAPgBAPgEIAAAAQAKgDATgIIAAAAQAcgKAfAHIAAAAQAOADAMAGIAAAAIACgDIAAAAQAMgaAWgPIAAAAIAmgWIAAAAQAOgIASgSIAAAAIAegdIAAAAQAhgcAkgGIAAAAQAbgEAbAKIAAAAIgBgOIAAAAQAAgbALgXIAAAAIAOgWIAAAAQAKgPAEgIIAAAAQAEgIAGgRIAAAAIAJgZIAAAAQANgaAYgSIAAAAQAQgLASgGIAAAAQgIgIgGgJIAAAAQgUgggDhBIAAAAQgCg3AJgjIAAAAQAOgxAigWIAAAAQgOgHgMgMIAAAAQgVgVgHgbIAAAAQgCgJgDgVIAAAAQgCgUgEgLIAAAAIgJgWIAAAAIgLgWIAAAAQgNggAJgkIAAAAIAEgMIAAAAQgPACgQAAIAAAAQgzgCgzghIAAAAQg5gigYgwIAAAAQgOgbgCgdIAAAAIgBgPIAAAAIgIABIAAAAQgYAEgwgBIAAAAQgkAAgSgDIAAAAQgegDgVgMIAAAAQgTgKgNgQIAAAAQgJANgIAGIAAAAQgLAHgNAAIAAAAQgOABgJgJIAAAAQgIgJgCgRIAAAAQgBgVgCgKIAAAAIgGgUIAAAAQgDgMABgIIAAAAQABgKAOgQIAAAAIAlgsQAbgeASgIIAAAAQAOgGAPACIAAAAQAQACAJALIAAAAIADAEIAAAAQAGAJAAAMIAAAAQAAgMgGgJIAAAAIASgDIAAAAQAXgDAuABIAAAAQAiAAARACIAAAAQAcADAUAKIAAAAQAYAMARAXIAAAAQAQAXADAcIAAAAIAAANIAAAAQARgBARAEIAAAAQAYAFAUAQIAAAAIAUASIAAAAQAMANAIAFIAAAAQAKAHATAIIAAAAQAWAIAIAFIAAAAQAVAMAPAVIAAAAQAOAVAEAYIAAAAQADAZgIAYIAAAAIAAABIAAAAIABAAIAAAAQAlgEAfARIAAAAQA/AjAQBoIAAAAQAIAvgGAmIAAAAQgIAtgcAbIAAAAQgIAIgKAGIAAAAQAQAIANAOIAAAAQAXAXAJAnIAAAAQAEAUAAAbIAAAAIgCAvIAAAAQgEAzgMAZIAAAAQgMAZgZAQIAAAAQgLAHgMAEIAAAAQAHAGAFAIIAAAAQAXAggCAuIAAAAQgBAogTAqIAAAAQgZA1gkAdIAAAAQgtAjgxgGIAAAAQgNgBgMgFIAAAAIABAPIAAAAQABAggRAbIAAAAQgIAOgfAdIAAAAQguAugKAIIAAAAQghAdggAKIAAAAQgZAIgcgDIAAAAQgcgCgWgNIAAAAQgNAegbAYIAAAAQgeAbgjAIIAAAAQgWAGggAAIAAAAIg2gBIAAAAIgjABIAAAAQgUAAgOgDIAAAAQgagGgVgRIAAAAIgKAJIAAAAQgaATgoAHIAAAAQgVAEgzACIAAAAIgwABIAAAAIgagBg");
	var mask_2_graphics_1242 = new cjs.Graphics().p("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");
	var mask_2_graphics_1243 = new cjs.Graphics().p("AChNmQgogDgbgSIAAAAIgFgDIAAAAQgWAMgdAEIAAAAQgcADgqgEIAAAAQgogDgZgHIAAAAQgkgLgVgUIAAAAQgGgHgGgHIAAAAIgFAIIAAAAQgOAVgVAMIAAAAQgfARgrAAIAAAAQgdAAgygKIAAAAQglgHgQgFIAAAAQgdgKgSgPIAAAAQgWAUgcAGIAAAAQgYAGgrgIIAAAAQgmgGglgMIAAAAQgugMgKgCIAAAAQgngCgTgEIAAAAQghgIgYgdIAAAAQgQgTgHgVIAAAAQgXAAgcgIIAAAAQg0gPgtgfIAAAAQgtggghgrIAAAAQgdgpgJglIAAAAQgEgUAAgcIAAAAQAAgZAEgSIAAAAQgVgEgTgMIAAAAQgagQgSgaIAAAAQgfgugHhDIAAAAQgDgaAAgiIAAAAIAAg9IAAAAQAAgrAFgSIAAAAQAJggAagWIAAAAIAGgFIAAAAIgDgDIAAAAQgegWgIgjIAAAAQgEgSAAgXIAAAAQgCgbABgiIAAAAQABgjADgMIAAAAQAFgZAHgUIAAAAQATg5AaghIAAAAQAmguAvgFIAAAAQARgCARADIAAAAQgFgWAEgWIAAAAQAFgbAQgXIAAAAQARgXAXgNIAAAAIARgJIAAAAIAQgLIAAAAQAIgHAIgLIAAAAIAMgUIAAAAQAPgZAhghIAAAAQA1g3AqgRIAAAAQAigOAqAAIAAAAQAXAAATAEIAAAAIAigOIAAAAQAlgPAUgDIAAAAQANgCARgBIAAAAIAeABIAAAAIA5gBIAAAAQAXABASAFIAAAAIASgEIAAAAQBCgPAqAGIAAAAQAcAEAYANIAAAAQAZAOAPAWIAAAAIAGALIAAAAQAhgpAigTIAAAAQAsgaArAIIAAAAQAqAIAYApIAAAAIADAFIAAAAIAHgHIAAAAIAYgUIAAAAQAOgMAEgLIAAAAQACgGAAgKIAAAAIAAgBIABgPIAAAAIACgQIAAAAQAlgXAWgHIAAAAIAbgHIAAAAIAcgHIAAAAIAvgQIAAAAQAagGAZADIAAAAQAbAEAVANIAAAAQAXANAOAWIAAAAQAPAWACAaIAAAAQABAbgLAcIAAAAQgNAegUAOIAAAAQgJAHgQAFIAAAAIgcAJIAAAAIg0AZIAAAAQgnATgoAPIAAAAQgiALgWABIAAAAQgTARgbARIAAAAQhDArg0gFIAAAAQgVAOgUAGIAAAAQgbAIgcgFIAAAAQgdgGgVgSIAAAAQgVgRgLgcIAAAAIgBgCIAAAAQgSAOgcAJIAAAAQgSAFghAGIAAAAQgvAJgfgCIAAAAQgYgBgUgGIAAAAIgaABIAAAAQgxABgUAGIAAAAQgPAEgbANIAAAAQgcAOgOAEIAAAAQgjALglgMIAAAAIgGgCIAAAAIgBABIAAAAQgLAHgPASIAAAAIgcArIAAAAQgRAagOAOIAAAAQgVAXgnAaIAAAAQgpAbgbAFIAAAAQgWAEgWgFIAAAAIACASIAAAAQABAggNAbIAAAAIgOAWIAAAAQgIAOgEAJIAAAAQgJAWAAAqIAAAAQAAAvgGATIAAAAQgKAigeAVIAAAAQAVAQAMAXIAAAAQALAYACAjIAAAAQABALgBAzIAAAAQgBAnAIAVIAAAAQAGAMAOAXIAAAAQANAagCAeIAAAAQgBALgDAMIAAAAQAXAFATAQIAAAAQAeAXAJAjIAAAAQAGAcACAEIAAAAQAKAUAcAMIAAAAIAYAIIAAAAIAYAJIAAAAQAhAPATAgIAAAAQAJAPAEAPIAAAAIAGAAIAAAAQAsgEAjAIIAAAAQALACATAGIAAAAIAfAIIAAAAIA1AKIAAAAQAgAGAUAJIAAAAQARAJANANIAAAAIAJgHIAAAAQAdgUAsgBIAAAAQAegBAyAIIAAAAQArAIAVAHIAAAAQAiAMAUAVIAAAAIAIAJIAAAAIACgCIAAAAQANgVAUgNIAAAAQAbgRAngDIAAAAQAbgCAsAFIAAAAQAhAEAQAEIAAAAQAaAGASAMIAAAAIAGADIAAAAIAHgDIAAAAQAWgKAggDIAAAAIA5gDIAAAAQAVgBArgEIAAAAQAlgCAZAJIAAAAQARAGANAMIAAAAQASgSAXgIIAAAAQAUgHAegBIAAAAIA0AAIAAAAQAPgBAPgEIAAAAQAKgDATgIIAAAAQAcgKAfAHIAAAAQAOADAMAGIAAAAIACgDIAAAAQAMgaAWgPIAAAAIAmgWIAAAAQAOgIASgSIAAAAIAegdIAAAAQAhgcAkgGIAAAAQAbgEAbAKIAAAAIgBgOIAAAAQAAgbALgXIAAAAIAOgWIAAAAQAKgPAEgIIAAAAQAEgIAGgRIAAAAIAJgZIAAAAQANgaAYgSIAAAAQAQgLASgGIAAAAQgIgIgGgJIAAAAQgUgggDhBIAAAAQgCg3AJgjIAAAAQAOgxAigWIAAAAQgOgHgMgMIAAAAQgVgVgHgbIAAAAQgCgJgDgVIAAAAQgCgUgEgLIAAAAIgJgWIAAAAIgLgWIAAAAQgNggAJgkIAAAAIAEgMIAAAAQgPACgQAAIAAAAQgzgCgzghIAAAAQg5gigYgwIAAAAQgOgbgCgdIAAAAIgBgPIAAAAIgIABIAAAAQgYAEgwgBIAAAAQgkAAgSgDIAAAAQgegDgVgMIAAAAQgYgNgPgYIAAAAQgOgWgCgYIAAAAIgBAAIAAAAQgWgIgPgPIAAAAIgJAEIAAAAIgOAEIAAAAQgLAGgGACIAAAAQgHACgHgBIAAAAIgBACIAAAAIgJAVIAAAAQgOAagVACIAAAAQgJAAgJgGIAAAAQgIgFgEgJIAAAAQgHgPAGgWIAAAAQAEgSAKgRIAAAAIAMgSIAAAAQAGgLACgIIAAAAQACgVAEgJIAAAAQAHgQARgDIAAAAQAOgEALAJIAAAAQANgPATgBIAAAAIAKABIAAAAQAFACAFAEIAAAAQAJAIADAKIAAAAQACAFAAAGIAAAAQAAgGgCgFIAAAAQgDgKgJgIIAAAAQgFgEgFgCIAAAAIAFgEIAAAAQAWgVAggCIAAAAQAggDAZARIAAAAQATANAKAXIAAAAIAFANIAAAAQAEANAAANIAAAAQAAgNgEgNIAAAAIgFgNIAAAAIACAAIAAAAQAXgDAuABIAAAAQAiAAARACIAAAAQAcADAUAKIAAAAQAYAMARAXIAAAAQAQAXADAcIAAAAIAAANIAAAAQARgBARAEIAAAAQAYAFAUAQIAAAAIAUASIAAAAQAMANAIAFIAAAAQAKAHATAIIAAAAQAWAIAIAFIAAAAQAVAMAPAVIAAAAQAOAVAEAYIAAAAQADAZgIAYIAAAAIAAABIAAAAIABAAIAAAAQAlgEAfARIAAAAQA/AjAQBoIAAAAQAIAvgGAmIAAAAQgIAtgcAbIAAAAQgIAIgKAGIAAAAQAQAIANAOIAAAAQAXAXAJAnIAAAAQAEAUAAAbIAAAAIgCAvIAAAAQgEAzgMAZIAAAAQgMAZgZAQIAAAAQgLAHgMAEIAAAAQAHAGAFAIIAAAAQAXAggCAuIAAAAQgBAogTAqIAAAAQgZA1gkAdIAAAAQgtAjgxgGIAAAAQgNgBgMgFIAAAAIABAPIAAAAQABAggRAbIAAAAQgIAOgfAdIAAAAQguAugKAIIAAAAQghAdggAKIAAAAQgZAIgcgDIAAAAQgcgCgWgNIAAAAQgNAegbAYIAAAAQgeAbgjAIIAAAAQgWAGggAAIAAAAIg2gBIAAAAIgjABIAAAAQgUAAgOgDIAAAAQgagGgVgRIAAAAIgKAJIAAAAQgaATgoAHIAAAAQgVAEgzACIAAAAIgwABIAAAAIgagBgAIdomIAAAAIAAAAIAAAAgAIdomQANAAAMgEIAAAAQgMAEgNAAgAI2oqIABgBIAAAAIgBABgAIAorIAAAAIAAAAIAAAAgAH/orIgBgBIAAAAIABABg");
	var mask_2_graphics_1244 = new cjs.Graphics().p("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");
	var mask_2_graphics_1245 = new cjs.Graphics().p("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");
	var mask_2_graphics_1570 = new cjs.Graphics().p("A28cbMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1571 = new cjs.Graphics().p("A2icbMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1572 = new cjs.Graphics().p("A2HcbMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1573 = new cjs.Graphics().p("A1tcbMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1574 = new cjs.Graphics().p("A1TccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1575 = new cjs.Graphics().p("A05ccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1576 = new cjs.Graphics().p("A0eccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1577 = new cjs.Graphics().p("A0EccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1578 = new cjs.Graphics().p("AzqccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1579 = new cjs.Graphics().p("AzQccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1580 = new cjs.Graphics().p("Ay1cdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1581 = new cjs.Graphics().p("AybcdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1582 = new cjs.Graphics().p("AyBcdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1583 = new cjs.Graphics().p("AxncdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1584 = new cjs.Graphics().p("AxNcdMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1585 = new cjs.Graphics().p("AwycdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1586 = new cjs.Graphics().p("AwYcdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1587 = new cjs.Graphics().p("Av+ceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1588 = new cjs.Graphics().p("AvkceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1589 = new cjs.Graphics().p("AvJceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1590 = new cjs.Graphics().p("AuvceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1591 = new cjs.Graphics().p("AuVceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1592 = new cjs.Graphics().p("At7ceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1593 = new cjs.Graphics().p("AtgcfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1594 = new cjs.Graphics().p("AtGcfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1595 = new cjs.Graphics().p("AsscfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1596 = new cjs.Graphics().p("AsScfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1597 = new cjs.Graphics().p("Ar3cfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1598 = new cjs.Graphics().p("ArdcfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1599 = new cjs.Graphics().p("ArDcfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1600 = new cjs.Graphics().p("AqpcgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1601 = new cjs.Graphics().p("AqPcgMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1602 = new cjs.Graphics().p("Ap0cgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1603 = new cjs.Graphics().p("ApacgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1604 = new cjs.Graphics().p("ApAcgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1605 = new cjs.Graphics().p("AomcgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1606 = new cjs.Graphics().p("AoLcgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1607 = new cjs.Graphics().p("AnxchMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1608 = new cjs.Graphics().p("AnXchMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1609 = new cjs.Graphics().p("Am9chMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1610 = new cjs.Graphics().p("AmichMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1611 = new cjs.Graphics().p("AmIchMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1612 = new cjs.Graphics().p("AluchMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1613 = new cjs.Graphics().p("AlUciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1614 = new cjs.Graphics().p("Ak6ciMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1615 = new cjs.Graphics().p("AkfciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1616 = new cjs.Graphics().p("AkFciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1617 = new cjs.Graphics().p("AjrciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1618 = new cjs.Graphics().p("AjRciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1619 = new cjs.Graphics().p("Ai2ciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1620 = new cjs.Graphics().p("AiccjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1621 = new cjs.Graphics().p("AiCcjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1622 = new cjs.Graphics().p("AhocjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1623 = new cjs.Graphics().p("AhNcjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1624 = new cjs.Graphics().p("AgzcjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1625 = new cjs.Graphics().p("AgZcjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_1626 = new cjs.Graphics().p("AAAckMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1627 = new cjs.Graphics().p("AAbckMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1628 = new cjs.Graphics().p("AA1ckMAAAgjPMAzQAAAMAAAAjPg");
	var mask_2_graphics_1629 = new cjs.Graphics().p("ABPckMAAAgjPMAzQAAAMAAAAjPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1201).to({graphics:mask_2_graphics_1201,x:130.5,y:97}).wait(1).to({graphics:mask_2_graphics_1202,x:130.5,y:97}).wait(1).to({graphics:mask_2_graphics_1203,x:130.5,y:98.3}).wait(1).to({graphics:mask_2_graphics_1204,x:222.4,y:177.1}).wait(1).to({graphics:mask_2_graphics_1205,x:130.5,y:98.3}).wait(1).to({graphics:mask_2_graphics_1206,x:208.9,y:177.1}).wait(1).to({graphics:mask_2_graphics_1207,x:130.5,y:98.7}).wait(1).to({graphics:mask_2_graphics_1208,x:196,y:179.1}).wait(1).to({graphics:mask_2_graphics_1209,x:130.5,y:107.9}).wait(1).to({graphics:mask_2_graphics_1210,x:183,y:192.6}).wait(1).to({graphics:mask_2_graphics_1211,x:130.5,y:124.3}).wait(1).to({graphics:mask_2_graphics_1212,x:179.7,y:210.6}).wait(1).to({graphics:mask_2_graphics_1213,x:130.5,y:143.9}).wait(1).to({graphics:mask_2_graphics_1214,x:179.7,y:229.6}).wait(1).to({graphics:mask_2_graphics_1215,x:130.5,y:158.7}).wait(1).to({graphics:mask_2_graphics_1216,x:179.7,y:242.1}).wait(1).to({graphics:mask_2_graphics_1217,x:130.5,y:164.6}).wait(1).to({graphics:mask_2_graphics_1218,x:179.7,y:244.6}).wait(1).to({graphics:mask_2_graphics_1219,x:130.5,y:165.6}).wait(1).to({graphics:mask_2_graphics_1220,x:179.7,y:244.4}).wait(1).to({graphics:mask_2_graphics_1221,x:130.5,y:165.6}).wait(1).to({graphics:mask_2_graphics_1222,x:179.7,y:244.4}).wait(1).to({graphics:mask_2_graphics_1223,x:131.7,y:165.9}).wait(1).to({graphics:mask_2_graphics_1224,x:186.9,y:244.7}).wait(3).to({graphics:mask_2_graphics_1227,x:146.9,y:165.9}).wait(1).to({graphics:mask_2_graphics_1228,x:203.5,y:245.7}).wait(1).to({graphics:mask_2_graphics_1229,x:203.4,y:244.7}).wait(1).to({graphics:mask_2_graphics_1230,x:209.6,y:244.7}).wait(1).to({graphics:mask_2_graphics_1231,x:214.4,y:244.7}).wait(1).to({graphics:mask_2_graphics_1232,x:170.4,y:165.9}).wait(1).to({graphics:mask_2_graphics_1233,x:223,y:244.7}).wait(1).to({graphics:mask_2_graphics_1234,x:172.7,y:165.9}).wait(1).to({graphics:mask_2_graphics_1235,x:224.5,y:244.7}).wait(1).to({graphics:mask_2_graphics_1236,x:172.7,y:165.9}).wait(1).to({graphics:mask_2_graphics_1237,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1238,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1239,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1240,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1241,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1242,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1243,x:221.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_1244,x:172.7,y:165.9}).wait(1).to({graphics:mask_2_graphics_1245,x:221.8,y:244.7}).wait(325).to({graphics:mask_2_graphics_1570,x:181.1,y:181.9}).wait(1).to({graphics:mask_2_graphics_1571,x:183.8,y:181.9}).wait(1).to({graphics:mask_2_graphics_1572,x:186.4,y:181.9}).wait(1).to({graphics:mask_2_graphics_1573,x:189,y:181.9}).wait(1).to({graphics:mask_2_graphics_1574,x:191.6,y:182}).wait(1).to({graphics:mask_2_graphics_1575,x:194.2,y:182}).wait(1).to({graphics:mask_2_graphics_1576,x:196.9,y:182}).wait(1).to({graphics:mask_2_graphics_1577,x:199.5,y:182}).wait(1).to({graphics:mask_2_graphics_1578,x:202.1,y:182}).wait(1).to({graphics:mask_2_graphics_1579,x:204.7,y:182}).wait(1).to({graphics:mask_2_graphics_1580,x:207.4,y:182.1}).wait(1).to({graphics:mask_2_graphics_1581,x:210,y:182.1}).wait(1).to({graphics:mask_2_graphics_1582,x:212.6,y:182.1}).wait(1).to({graphics:mask_2_graphics_1583,x:215.2,y:182.1}).wait(1).to({graphics:mask_2_graphics_1584,x:217.9,y:182.1}).wait(1).to({graphics:mask_2_graphics_1585,x:220.5,y:182.1}).wait(1).to({graphics:mask_2_graphics_1586,x:223.1,y:182.1}).wait(1).to({graphics:mask_2_graphics_1587,x:225.7,y:182.2}).wait(1).to({graphics:mask_2_graphics_1588,x:228.3,y:182.2}).wait(1).to({graphics:mask_2_graphics_1589,x:231,y:182.2}).wait(1).to({graphics:mask_2_graphics_1590,x:233.6,y:182.2}).wait(1).to({graphics:mask_2_graphics_1591,x:236.2,y:182.2}).wait(1).to({graphics:mask_2_graphics_1592,x:238.8,y:182.2}).wait(1).to({graphics:mask_2_graphics_1593,x:241.5,y:182.3}).wait(1).to({graphics:mask_2_graphics_1594,x:244.1,y:182.3}).wait(1).to({graphics:mask_2_graphics_1595,x:246.7,y:182.3}).wait(1).to({graphics:mask_2_graphics_1596,x:249.3,y:182.3}).wait(1).to({graphics:mask_2_graphics_1597,x:252,y:182.3}).wait(1).to({graphics:mask_2_graphics_1598,x:254.6,y:182.3}).wait(1).to({graphics:mask_2_graphics_1599,x:257.2,y:182.3}).wait(1).to({graphics:mask_2_graphics_1600,x:259.8,y:182.4}).wait(1).to({graphics:mask_2_graphics_1601,x:262.5,y:182.4}).wait(1).to({graphics:mask_2_graphics_1602,x:265.1,y:182.4}).wait(1).to({graphics:mask_2_graphics_1603,x:267.7,y:182.4}).wait(1).to({graphics:mask_2_graphics_1604,x:270.3,y:182.4}).wait(1).to({graphics:mask_2_graphics_1605,x:272.9,y:182.4}).wait(1).to({graphics:mask_2_graphics_1606,x:275.6,y:182.4}).wait(1).to({graphics:mask_2_graphics_1607,x:278.2,y:182.5}).wait(1).to({graphics:mask_2_graphics_1608,x:280.8,y:182.5}).wait(1).to({graphics:mask_2_graphics_1609,x:283.4,y:182.5}).wait(1).to({graphics:mask_2_graphics_1610,x:286.1,y:182.5}).wait(1).to({graphics:mask_2_graphics_1611,x:288.7,y:182.5}).wait(1).to({graphics:mask_2_graphics_1612,x:291.3,y:182.5}).wait(1).to({graphics:mask_2_graphics_1613,x:293.9,y:182.6}).wait(1).to({graphics:mask_2_graphics_1614,x:296.6,y:182.6}).wait(1).to({graphics:mask_2_graphics_1615,x:299.2,y:182.6}).wait(1).to({graphics:mask_2_graphics_1616,x:301.8,y:182.6}).wait(1).to({graphics:mask_2_graphics_1617,x:304.4,y:182.6}).wait(1).to({graphics:mask_2_graphics_1618,x:307,y:182.6}).wait(1).to({graphics:mask_2_graphics_1619,x:309.7,y:182.6}).wait(1).to({graphics:mask_2_graphics_1620,x:312.3,y:182.7}).wait(1).to({graphics:mask_2_graphics_1621,x:314.9,y:182.7}).wait(1).to({graphics:mask_2_graphics_1622,x:317.5,y:182.7}).wait(1).to({graphics:mask_2_graphics_1623,x:320.2,y:182.7}).wait(1).to({graphics:mask_2_graphics_1624,x:322.8,y:182.7}).wait(1).to({graphics:mask_2_graphics_1625,x:325.4,y:182.7}).wait(1).to({graphics:mask_2_graphics_1626,x:328,y:182.8}).wait(1).to({graphics:mask_2_graphics_1627,x:330.7,y:182.8}).wait(1).to({graphics:mask_2_graphics_1628,x:333.3,y:182.8}).wait(1).to({graphics:mask_2_graphics_1629,x:335.9,y:182.8}).wait(98));

	// Layer 36
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AijAqQgHgBgJgFIgPgJQgUgIAGgPQAEgKAOgMQAKgIAYgEQBAgKATAAQAbgCArACQBpAEBMAWQAdAJADAFQADAHgcgBQgHgBh3ANIh+ANQgnAEgUADQgWAEgKAAIgFAAg");
	this.shape_1.setTransform(259.3,182.4);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1569).to({_off:false},0).to({_off:true},68).wait(90));

	// switch outline
	this.instance_2 = new lib.switchol("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(222.2,251.3,1,1,0,0,0,113.5,69.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1201).to({_off:false},0).wait(369).to({startPosition:0},0).to({_off:true},67).wait(90));

	// FlashAICB
	this.instance_3 = new lib.circlebasic();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.3,251,1,1,0,0,0,68,68);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1183).to({_off:false},0).to({_off:true},454).wait(90));

	// 4 line1
	this.instance_4 = new lib.ioshline("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-271.7,137.6,1,1,0,0,0,273.3,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1183).to({_off:false},0).to({x:137.9},49).wait(288).to({startPosition:0},0).to({x:-276.7},61).to({_off:true},56).wait(90));

	// 4 line2
	this.instance_5 = new lib.ioshline("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-271.7,367.6,1,1,0,0,0,273.3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1183).to({_off:false},0).to({x:137.9},49).wait(288).to({startPosition:0},0).to({x:-276.7},61).to({_off:true},56).wait(90));

	// 4 vertline
	this.instance_6 = new lib.vertline2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(413.4,-248.8,1,1,0,0,0,0,244.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1183).to({_off:false},0).to({y:260},73).wait(264).to({startPosition:0},0).to({y:762.4},61).to({_off:true},56).wait(90));

	// controls
	this.instance_7 = new lib.controls("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(381.2,251.2,1,1,0,0,0,148.6,33);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1126).to({_off:false},0).wait(54).to({startPosition:0},0).to({alpha:0.078},19).to({_off:true},1).wait(527));

	// button down
	this.instance_8 = new lib.buttondown("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(266.7,251.4,1,1,0,0,0,66,66);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1163).to({_off:false},0).wait(17).to({startPosition:0},0).to({alpha:0.16},19).to({_off:true},1).wait(527));

	// browser frame mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_828 = new cjs.Graphics().p("EgDpAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhJgSing9IgrgPIp6AAMAAAhDMMAmbAAAIAAABMBH4AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_829 = new cjs.Graphics().p("EgEgAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_830 = new cjs.Graphics().p("EgFXAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_831 = new cjs.Graphics().p("EgGOAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_832 = new cjs.Graphics().p("EgHEAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_833 = new cjs.Graphics().p("EgH7Ax3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_834 = new cjs.Graphics().p("EgIyAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_835 = new cjs.Graphics().p("EgJpAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_836 = new cjs.Graphics().p("EgKgAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_837 = new cjs.Graphics().p("EgLXAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_838 = new cjs.Graphics().p("EgMNAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_839 = new cjs.Graphics().p("EgNEAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_840 = new cjs.Graphics().p("EgN7Ax3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_841 = new cjs.Graphics().p("EgOyAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_842 = new cjs.Graphics().p("EgPpAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_843 = new cjs.Graphics().p("EgQgAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_844 = new cjs.Graphics().p("EgRWAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_845 = new cjs.Graphics().p("EgSNAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_846 = new cjs.Graphics().p("EgTEAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_847 = new cjs.Graphics().p("EgT7Ax3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_848 = new cjs.Graphics().p("EgUyAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_849 = new cjs.Graphics().p("EgVpAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_850 = new cjs.Graphics().p("EgWfAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_851 = new cjs.Graphics().p("EgXWAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_852 = new cjs.Graphics().p("EgYNAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_853 = new cjs.Graphics().p("EgZEAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_854 = new cjs.Graphics().p("EgZ7Ax3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_855 = new cjs.Graphics().p("EgayAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_856 = new cjs.Graphics().p("EgboAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_857 = new cjs.Graphics().p("EgcfAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_858 = new cjs.Graphics().p("EgdWAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_859 = new cjs.Graphics().p("EgeNAx3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_860 = new cjs.Graphics().p("EgemAx3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgqgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_861 = new cjs.Graphics().p("Ege/Ax3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhKgSimg9IgrgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_862 = new cjs.Graphics().p("EgfYAx3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_863 = new cjs.Graphics().p("EgfxAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhJgSing9IgrgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_864 = new cjs.Graphics().p("EggKAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_865 = new cjs.Graphics().p("EggjAx3IAA42QgMgTgMgXQgphRgYhjQgFgVgBgSIhBhBIg6g9QgdgCgmgIQhJgSing9IgrgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_866 = new cjs.Graphics().p("Egg8Ax3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_867 = new cjs.Graphics().p("EghVAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_868 = new cjs.Graphics().p("EghuAx3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_869 = new cjs.Graphics().p("EgiHAx3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgqgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_870 = new cjs.Graphics().p("EgigAx3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_871 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_872 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_873 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_874 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_875 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_876 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_877 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_878 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_879 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_880 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_881 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_882 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_883 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_884 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_885 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_886 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_887 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_888 = new cjs.Graphics().p("Egi5Ax3IAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_889 = new cjs.Graphics().p("Egi5AynIAA41QgMgTgMgYQgphQgYhkQgFgUgCgSIhAhCIg5g9QgegBgmgJQhJgRiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAggg");
	var mask_3_graphics_890 = new cjs.Graphics().p("Egi5Az1IAA41QgMgTgMgYQgphQgYhkQgFgUgCgSIhAhCIg5g9QgegBgmgJQhJgRiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAggg");
	var mask_3_graphics_891 = new cjs.Graphics().p("Egi5A1EIAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_892 = new cjs.Graphics().p("Egi5A2SIAA42QgMgTgMgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_893 = new cjs.Graphics().p("Egi5A3gIAA41QgMgTgMgYQgphQgYhkQgFgUgCgSIhAhCIg5g9QgegBgmgJQhJgRiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAggg");
	var mask_3_graphics_894 = new cjs.Graphics().p("Egi5A4vIAA42QgMgTgMgYQgphQgYhkQgFgUgCgSIhAhBIg5g+QgegBgmgJQhJgRiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(828).to({graphics:mask_3_graphics_828,x:562.8,y:-53}).wait(1).to({graphics:mask_3_graphics_829,x:557.3,y:-53}).wait(1).to({graphics:mask_3_graphics_830,x:551.8,y:-53}).wait(1).to({graphics:mask_3_graphics_831,x:546.3,y:-53}).wait(1).to({graphics:mask_3_graphics_832,x:540.8,y:-53}).wait(1).to({graphics:mask_3_graphics_833,x:535.3,y:-53}).wait(1).to({graphics:mask_3_graphics_834,x:529.8,y:-53}).wait(1).to({graphics:mask_3_graphics_835,x:524.4,y:-53}).wait(1).to({graphics:mask_3_graphics_836,x:518.9,y:-53}).wait(1).to({graphics:mask_3_graphics_837,x:513.4,y:-53}).wait(1).to({graphics:mask_3_graphics_838,x:507.9,y:-53}).wait(1).to({graphics:mask_3_graphics_839,x:502.4,y:-53}).wait(1).to({graphics:mask_3_graphics_840,x:496.9,y:-53}).wait(1).to({graphics:mask_3_graphics_841,x:491.5,y:-53}).wait(1).to({graphics:mask_3_graphics_842,x:486,y:-53}).wait(1).to({graphics:mask_3_graphics_843,x:480.5,y:-53}).wait(1).to({graphics:mask_3_graphics_844,x:475,y:-53}).wait(1).to({graphics:mask_3_graphics_845,x:469.5,y:-53}).wait(1).to({graphics:mask_3_graphics_846,x:464,y:-53}).wait(1).to({graphics:mask_3_graphics_847,x:458.6,y:-53}).wait(1).to({graphics:mask_3_graphics_848,x:453.1,y:-53}).wait(1).to({graphics:mask_3_graphics_849,x:447.6,y:-53}).wait(1).to({graphics:mask_3_graphics_850,x:442.1,y:-53}).wait(1).to({graphics:mask_3_graphics_851,x:436.6,y:-53}).wait(1).to({graphics:mask_3_graphics_852,x:431.1,y:-53}).wait(1).to({graphics:mask_3_graphics_853,x:425.7,y:-53}).wait(1).to({graphics:mask_3_graphics_854,x:420.2,y:-53}).wait(1).to({graphics:mask_3_graphics_855,x:414.7,y:-53}).wait(1).to({graphics:mask_3_graphics_856,x:409.2,y:-53}).wait(1).to({graphics:mask_3_graphics_857,x:403.7,y:-53}).wait(1).to({graphics:mask_3_graphics_858,x:398.2,y:-53}).wait(1).to({graphics:mask_3_graphics_859,x:392.8,y:-53}).wait(1).to({graphics:mask_3_graphics_860,x:390.3,y:-44.6}).wait(1).to({graphics:mask_3_graphics_861,x:387.8,y:-36.3}).wait(1).to({graphics:mask_3_graphics_862,x:385.3,y:-28}).wait(1).to({graphics:mask_3_graphics_863,x:382.8,y:-19.6}).wait(1).to({graphics:mask_3_graphics_864,x:380.3,y:-11.3}).wait(1).to({graphics:mask_3_graphics_865,x:377.8,y:-3}).wait(1).to({graphics:mask_3_graphics_866,x:375.3,y:5.4}).wait(1).to({graphics:mask_3_graphics_867,x:372.8,y:13.7}).wait(1).to({graphics:mask_3_graphics_868,x:370.3,y:22}).wait(1).to({graphics:mask_3_graphics_869,x:367.8,y:30.4}).wait(1).to({graphics:mask_3_graphics_870,x:365.3,y:38.7}).wait(1).to({graphics:mask_3_graphics_871,x:362.8,y:47}).wait(1).to({graphics:mask_3_graphics_872,x:362.8,y:62.7}).wait(1).to({graphics:mask_3_graphics_873,x:362.8,y:78.3}).wait(1).to({graphics:mask_3_graphics_874,x:362.8,y:94}).wait(1).to({graphics:mask_3_graphics_875,x:362.8,y:109.6}).wait(1).to({graphics:mask_3_graphics_876,x:362.8,y:125.3}).wait(1).to({graphics:mask_3_graphics_877,x:362.8,y:140.9}).wait(1).to({graphics:mask_3_graphics_878,x:362.8,y:156.6}).wait(1).to({graphics:mask_3_graphics_879,x:362.8,y:172.2}).wait(1).to({graphics:mask_3_graphics_880,x:362.8,y:187.9}).wait(1).to({graphics:mask_3_graphics_881,x:362.8,y:203.5}).wait(1).to({graphics:mask_3_graphics_882,x:362.8,y:219.2}).wait(1).to({graphics:mask_3_graphics_883,x:362.8,y:234.9}).wait(1).to({graphics:mask_3_graphics_884,x:362.8,y:250.5}).wait(1).to({graphics:mask_3_graphics_885,x:362.8,y:266.2}).wait(1).to({graphics:mask_3_graphics_886,x:362.8,y:281.8}).wait(1).to({graphics:mask_3_graphics_887,x:362.8,y:297.5}).wait(1).to({graphics:mask_3_graphics_888,x:362.8,y:313.1}).wait(1).to({graphics:mask_3_graphics_889,x:362.8,y:323.9}).wait(1).to({graphics:mask_3_graphics_890,x:362.8,y:331.7}).wait(1).to({graphics:mask_3_graphics_891,x:362.8,y:339.6}).wait(1).to({graphics:mask_3_graphics_892,x:362.8,y:347.4}).wait(1).to({graphics:mask_3_graphics_893,x:362.8,y:355.2}).wait(1).to({graphics:mask_3_graphics_894,x:362.8,y:363.1}).wait(306).to({graphics:null,x:0,y:0}).wait(527));

	// browser frame
	this.instance_9 = new lib.browserframe("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(84,48.5,1,1,0,0,0,-18,-74.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(828).to({_off:false},0).wait(352).to({startPosition:0},0).to({alpha:0.07},19).to({_off:true},1).wait(527));

	// shadowmask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_892 = new cjs.Graphics().p("EhCaA8zMAAAh5lMCE1AAAMAAAB5lgEhByA8LMCDlAAAMAAAh4VMiDlAAAMAAAB4VgEhByA8LMAAAh4VMCDlAAAMAAAB4VgEgkpgcvQh+A1hhBiIAAAAQhjBig0B+IAAAAQg4CDAACPIAAAAMAAAAy7QAACQA4CDIAAAAQA0B+BjBiIAAAAQBhBiB+A1IAAAAQCEA3CPAAIAAAAMBH3AAAQCPAACEg3IAAAAQB9g1BihiIAAAAQBihiA1h+IAAAAQA4iDAAiQIAAAAMAAAgy7QAAiPg4iDIAAAAQg1h+hihiIAAAAQhihih9g1IAAAAQiEg4iPAAIAAAAMhH3AAAQiPAAiEA4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(892).to({graphics:mask_4_graphics_892,x:382.1,y:315.1}).wait(308).to({graphics:null,x:0,y:0}).wait(527));

	// shadow outer
	this.instance_10 = new lib.bshad();
	this.instance_10.parent = this;
	this.instance_10.setTransform(406.9,357.2,1,1,0,0,0,304.9,234.2);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",-17,-16,90);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(892).to({_off:false},0).to({alpha:0.09},69).wait(219).to({alpha:0.172},0).to({alpha:0.059},19).to({_off:true},1).wait(527));

	// otherbut mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_892 = new cjs.Graphics().p("ABTB1QgLAAgLgDQgLgFgPgQIgRgQIgDAHQgEAJgKAFQgKAGgKgCQgLgBgIgIQgEgEgDgGQgEgKACgJQAAgGADgEQgGgEgDgDIAAgBQgTAHgRgBQgWgBgUgNIgKgIIABgBQAdgSANggIAJgcQAEgRAGgKQAGgKAOgRQAFgHADgGQALAFAKAIQAYAUAGAdQAFAXgIAYQAbACAcAPIAaASIAYARIAOAIIANAJQAPAMgCAPQAAAJgHAHQgGAHgKADQgIACgNAAIgPAAg");
	var mask_5_graphics_893 = new cjs.Graphics().p("ABfB/QgLgCgHgHQgFgFgDgGQgDgKABgJIACgIIgFgLQgUAJgSgCQgWAAgTgNQgLgHgHgJQgaAHgbgKQgfgLgPgaQgQgZAEggQAFggAWgVQAWgUAggDQAggCAZARQAJAHAHAJQAGgBAHAAQAJAAAAgEQAdACAYAUQAYAUAGAcQAEAQgDAQIAFAJIAJAQQAGALADAGQANAcgNAbQgEALgIAEQgEAFgHAEQgIAEgIAAIgFAAg");
	var mask_5_graphics_894 = new cjs.Graphics().p("AB1B6QgLgCgIgHQgEgFgDgGIgCgGQgGAAgGgCQgMgDgGgOIgCgGIgKAAQgWAAgUgNIgKgJQgIALgMAKQgbAWggADQghACgegQQgegRgPgdQgOgeAFghQAEgiAWgYQAbgfAtgDQAsgEAgAZQALAIAJAMQAGgGAGgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAEAOgCAPIAdABIAOADQAHADAFAJQAJAOABAOQACASgMAJQgJAJgRAAQgIABgHgBIADAIQACALgFAKQgEAKgKAFQgJAEgIAAIgEAAg");
	var mask_5_graphics_895 = new cjs.Graphics().p("ACiCMQgHgGgDgJQgDgJADgIIACgEQgFgGgCgGIgEgLQgKACgLgBQgWAAgUgNIgLgJQgIALgMAKQgbAWgfADQghACgegQQgagPgOgXQgXAEgYgIQgcgKgPgVQgdgLgPgYQgPgaAEggQAEggAWgVQAWgUAggDQAhgCAYARQAMAIAJAMQAKADAJAHIAKAHQASgJAYgCQArgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAGAYgKAaIAAAAQAEAAAEACQADABADADQAIAIACAEIABADIAIAEQAKAHAFARQAEAMAAAFQgBALgFAHQgDAGgGAHIgLALQgNANgIADIgQABQgUgBgOgKg");
	var mask_5_graphics_896 = new cjs.Graphics().p("AEKCYQgNgJgBgNIgBAAIgHABIgLAAQgEAAgBgBIgEgCQgSgDgIgKQgIgKgBgTIgKAAQgWAAgUgNIgLgJQgIALgMAKQgbAWggADQghACgdgQQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDQgegGgUgNQgZgRgOgbQgNgdAEgeQAEgdATgZQAUgYAcgKQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQANAOAIAQQAVgNAcgCQAsgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUIALAKIACAAQAQAAALALQATAVgIAjQALgFAMAFQALAFAHAKQALAQABAeQACAigKAVQgGANgKAKQgMAJgNACIgEABQgMAAgLgIg");
	var mask_5_graphics_897 = new cjs.Graphics().p("AE8CKQgIgGgIgTIgGgQQgRAGgQgBQgWAAgUgNIgLgJQgJALgMAKQgaAWghADQggACgegQQgfgRgOgdIgEgJQgRALgXAFQggAIgygBQgjgBgUgDQgegGgVgNIgDgCQgOARgYAJQgcAKgfgLQgfgLgPgaQgQgaAEgfQAFggAWgVQAWgUAggDQAXgCATAJQAEgJAHgIQATgYAcgKQASgHAYgBIArgBIAzABQAdABAVAIQAWAJATAUQANAOAHAQQAWgNAcgCQAtgEAgAZQALAIAIAMQAGgGAHgFQATgMAVABQAJAAAAgEQAdACAYAUQAYAUAGAcQAEATgFAUIACACQAEAFAFARIAJAgQAEAUgHANQgHAOgOAEQgGACgFAAQgKAAgIgGg");
	var mask_5_graphics_898 = new cjs.Graphics().p("AF2CkQgJgBgHgFQgIgFgEgHQgEgHgBgLIAAgSQgBgZACgLQgVAKgUgCQgWAAgUgNIgLgJQgJALgMAKQgaAWghADQggACgegQQgfgRgOgdIgEgJQgSALgXAFQgfAIgygBQgjgBgUgDIgEgBQgKAFgLACIgdAFQgTACgJACQgNAEgYAMQgYAMgNADQgcAHgcgIQgdgJgTgUQgTgVgHgdQgIgbAHgcQAGgbATgYQASgXAagPQAugcBAgEQAmgDAgAHIAKgEQASgHAYgBIArgBIAzABQAcABAVAIQAXAJATAUQANAOAHAQQAWgNAcgCQAtgEAgAZQALAIAIAMQAGgGAHgFQATgMAVABQAJAAAAgEQAdACAYAUQAYAUAGAcQAGAbgNAdIgJAOQABAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAUAFAHALQAGAIABAOQACAUgBARQgBATgHAKQgJAPgSAAIgCAAg");
	var mask_5_graphics_899 = new cjs.Graphics().p("AG4CeQgOAAgIgJQgMgMAAgXQAAgWgBgMQgUAJgTgCQgWAAgUgNIgLgJQgJALgMAKQgaAWghADQggACgegQQgfgRgOgdIgEgJQgSALgXAFQggAIgxgBQgjgBgUgDIgEgBQgKAFgLACIgdAFQgTACgJACQgNAEgYAMQgYAMgNADQgbAHgcgIIgKAKQgNANgSAHQgSAGgTgCIgNAGQgcAKgfgLQgfgLgPgaQgQgaAEggQAFggAWgUQAWgUAggDIAOAAQAQgIAUgCIADAAQAHgXAQgVQASgXAagPQAugcBAgEQAmgDAgAHIAKgEQASgHAYgBIAqgBIAzABQAdABAVAIQAXAJATAUQANAOAHAQQAWgNAcgCQAtgEAgAZQALAIAIAMQAGgGAHgFQATgMAVABQAJAAAAgEQAdACAYAUQAYAUAGAcQACANAAALIAEACQAPAMAAAlIAAAsQABAlgPANQgJAJgMAAIgBgBg");
	var mask_5_graphics_900 = new cjs.Graphics().p("Am2DgQgcgFgVgRQgWgRgLgaQgLgaADgcQADgdAUghQAHgNAggpIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAmgDAgAHIAKgEQARgHAYgBIArgBIAzABQAdABAUAIQAYAJASAUQANAOAIAQQAVgNAdgCQAsgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAEARgDARQASAJACAYQACATgMAUIgDAGQAJAEAEAFQAJAJABAWQABAPgDALIAAACQAAAVgNANQgNANgUABQgUAAgOgNQgUgTABgvQAAgaAFgTQgMADgMgBQgWAAgUgNIgLgIQgIAKgMAKQgbAWggADQghACgegQQgegRgPgcIgDgJQgSALgXAFQghAIgxgBQgjgBgUgDIgEgBQgKAFgLABIgcAFQgTACgKACQgNAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEAMgHAOQgJARgZAkQgfAtgRARQgdAgghALQgRAFgRAAQgKAAgKgCg");
	var mask_5_graphics_901 = new cjs.Graphics().p("An/EIQgfgLgQgaQgPgaAEggQAEggAWgVIAJgHQAGgTAPgOQALgKAOgGQADgdAUgfQAHgNAggqIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAmgDAgAHIAJgEQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQANAOAIAQQAVgNAdgCQAsgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAEARgDARIAHAFQAIAHAGATQAGARACAOQADAQgBARQgBAegPAMQgMAKgYgDQgYgDgIgMQgGgJAAgUIAAgfQgQAFgPgBQgWAAgUgNIgLgJQgIALgMAKQgbAWggACQghACgegPQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgEgBQgKAFgLACIgbAFQgTACgKACQgNAEgYAMQgYAMgNADQgbAGgdgHIgGgCQgEALgHAOQgJARgZAkQgfAtgRARQgdAgghALQgOAEgPABQgKATgQAMIgBACQgPAkglAOQgOAFgOAAQgPAAgQgGg");
	var mask_5_graphics_902 = new cjs.Graphics().p("An+FiQgfgFgZgVQgZgUgMgdQgMgcABghQABgfANgdQAIgTASgaIAfgsIAZgmQAPgVAPgLQAUgQAagEIAAgCQADgeAUggQAIgNAggrIAfgpQATgVATgMQAagQAfgCQAWgBAVAHQAGgaASgXQASgWAagQQAugcBAgEQAlgDAgAIIAKgFQASgGAYgCIArAAIAzAAQAdACAVAIQAXAJATATQANAOAHARQAWgOAcgCQAtgEAgAZQALAJAIALQAGgGAHgEQATgNAVACQAJAAAAgEQAdABAYAUQAYAUAGAdQAGAcgNAcIgEAIQAIAEAIAHQAaAWgCAWQgBAHgEAIQgLAOgSABQgQABgPgLQgTgNgEgVIAAgCQgPAFgPgBQgWgBgUgNIgLgJQgJAMgMAJQgaAWghADQggADgegRQgfgRgOgdIgEgIQgSAKgXAGQggAIgygBQgjgBgUgEIgEAAQgKAEgLADIgdAEQgTACgIADQgNADgYAMQgYAMgNAEQgcAHgcgJIgGgCQgFANgHANQgJASgZAjQgfAsgQASQgeAgggAKIgRAEIgBAQQgFAegaArQggA1gGARQgLAjgJAPQgPAbgeAOQgWAKgXAAIgQgBg");
	var mask_5_graphics_903 = new cjs.Graphics().p("AoSGUQgfgLgPgaQgQgaAEggQAEgZAOgSQgSgSgKgXQgMgdABggQABggANgdQAIgTASgaIAfgsIAZglQAPgVAPgMQAUgPAagEIAAgDQADgdAUghQAIgNAggqIAfgpQATgWATgMQAagQAfgBQAWgCAVAHQAGgaASgWQASgXAagPQAugcBAgEQAlgDAgAHIAKgEQASgHAYgBIArgBIAzABQAdABAVAIQAXAJATAUQANAOAHAQQAWgNAcgCQAtgEAgAZQALAIAIAMQAGgGAHgFQATgMAVABQAJAAAAgEQAdACAYAUQAYAUAGAcQAGAZgKAaIAHAMQAOAeACAOQABAMgFALQgFAMgKAEQgLAFgNgFQgLgEgKgJQgKgMgHgRQgOAEgNgBQgWAAgUgNIgLgJQgJALgMAKQgaAWghADQggACgegQQgfgRgOgdIgEgJQgSALgXAFQggAIgygBQgjgBgUgDIgEgBQgKAFgLACIgdAFQgTACgIACQgNAEgYAMQgYAMgNADQgcAHgcgIIgGgCQgFAMgHAOQgJARgZAkQgfAtgQARQgeAfggALIgRAEIgBAPQgFAegaArQggA2gGARQgLAigJAQQgKAQgOAMQAEAIADAKQAJAfgMAcQgPAkglAOQgNAFgOAAQgQAAgQgGg");
	var mask_5_graphics_904 = new cjs.Graphics().p("AnzH+QgZgCgWgOQgWgNgNgWQgNgXgEgjIgCg/IgBgzQAAgdADgWQAHgrAWgbQgTgSgLgYQgMgdABggQABggANgdQAJgSASgaIAfgsIAYgmQAPgVAPgMQAVgPAagEIAAgDQADgdAUghQAHgNAggqIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAlgDAgAHIAKgEQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQANAOAIAQQAVgNAdgCQAsgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAGAYgJAYIAEAFQANARAFAWQAHAfgQAPQgMAOgSgEQgSgEgHgRQgDgNgDgGIgDgGQgSAHgRgCQgWAAgUgNIgLgJQgIALgMAKQgbAWggADQghACgegQQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgEgBQgKAFgLACIgcAFQgTACgJACQgNAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEAMgHAOQgJARgZAkQgfAtgRARQgdAgghALIgQAEIgCAPQgFAegZAqQggA2gHARQgLAigJAQQgFAJgHAIQAOAPAHATQAKAXACAgIAAA6QAABEgCAQQgGAvgWAcQgQAUgYAKQgVAJgVAAIgIgBg");
	var mask_5_graphics_905 = new cjs.Graphics().p("AngIvQgfgLgQgaQgPgaAEggIACgLQgQgEgOgJQgWgNgNgWQgNgXgEgjIgCg/IgBgzQAAgdADgWQAHgrAWgbQgTgSgLgYQgMgdABggQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgPAagEIAAgDQADgdAUghQAHgNAggqIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAmgDAfAHIAKgEQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQANAOAIAQQAVgNAdgCQAsgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAGAZgKAZIAHANIAHAPQAGAJATASQARARAFAMQAJAVgLARQgGAJgJAEQgKAEgKgCQgLgCgNgMQgbgZgUgeIgJgOQgPAEgOgBQgWAAgUgNIgLgJQgIALgMAKQgbAWggADQghACgegQQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgEgBQgKAFgLACIgcAFQgSACgKACQgNAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEAMgHAOQgJARgZAkQgfAtgRARQgdAgghALIgQAEIgCAPQgFAegZArQggA1gHARQgLAigJAQQgFAJgHAIQAOAPAHATQAKAXACAgIAAA6QAABEgCAQQgEAegKAWIAOAIQAZARAJAfQAJAfgLAcQgPAkglAOQgOAFgOAAQgPAAgQgGg");
	var mask_5_graphics_906 = new cjs.Graphics().p("AmqJ7QgzgPgsgwQgdgggQgkQgRgoADgnQACggAQgaIgDgDQgWgNgNgWQgOgXgDgjIgDg/IgBgzQAAgdADgWQAIgrAVgbQgTgSgKgXQgMgdABggQABggANgdQAIgTASgaIAfgsIAZgmQAPgVAPgMQAUgPAagEIAAgDQADgdAUghQAIgNAggqIAfgpQATgWATgMQAagQAfgBQAWgCAVAHQAGgaASgWQASgXAagPQAugcBAgEQAmgDAfAHIAKgEQASgHAYgBIArgBIAzABQAdABAVAIQAXAJATAUQANAOAHAQQAWgNAcgCQAtgEAgAZQALAIAIAMQAGgGAHgFQATgMAVABQAJAAAAgEQAdACAYAUQAYAUAGAcQAFAWgHAWQAaAhATAfQAYAngLAWQgGANgQAEQgQAEgMgIQgHgFgJgOIgpg7IgCgDQgTAHgRgBQgWAAgUgNIgLgJQgJALgMAKQgaAWghADQggACgegQQgfgRgOgdIgEgJQgSALgXAFQggAIgygBQgjgBgUgDIgEgBQgKAFgLACIgdAFQgSACgJACQgNAEgYAMQgYAMgNADQgcAHgcgIIgGgCQgFAMgHAOQgJARgZAkQgfAtgQARQgeAgggALIgRAEIgBAPQgFAegaArQggA2gGARQgLAhgJAQQgGAJgHAIQAOAPAIATQAJAXACAgIABA6QgBBEgCAQQgEAhgMAYQALAHAJAKQALALAPAbQAPAcAKALQAHAHARAOQAQANAHAIQAfAigFAxQgGAygkAaQgXARgeAEIgSABQgUAAgUgGg");
	var mask_5_graphics_907 = new cjs.Graphics().p("Ak6KxQgfgLgQgaIAAgBQgTgLgLgSQgKgQgBgUQgOgBgOgEQg0gPgrgwQgegggPgkQgRgoACgnQADggAQgaIgEgDQgWgNgNgWQgNgXgEgjIgCg/IgBgzQAAgdADgWQAHgrAWgaQgTgSgLgYQgMgdABggQABggANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgPAagEIAAgDQADgdAUghQAHgNAggqIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAmgDAfAHIAKgEQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQANAOAIAQQAVgNAdgCQAsgEAgAZQALAIAJAMQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAHAcgOAdIgBACIAFAHQANARAgAcQAZAXACARQABAOgJAMQgJALgOACQgWADgcgcQgQgQgXgaIgPgRQgMACgLgBQgWAAgUgNIgLgJQgIALgMAKQgbAWggADQghACgegQQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgEgBQgKAFgLACIgcAFQgSACgKACQgNAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEAMgHAOQgJARgZAkQgfAtgRARQgdAgghALIgQAEIgCAPQgFAegZArQggA2gHARQgLAigJAQQgFAJgHAIQAOAPAHASQAKAXACAgIAAA6QAABEgCAQQgEAhgMAYQALAHAJAKQALALAOAbQAQAcAKALQAHAHAQAOQARANAHAIQAeAigFAxIAAAGQAHADAGAFQAQAKAJARIAFADQAZARAJAfQAJAfgLAcQgPAkglAOQgOAFgOAAQgPAAgQgGg");
	var mask_5_graphics_908 = new cjs.Graphics().p("AikLsQglgGgwgcQgsgZgxgpQgxgogMgiQgIgWADgWIgSgEQgzgQgsgvQgdgggQglQgRgoADgnQACgfAQgbIgDgCQgWgOgNgWQgOgXgDgjIgDg/IgBgyQAAgeADgUQAIgsAVgbQgTgSgKgYQgMgcABghQABgfANgdQAIgTASgaIAfgsIAZgmQAPgVAPgMQAUgQAagEIAAgCQADgeAUggQAIgNAggrIAfgpQATgVATgMQAagQAfgCQAWgBAVAHQAGgaASgXQASgWAagQQAugcBAgEQAmgDAfAIIAKgFQASgGAYgCIArAAIAzAAQAdACAVAIQAXAJATATQANAOAHARQAWgOAcgCQAtgEAgAZQALAJAIALQAGgGAHgEQATgNAVACQAJAAAAgEQAdABAYAUQAYAUAGAdQAGAcgNAcIgCADIAWAPQAVASAMASQAMATABAQQADAVgOANQgKAJgPgBQgOgBgJgKQgEgEgHgNQgPgbgbgPIgWgLQgHABgHAAQgWgBgUgNIgLgJQgJAMgMAJQgaAWghADQggADgegRQgfgRgOgdIgEgIQgSAKgXAGQggAIgygBQgjgBgUgEIgEAAQgKAEgLADIgdAEQgSACgJADQgNADgYAMQgYAMgNAEQgcAHgcgJIgGgCQgFANgHANQgJASgZAjQgfAtgQASQgeAgggAKIgRAEIgBAQQgFAegaArQggA1gGARQgLAjgJAPQgGAKgHAIQAOAPAIATQAJAWACAgIABA6QgBBEgCAQQgEAhgMAYQALAHAJAJQALAMAPAbQAPAbAKALQAHAIARANQAQAOAHAIQAeAhgEAwQAdAEAZAQQAMAIAaAYQAYAVAQAIIAmARQAYAJANALQAhAbACA0QABAegLAbQgNAdgXAQQgaATglAAQgMAAgMgCg");
	var mask_5_graphics_909 = new cjs.Graphics().p("AgZL3QgfgLgPgaIgDgEQgiAYgzgIQglgGgwgcQgsgZgxgqQgxgogMgiQgIgVADgXIgSgEQgzgPgsgwQgdgggQgkQgRgoADgnQACggAQgaIgDgDQgWgNgNgWQgOgXgDgjIgDg/IgBgzQAAgdADgVQAIgrAVgbQgTgSgKgYQgMgdABggQABggANgdQAIgTASgaIAfgsIAZgmQAPgVAPgMQAUgPAagEIAAgDQADgdAUghQAIgNAggqIAfgpQATgWATgMQAagQAfgBQAWgCAVAHQAGgaASgWQASgXAagPQAugcBAgEQAmgDAfAHIAKgEQASgHAYgBIArgBIAzABQAdABAVAIQAXAJATAUQANAOAHAQQAWgNAcgCQAtgEAgAZQALAIAIAMQAGgGAHgFQATgMAVABQAJAAAAgEQAdACAYAUQAYAUAGAcQAEAVgGAVQAIAGALARIASAYQAJAPADAMQAFAPgFAPQgGAQgNAFQgKAEgMgEQgLgEgIgJQgGgGgLgSQgJgRgIgGIgIgFQgSAHgQgCQgWAAgUgNIgLgJQgJALgMAKQgaAWghADQggACgegQQgfgRgOgdIgEgJQgSALgXAFQggAIgygBQgjgBgUgDIgEgBQgKAFgLACIgdAFQgSACgJACQgNAEgYAMQgYAMgNADQgcAHgcgIIgGgCQgFAMgHAOQgJARgZAkQgfAtgQARQgeAgggALIgRAEIgBAPQgFAegaArQggA2gGARQgLAigJAQQgGAJgHAIQAOAPAIATQAJAXACAfIABA6QgBBEgCAQQgEAhgMAYQALAHAJAKQALALAPAbQAPAcAKALQAHAHARAOQAQANAHAIQAeAhgEAxQAdAEAZAQQAMAIAaAXQAYAVAQAJIAmAQQAYAKANAKQAaAWAHAlQAMgFAOgBQAfgCAZARQAZARAJAfQAJAfgMAcQgPAkglAOQgNAFgOAAQgPAAgQgGg");
	var mask_5_graphics_910 = new cjs.Graphics().p("ACUMLQgMgCgLgFQgQAGgRABQgUACgSgFQgKACgMABQggACgZgOQgbgOgQgaQgGgLgEgLQghAVgwgIQglgGgvgcQgsgZgygpQgwgogNgiQgHgWACgWIgRgEQg0gQgrgvQgegggPglQgRgoACgnQADgfAQgbIgEgCQgWgOgNgWQgNgXgEgjIgCg/IgBgyQAAgdADgVQAHgsAWgbQgTgSgLgYQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAmgDAfAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQANAOAIARQAVgOAdgCQAsgEAgAZQALAJAJALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAHAcgOAcIgEAIIAFACIAPALIAKAGIAJAGQAIAHAGAPQAHAQAAAJQAAAIgEAIQgFAIgIAEQgRAKgQgLQgEgDgHgHIgLgKIgSgKQgJgGgFgLQgEgGAAgHQgQAFgOgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgSACgKADQgNADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAtgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgFAKgHAIQAOAPAHATQAKAWACAhIAAA5QAABEgCAQQgEAhgMAYQALAHAJAJQALAMAOAbQAQAbAKALQAHAIAQANQARAOAHAIQAeAhgEAwQAcAEAZAQQAMAIAbAYQAYAVAPAIIAnARQAYAJAMALQAaAVAHAkQAIgFAJgEQAegLAiAJIABAAQAcgIAfAIIALAEIAEgCQAfgLAiAJQAiAJAVAZQAWAaADAjQADAjgQAdQgQAdggAPQgYALgXAAIgRgBg");
	var mask_5_graphics_911 = new cjs.Graphics().p("ACYMLQgMgCgLgFQgQAGgRABQgUACgSgFQgKACgMABQggACgZgOQgbgOgQgaQgGgLgEgLQghAVgwgIQglgGgvgcQgsgZgygpQgwgogNgiQgHgWACgWIgRgEQg0gQgrgvQgegggPglQgRgoACgnQADgfAQgbIgEgCQgWgOgNgWQgNgXgEgjIgCg/IgBgyQAAgdADgVQAHgsAWgbQgTgSgLgYQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAlgDAgAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQANAOAIARQAVgOAdgCQAsgEAgAZQALAJAJALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAHAcgOAcIgCAEQAJACAHAGQAEADAKARIAPAXQAJATgIARQgDAJgIAFQgIAHgJAAQgPACgPgOQgHgHgFgJIgHgOQgJgJgDgGQgDgEgBgFQgRAGgQgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgSACgKADQgNADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAtgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgFAKgHAIQAOAPAHATQAKAWACAhIAAA5QAABEgCAQQgEAhgMAYQALAHAJAJQALAMAOAbQAQAbAKALQAHAIAQANQARAOAHAIQAeAhgEAwQAcAEAZAQQAMAIAbAYQAYAVAPAIIAnARQAYAJAMALQAaAVAHAkQAIgFAJgEQAegLAiAJIABAAQAcgIAfAIIALAEIAEgCQAfgLAiAJQAcAIAUATQAQgJAUgBQAcgCAWAMQAhgDAYARQAZARAJAgQAJAfgLAcQgHARgOANQgOANgRAGQgdAKgegLIgLgEQgTABgUgHIgNgFQgMANgSAIQgXALgYAAIgRgBg");
	var mask_5_graphics_912 = new cjs.Graphics().p("ACYMLQgMgCgLgFQgQAGgRABQgUACgSgFQgKACgMABQggACgZgOQgbgOgQgaQgGgLgEgLQghAVgwgIQglgGgvgcQgsgZgygpQgwgogNgiQgHgWACgWIgRgEQg0gQgrgvQgegggPglQgRgoACgnQADgfAQgbIgEgCQgWgOgNgWQgNgXgEgjIgCg/IgBgyQAAgdADgVQAHgsAWgbQgTgSgLgYQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAlgDAgAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQANAOAIARQAVgOAdgCQAsgEAgAZQALAJAJALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAGAZgLAbQAQAIAMAQQAPATADAXQABAQgFAOQgHAPgPAEQgPAEgNgKQgJgHgKgUQgLgTgDgMIgBgEQgWAJgUgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgSACgKADQgNADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAtgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgFAKgHAIQAOAPAHATQAKAWACAhIAAA5QAABEgCAQQgEAhgMAYQALAHAJAJQALAMAOAbQAQAbAKALQAHAIAQANQARAOAHAIQAeAhgEAwQAcAEAZAQQAMAIAbAYQAYAVAPAIIAnARQAYAJAMALQAaAVAHAkQAIgFAJgEQAegLAiAJIABAAQAcgIAfAIIALAEIAEgCQAfgLAiAJQAVAGARAMQAJgKALgJQAYgTAsgVQApgUAXgCQAXgDAYAIQAXAHARARQARAQAJAXQAJAXgCAXQgEA4g3AtQgiAcgpALQgsALgmgMQgUgGgPgMQgQATgYAMQgXALgYAAIgRgBg");
	var mask_5_graphics_913 = new cjs.Graphics().p("ACZMLQgMgCgLgFQgPAGgSABQgTACgSgFQgLACgMABQgfACgagOQgagOgQgaQgHgLgDgLQghAVgwgIQglgGgwgcQgsgZgxgpQgxgogMgiQgIgWADgWIgSgEQgzgQgsgvQgdgggQglQgRgoADgnQACgfAQgbIgDgCQgWgOgNgWQgOgXgDgjIgDg/IgBgyQAAgdADgVQAIgsAVgbQgTgSgKgYQgMgcABghQABgfANgdQAIgTASgaIAfgsIAZgmQAPgVAPgMQAUgQAagEIAAgCQADgeAUggQAIgNAggrIAfgpQATgVATgMQAagQAfgCQAWgBAVAHQAGgaASgXQASgWAagQQAugcBAgEQAlgDAgAIIAKgFQASgGAYgCIArAAIAzAAQAdACAVAIQAXAJATATQANAOAHARQAWgOAcgCQAtgEAgAZQALAJAIALQAGgGAHgEQATgNAVACQAJAAAAgEQAdABAYAUQAYAUAGAdQAFAYgJAaQAUADAIANQAFAIABALQACASgFANQgHASgQADQgRAGgQgQQgEgDgCgFIgDgIIgGgMIgBgCIgBABQgXAKgUgBQgWgBgUgNIgLgJQgJAMgMAJQgaAWghADQggADgegRQgfgRgOgdIgEgIQgSAKgXAGQggAIgygBQgjgBgUgEIgEAAQgKAEgLADIgdAEQgSACgJADQgNADgYAMQgYAMgNAEQgcAHgcgJIgGgCQgFANgHANQgJASgZAjQgfAtgQASQgeAgggAKIgRAEIgBAQQgFAegaArQggA1gGARQgLAjgJAPQgGAKgHAIQAOAPAIATQAJAWACAhIABA5QgBBEgCAQQgEAhgMAYQALAHAJAJQALAMAPAbQAPAbAKALQAHAIARANQAQAOAHAIQAeAhgEAwQAdAEAZAQQAMAIAaAYQAYAVAQAIIAmARQAYAJANALQAZAVAHAkQAJgFAJgEQAegLAiAJIAAAAQAcgIAfAIIAMAEIADgCQAfgLAiAJQAWAGARAMQAIgKAMgJQAYgTArgVQApgUAXgCQAIgBAIAAQAEgXAOgVQAUgdAggLQAfgLAiAJQAiAJAVAaQAVAZAEAeQAEAegNAcQgMAdgZARQgYARgfACIgLABQgIAwgxAoQgiAcgpALQgsALgngMQgTgGgQgMQgPATgYAMQgYALgYAAIgRgBg");
	var mask_5_graphics_914 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(892).to({graphics:mask_5_graphics_892,x:533,y:191.1}).wait(1).to({graphics:mask_5_graphics_893,x:521.4,y:188.7}).wait(1).to({graphics:mask_5_graphics_894,x:519.3,y:189.2}).wait(1).to({graphics:mask_5_graphics_895,x:511.8,y:188.1}).wait(1).to({graphics:mask_5_graphics_896,x:506.1,y:187.7}).wait(1).to({graphics:mask_5_graphics_897,x:497.9,y:186.1}).wait(1).to({graphics:mask_5_graphics_898,x:493.9,y:188.1}).wait(1).to({graphics:mask_5_graphics_899,x:487.4,y:187.6}).wait(1).to({graphics:mask_5_graphics_900,x:483,y:194.3}).wait(1).to({graphics:mask_5_graphics_901,x:479,y:198.7}).wait(1).to({graphics:mask_5_graphics_902,x:474.3,y:207.2}).wait(1).to({graphics:mask_5_graphics_903,x:473.8,y:212.7}).wait(1).to({graphics:mask_5_graphics_904,x:473.9,y:222.8}).wait(1).to({graphics:mask_5_graphics_905,x:475.9,y:228.2}).wait(1).to({graphics:mask_5_graphics_906,x:475.8,y:235.8}).wait(1).to({graphics:mask_5_graphics_907,x:476.3,y:241.2}).wait(1).to({graphics:mask_5_graphics_908,x:475.8,y:246.7}).wait(1).to({graphics:mask_5_graphics_909,x:475.3,y:248.2}).wait(1).to({graphics:mask_5_graphics_910,x:475.3,y:249.7}).wait(1).to({graphics:mask_5_graphics_911,x:474.9,y:249.7}).wait(1).to({graphics:mask_5_graphics_912,x:474.9,y:249.7}).wait(1).to({graphics:mask_5_graphics_913,x:474.7,y:249.7}).wait(1).to({graphics:mask_5_graphics_914,x:476.8,y:249.7}).wait(286).to({graphics:null,x:0,y:0}).wait(527));

	// otherbut
	this.instance_11 = new lib.circlebasic();
	this.instance_11.parent = this;
	this.instance_11.setTransform(493,251,1,1,0,0,0,68,68);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(892).to({_off:false},0).wait(288).to({alpha:0},20).to({_off:true},1).wait(526));

	// browser hline
	this.instance_12 = new lib.broswerhline("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(790.2,375.5,1,1,0,0,0,254.1,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(860).to({_off:false},0).to({x:488.5},38).to({x:423.9},6).to({x:374.2},6).to({x:357.6},6).wait(264).to({startPosition:0},0).to({alpha:0},20).to({_off:true},3).wait(524));

	// main circle
	this.instance_13 = new lib.circlebasic();
	this.instance_13.parent = this;
	this.instance_13.setTransform(266.3,251,1,1,0,0,0,68,68);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(812).to({_off:false},0).to({_off:true},387).wait(528));

	// bar gradient
	this.instance_14 = new lib.browserbarshadow("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(407.2,250.4,1,1,0,0,0,302.1,126.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(901).to({_off:false},0).to({alpha:0.301},29).wait(249).to({alpha:0.5},0).to({alpha:0.012},19).to({_off:true},1).wait(528));

	// but2
	this.instance_15 = new lib.butcompose("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(264.6,-40,0.732,0.732,0,0,0,48.6,48.6);
	this.instance_15.alpha = 0.039;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(546).to({_off:false},0).to({regX:48.9,regY:48.8,scaleX:1.17,scaleY:1.17,x:265.2,y:-34.6,alpha:1},13).to({regX:48.5,regY:48.5,scaleX:1,scaleY:1,x:264.6,y:-35},15).wait(214).to({startPosition:0},0).to({scaleX:0.42,scaleY:0.42,alpha:0},48).to({_off:true},1).wait(890));

	// but1
	this.instance_16 = new lib.butcompose("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(264.6,97.5,0.732,0.732,0,0,0,48.6,48.6);
	this.instance_16.alpha = 0.039;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(535).to({_off:false},0).to({regX:48.9,regY:48.8,scaleX:1.17,scaleY:1.17,x:265.2,y:97.9,alpha:1},16).to({regX:49,scaleX:1.13,scaleY:1.13,y:97.8},4).to({regX:48.5,regY:48.5,scaleX:1,scaleY:1,x:264.6,y:97.5},13).wait(220).to({startPosition:0},0).to({scaleX:0.44,scaleY:0.44,alpha:0},48).to({_off:true},1).wait(890));

	// plusgrow mask
	this.instance_17 = new lib.anothermasky("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(266.6,251.4,1,1,0,0,0,20.7,20.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(446).to({_off:false},0).to({scaleX:2.34,scaleY:2.41,x:266.7,y:252.4},28).to({regX:20.8,regY:20.8,scaleX:2.65,scaleY:2.73,x:266.9,y:252.7},7).to({_off:true},2).wait(1244));

	// FAB mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_430 = new cjs.Graphics().p("EgBYA+dQoRgknlhkQoqhymni2QiYhCkMkRQkFkKkal0QknmGjdl6Qj0mhhhk3Qg1iogXkRQgZkmARlJQApsjEEp4QDypPGqnJQF4mVH5keQCjhbEaiJQFCicE3iFQM7lgEnAAQCyAAGNBoQGtBwG+CvQIFDKGCDlQHDELDUEOQEFFLDZI6QDUIsBzJ6QB3KPgSI4QgUJni0GGQiMEskRFWQkIFMlZE8QlcFAlxD3QmBEDldCLQihBAl4AXQiqALi4AAQj0AAkNgTgAjUhuQhPBQAABwQAABwBPBPQBQBQBxAAQBvAABPhQQBQhPAAhwQAAhwhQhQQhPhPhvAAQhxAAhQBPg");
	var mask_6_graphics_431 = new cjs.Graphics().p("EgBUA7SQn1gjnNhfQoOhsmRitQiQg+j/kDQj3j9kMlhQkYlyjSlmQjomNhckmQgyiggVkDQgYkXAQk4QAnr7D2pXQDmoxGUmyQFlmAHfkPQCbhXEMiCQExiUEoh+QMQlOEYAAQCqAAF4BjQGXBqGnCmQHrDAFuDZQGtD9DIEAQD4E7DPIcQDJIQBtJaQBxJugSIaQgSJIirFyQiFEdkDFFQj7E7lHEsQlLEvldDrQluD1lLCEQiZA9llAWQihAKiuAAQjpAAj/gRgAjJhoQhLBMAABqQAABqBLBLQBMBMBrAAQBpAABLhMQBMhLAAhqQAAhqhMhMQhLhLhpAAQhrAAhMBLg");
	var mask_6_graphics_432 = new cjs.Graphics().p("EgBPA4GQnbghm0haQnyhll7ikQiJg7jwj2Qjrjvj9lNQkJlfjHlTQjbl3hXkXQgviXgVj1QgWkIAPkoQAlrRDpo3QDaoTF+mbQFSlsHFkAQCShSD+h7QEhiMEYh3QLmk8EJAAQCgAAFlBdQGABlGRCcQHQC2FbDNQGVDxC+DyQDrEpDDIAQC/HzBnI6QBrJMgRH+QgRIpiiFdQh+EOj1EzQjuEqk1EcQk5EflLDeQlaDpk5B9QiRA6lSAUQiYAJilAAQjcAAjxgQgAi+hiQhHBHAABlQAABlBHBHQBIBHBlAAQBjAABIhHQBHhHAAhlQAAhlhHhHQhIhHhjAAQhlAAhIBHg");
	var mask_6_graphics_433 = new cjs.Graphics().p("EgBLA06QnAgfmbhUQnVhglmibQiBg3jjjoQjdjijvk6Qj6lLi7lAQjPlihSkHQgtiOgTjnQgVj5AOkXQAjqpDcoWQDNn1FomEQE/lXGsjyQCKhNDvh0QERiEEHhxQK9kqD5AAQCYAAFQBYQFrBfF6CUQG2CrFHDCQF+DjCzDkQDeEZC4HiQCzHXBiIZQBlIsgQHgQgRIKiZFKQh2D+jnEiQjgEZkkEMQknEPk4DRQlHDbknB2QiJA3k+ATQiQAJicAAQjPAAjkgQgAizhdQhDBEAABeQAABgBDBDQBDBDBgAAQBeAABDhDQBEhDAAhgQAAhehEhEQhDhDheAAQhgAAhDBDg");
	var mask_6_graphics_434 = new cjs.Graphics().p("EgBGAxvQmlgdmDhQQm5halQiSQh5g0jVjaQjQjTjhkoQjrk3iwktQjClMhOj3QgpiGgTjZQgUjqAOkGQAhqADOn3QDBnWFTltQEslCGSjjQCBhJDhhtQEAh8D4hqQKSkYDrAAQCOAAE8BTQFVBZFjCLQGcChEzC2QFoDVCoDWQDQEICtHGQCpG6BcH5QBeIKgOHEQgQHqiQE2QhvDvjZERQjTEHkSD8QkVD/kmDFQkzDOkVBuQiAA0ksASQiHAIiSAAQjDAAjWgOgAiphXQg+BAAABYQAABaA+A/QBAA/BaAAQBYAAA/g/QBAg/AAhaQAAhYhAhAQg/g/hYAAQhaAAhAA/g");
	var mask_6_graphics_435 = new cjs.Graphics().p("EgBCAujQmKgblphLQmdhUk7iIQhxgxjIjMQjDjGjSkVQjckjilkZQi2k4hIjnQgnh9gRjMQgTjbANj1QAepWDCnXQC1m5E9lUQEYkuF4jVQB6hEDShmQDwh0DohjQJokHDcAAQCFAAEnBOQFABTFMCCQGCCXEfCrQFRDHCdDJQDDD3CiGoQCeGfBWHYQBYHogNGnQgPHLiHEiQhoDgjLD/QjFD3kBDsQkEDukSC4QkfDBkEBoQh4AwkZARQh+AIiJAAQi2AAjJgOgAiehRQg7A7AABTQAABUA7A7QA8A7BUAAQBSAAA7g7QA8g7AAhUQAAhTg8g7Qg7g7hSAAQhUAAg8A7g");
	var mask_6_graphics_436 = new cjs.Graphics().p("EgA9ArXQlvgZlRhFQmBhPklh/Qhqgti6i+Qi1i5jEkCQjNkPiZkGQiqkihDjYQglh0gQi+QgRjMAMjkQAcouC1m2QCombEnk9QEGkaFejGQBxg/DEhfQDghsDYhdQI+j0DMAAQB8AAEUBIQEpBOE2B5QFnCNEMCeQE5C6CTC7QC1DmCXGMQCUGCBQG4QBSHHgNGKQgNGrh+EPQhhDQi9DuQi4DmjvDcQjyDdkACsQkLC0jyBgQhwAtkFAQQh2AHiAAAQiqAAi6gNgAiThMQg3A4AABNQAABOA3A3QA4A3BOAAQBNAAA3g3QA3g3AAhOQAAhNg3g4Qg3g3hNAAQhOAAg4A3g");
	var mask_6_graphics_437 = new cjs.Graphics().p("EAAAAoMQlUgYk4hAQllhJkQh1QhhgritiwQioiri1jvQi+j7iOjzQidkMg/jIQgihsgOiwQgQi9AKjUQAboECnmXQCcl8ESkmQDykFFEi3QBpg7C2hYQDPhlDIhVQIUjjC9AAQBzAAEABDQETBIEfBxQFNCCD4CTQEjCsCICtQCoDWCMFuQCIFmBKGYQBNGlgMFtQgNGMh0D7QhaDBiwDcQipDVjeDMQjgDOjtCfQj4CmjhBaQhnApjyAPQhuAHh2AAQidAAitgMgAhPhGQgzAzAABIQAABIAzAzQAzAzBHAAQBJAAAzgzQAzgzAAhIQAAhIgzgzQgzgzhJAAQhHAAgzAzg");
	var mask_6_graphics_438 = new cjs.Graphics().p("EABoAlqQk4gWkfg7QlIhDj7htQhagmifiiQiaieinjcQivjniDjgQiRj3g5i4QgfhkgOiiQgPiuAKjDQAZnbCZl2QCQlfD8kPQDfjvEriqQBhg2CnhRQC+hcC5hPQHpjQCvAAQBqAADrA9QD+BDEIBnQEyB4DlCHQELCfB+CfQCaDFCBFRQB+FKBEF3QBGGEgLFQQgLFthrDnQhTCyiiDKQicDFjNC7QjOC9jaCTQjkCZjPBTQhfAmjfANQhlAGhsAAQiSAAiggKgAAfgXQgtAuAABDQAABDAtAuQAwAwBCAAQBDAAAvgwQAvguAAhDQAAhDgvguQgvgvhDAAQhCAAgwAvg");
	var mask_6_graphics_439 = new cjs.Graphics().p("EADSAkGQkdgUkHg2Qksg9jlhjQhSgkiRiUQiOiQiYjJQigjTh4jNQiEjig1ioQgchbgNiUQgNifAJiyQAWmzCNlWQCDlADnj3QDLjcESiaQBYgyCZhKQCuhUCphIQG+i/CgAAQBhAADXA5QDoA8DyBfQEXBtDRB8QD1CRByCSQCOCzB2E1QByEtA/FXQBAFjgKEzQgLFNhhDTQhMCjiUC5QiPCzi7CsQi8CtjICFQjQCNi9BLQhXAjjMAMQhcAGhjAAQiFAAiSgKgACPBWQgrArAAA9QAAA9ArArQArArA9AAQA9AAArgrQArgrAAg9QAAg9grgrQgrgrg9AAQg9AAgrArg");
	var mask_6_graphics_440 = new cjs.Graphics().p("EAE7AiiQkDgRjtgyQkQg3jPhaQhLggiDiGQiAiCiKi3QiRi/hti5Qh4jNgviZQgahSgLiGQgMiQAIihQAUmKB/k2QB3kiDRjgQC5jHD3iMQBQgtCLhDQCdhMCZhBQGVitCRAAQBXAADDAzQDSA3DbBVQD+BkC9BwQDeCDBnCEQCACjBrEXQBoERA4E3QA7FBgJEWQgKEuhYC/QhFCUiGCnQiCCjipCbQiqCdi1B5Qi9B/irBEQhPAgi5ALQhTAFhaAAQh4AAiFgJgAD/DDQgnAoAAA3QAAA3AnAnQAnAnA3AAQA3AAAngnQAngnAAg3QAAg3gngoQgngmg3AAQg3AAgnAmg");
	var mask_6_graphics_441 = new cjs.Graphics().p("EAGlAg/QjpgQjUgsQj0gyi5hQQhDgdh2h4Qhzh1h8ijQiBishiimQhri4griIQgXhKgKh4QgLiBAIiRQASlhBykVQBqkEC7jJQCmiyDeh9QBHgpB9g8QCNhECJg7QFqiaCCAAQBPAACuAtQC9AxDEBNQDjBZCqBlQDGB1BdB3QBzCRBfD7QBeD0AyEWQA0EggID6QgIEOhQCsQg9CEh4CWQh0CSiYCLQiZCMiiBtQipByiZA9QhHAcimAKQhKAFhRAAQhsAAh2gIgAFuExQgiAjAAAyQAAAxAiAjQAkAjAxAAQAxAAAjgjQAjgjAAgxQAAgygjgjQgjgjgxAAQgxAAgkAjg");
	var mask_6_graphics_442 = new cjs.Graphics().p("AIOfbQjNgOi9gnQjWgsikhHQg8gZhohrQhlhnhuiQQhziYhViTQhfiigmh5QgUhBgJhqQgKhyAGiAQARk5Bkj0QBfjmCliyQCSidDEhvQBAgkBtg1QB8g8B5g0QFCiJBzAAQBFAACaApQCnArCtBEQDJBPCWBYQCwBoBSBpQBlCBBVDdQBSDYAtD2QAuD/gHDcQgIDwhGCXQg2B1hqCFQhnCBiGB7QiHB8iPBgQiWBkiIA2Qg+AZiTAJQhBAEhIAAQhfAAhpgHgAHeGfQgfAfAAAsQAAArAfAfQAfAfAsAAQArAAAfgfQAfgfAAgrQAAgsgfgfQgfgfgrAAQgsAAgfAfg");
	var mask_6_graphics_443 = new cjs.Graphics().p("AJ4d4QizgNikghQi7gniOg9QgzgWhahdQhZhahfh9QhkiEhKh/QhTiNgghpQgSg5gIhcQgIhjAFhwQAOkPBYjWQBSjGCPibQCAiICqhhQA3gfBeguQBtg0BpgtQEXh3BkAAQA8AACHAjQCQAmCXA7QCuBECDBNQCYBbBIBbQBYBwBJDAQBIC7AnDWQAoDdgGDAQgHDQg9CDQgvBmhcBzQhaBwh0BrQh2Bsh8BTQiCBYh2AvQg2AWh/AHQg6AEg+AAQhSAAhbgGgAJOIMQgbAbAAAmQAAAmAbAbQAbAbAmAAQAmAAAagbQAbgbAAgmQAAgmgbgbQgagagmAAQgmAAgbAag");
	var mask_6_graphics_444 = new cjs.Graphics().p("ALhcUQiYgKiLgdQifghh5g0QgrgThNhOQhKhMhRhrQhVhwg/hsQhGh4gchZQgPgwgGhOQgIhVAFheQAMjnBKi1QBGipB6iCQBrh0CRhSQAugbBRgnQBcgsBagnQDthlBVAAQAzAAByAeQB7AgB/AyQCVA6BuBCQCCBNA8BNQBLBfA/CiQA8CgAhC2QAjC8gGCjQgFCwg0BwQgoBWhPBiQhLBfhjBbQhkBbhqBHQhuBKhkAoQguAThsAGQgxADg0AAQhHAAhNgFgAK+J6QgXAXAAAgQAAAhAXAWQAWAXAhAAQAgAAAXgXQAXgWAAghQAAgggXgXQgXgWggAAQghAAgWAWg");
	var mask_6_graphics_445 = new cjs.Graphics().p("ANKaxQh8gJhzgYQiCgahkgrQgkgQg/hAQg+g/hChYQhGhcg0hZQg4higXhJQgNgogFhAQgGhGAEhNQAKi+A9iVQA4iLBkhsQBZhgB3hDQAngWBCgfQBMglBJgfQDDhTBGAAQAqAABeAZQBlAaBpApQB6AwBbA1QBqA/AyA/QA+BPAzCGQAyCDAbCVQAcCbgECGQgFCRgqBcQghBHhBBRQg+BOhRBKQhSBMhXA6QhbA9hSAhQgmAPhZAFQgoADgrAAQg6AAhAgEgAMtLoQgSATAAAaQAAAbASASQATATAbAAQAaAAATgTQATgSAAgbQAAgagTgTQgTgTgaAAQgbAAgTATg");
	var mask_6_graphics_446 = new cjs.Graphics().p("AO0ZNQhigHhagSQhmgVhOgiQgcgMgygzQgwgxg0hFQg3hIgphFQgthOgSg5QgJgfgFgzQgEg2ADg9QAHiUAwh1QAthtBPhVQBFhLBeg1QAegRA0gZQA7gdA6gYQCZhBA3AAQAhAABJATQBPAVBTAgQBfAlBHArQBUAxAnAyQAwA9AoBpQAoBnAVB1QAWB6gEBpQgDBxghBIQgaA4gzA/QgxA9g/A7QhBA7hEAuQhHAwhBAZQgdAMhGAEQgfACgiAAQgtAAgygDgAOdNWQgPAOAAAVQAAAVAPAPQAPAOAUAAQAVAAAPgOQAPgPAAgVQAAgVgPgOQgPgPgVAAQgUAAgPAPg");
	var mask_6_graphics_447 = new cjs.Graphics().p("AgQLjQhhgHhagSIAAAAQhmgVhPgiIAAAAQgcgMgxgzIAAAAQgwgxg1hEIAAAAQg2hJgphFIAAAAQgthOgSg5IAAAAQgKgfgEgzIAAAAQgFg2ADg9IAAAAQAIiTAwh1IAAAAQAthtBPhVIAAAAQBFhLBdg1IAAAAQAegQA1gaIAAAAQA7gdA6gYIAAAAQCYhBA2AAIAAAAQAhAABKATIAAAAQBPAVBSAgIAAAAQBgAlBHArIAAAAQBUAxAnAyIAAAAQAwA9AoBpIAAAAQAnBnAWB1IAAAAQAWB5gEBpIAAAAQgDBxgiBIIAAAAQgaA4gyA/IAAAAQgxA9hAA7IAAAAQhAA7hEAuIAAAAQhHAwhBAZIAAAAQgeAMhFAEIAAAAQgfACgiAAIAAAAQguAAgxgDgAADCIIgBAAIAAAAIABAAgAADCIQAPAAAPgFIAAAAQgPAFgPAAgAgoB+IAAAAIAAAAIAAAAgAAXh5QAaALAPAVIAAAAQAQAZAAAiIAAAAQAAAVACAGIAAAAIAEALIAAAAIAFAMQADALAAAMIAAAAQAAgMgDgLIAAAAIgFgMIgEgLIAAAAQgCgGAAgVIAAAAQAAgigQgZIAAAAQgPgVgagLIAAAAIAAAAIAAAAIAAAAgAgbh+QgaAGgTATIAAAAQgTAUgFAaIAAAAQgCAKAAAXIAAAAIgBAwIABgwQAAgXACgKIAAAAQAFgaATgUIAAAAQATgTAagGIAAAAIAAAAgAgah+IAQgBIAAAAIgQABgAgJh/IgBAAIAAAAIABAAg");
	var mask_6_graphics_451 = new cjs.Graphics().p("AHmV4QjNjNAAkiQAAkiDNjNQDNjNEiAAQEiAADODNQDMDNAAEiQAAEijMDNQjODNkiAAQkiAAjNjNg");
	var mask_6_graphics_812 = new cjs.Graphics().p("AkdLoIQvwuIQvQuIwvQwg");
	var mask_6_graphics_813 = new cjs.Graphics().p("AkRLyIQuwuIQwQuIwwQwg");
	var mask_6_graphics_814 = new cjs.Graphics().p("AkGL8IQuwuIQwQuIwwQwg");
	var mask_6_graphics_815 = new cjs.Graphics().p("Aj7MGIQvwuIQvQuIwvQwg");
	var mask_6_graphics_816 = new cjs.Graphics().p("AjvMQIQuwuIQvQuIwvQwg");
	var mask_6_graphics_817 = new cjs.Graphics().p("AjkMaIQuwuIQwQuIwwQwg");
	var mask_6_graphics_818 = new cjs.Graphics().p("AjZMkIQvwuIQvQuIwvQvg");
	var mask_6_graphics_819 = new cjs.Graphics().p("AjOMuIQvwvIQvQvIwvQvg");
	var mask_6_graphics_820 = new cjs.Graphics().p("AjCM4IQuwvIQwQvIwwQvg");
	var mask_6_graphics_821 = new cjs.Graphics().p("Ai3NCIQvwvIQvQvIwvQvg");
	var mask_6_graphics_822 = new cjs.Graphics().p("AisNMIQvwvIQvQvIwvQvg");
	var mask_6_graphics_823 = new cjs.Graphics().p("AigNWIQuwvIQwQvIwwQvg");
	var mask_6_graphics_824 = new cjs.Graphics().p("AiVNgIQuwvIQwQvIwwQvg");
	var mask_6_graphics_825 = new cjs.Graphics().p("AiKNqIQvwvIQvQvIwvQvg");
	var mask_6_graphics_826 = new cjs.Graphics().p("Ah+N0IQuwvIQwQvIwwQvg");
	var mask_6_graphics_827 = new cjs.Graphics().p("AhzN+IQuwvIQwQvIwwQvg");
	var mask_6_graphics_828 = new cjs.Graphics().p("AhoOIIQvwvIQvQvIwvQvg");
	var mask_6_graphics_829 = new cjs.Graphics().p("AhcORIQuwuIQwQuIwwQwg");
	var mask_6_graphics_830 = new cjs.Graphics().p("AhRObIQuwuIQwQuIwwQwg");
	var mask_6_graphics_831 = new cjs.Graphics().p("AhGOlIQvwuIQvQuIwvQwg");
	var mask_6_graphics_832 = new cjs.Graphics().p("Ag6OvIQuwuIQvQuIwvQwg");
	var mask_6_graphics_833 = new cjs.Graphics().p("AgvO5IQuwuIQwQuIwwQwg");
	var mask_6_graphics_834 = new cjs.Graphics().p("AgkPDIQvwuIQvQuIwvQwg");
	var mask_6_graphics_835 = new cjs.Graphics().p("AgZPNIQvwuIQvQuIwvQwg");
	var mask_6_graphics_836 = new cjs.Graphics().p("AgNPXIQuwuIQwQuIwwQwg");
	var mask_6_graphics_837 = new cjs.Graphics().p("AgCPhIQvwuIQvQuIwvQwg");
	var mask_6_graphics_838 = new cjs.Graphics().p("AAIPrIQwwuIQvQuIwvQwg");
	var mask_6_graphics_839 = new cjs.Graphics().p("AAUP1IQvwuIQwQuIwwQvg");
	var mask_6_graphics_840 = new cjs.Graphics().p("AAfP/IQvwvIQwQvIwwQvg");
	var mask_6_graphics_841 = new cjs.Graphics().p("AAqQJIQwwvIQvQvIwvQvg");
	var mask_6_graphics_842 = new cjs.Graphics().p("AA2QTIQvwvIQwQvIwwQvg");
	var mask_6_graphics_843 = new cjs.Graphics().p("ABBQdIQvwvIQwQvIwwQvg");
	var mask_6_graphics_844 = new cjs.Graphics().p("ABMQnIQwwvIQvQvIwvQvg");
	var mask_6_graphics_845 = new cjs.Graphics().p("ABYQxIQvwwIQwQwIwwQvg");
	var mask_6_graphics_846 = new cjs.Graphics().p("ABjQ7IQvwwIQwQwIwwQvg");
	var mask_6_graphics_847 = new cjs.Graphics().p("ABuRFIQwwwIQvQwIwvQvg");
	var mask_6_graphics_848 = new cjs.Graphics().p("AB5RPIQwwwIQvQwIwvQvg");
	var mask_6_graphics_849 = new cjs.Graphics().p("ACFRZIQvwwIQwQwIwwQvg");
	var mask_6_graphics_850 = new cjs.Graphics().p("ACQRjIQwwwIQvQwIwvQvg");
	var mask_6_graphics_851 = new cjs.Graphics().p("ACbRsIQwwvIQvQvIwvQwg");
	var mask_6_graphics_852 = new cjs.Graphics().p("ACnR2IQvwvIQwQvIwwQwg");
	var mask_6_graphics_853 = new cjs.Graphics().p("ACySAIQwwvIQvQvIwvQwg");
	var mask_6_graphics_854 = new cjs.Graphics().p("AC9SKIQwwvIQvQvIwvQwg");
	var mask_6_graphics_855 = new cjs.Graphics().p("ADJSUIQvwvIQwQvIwwQwg");
	var mask_6_graphics_856 = new cjs.Graphics().p("ADUSeIQvwvIQwQvIwwQwg");
	var mask_6_graphics_857 = new cjs.Graphics().p("ADfSoIQwwvIQvQvIwvQwg");
	var mask_6_graphics_858 = new cjs.Graphics().p("ADrSyIQvwvIQwQvIwwQwg");
	var mask_6_graphics_859 = new cjs.Graphics().p("AD2S8IQvwvIQwQvIwwQwg");
	var mask_6_graphics_860 = new cjs.Graphics().p("AEBTGIQwwvIQvQvIwvQwg");
	var mask_6_graphics_861 = new cjs.Graphics().p("AENTQIQvwvIQvQvIwvQwg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(430).to({graphics:mask_6_graphics_430,x:269.2,y:243.4}).wait(1).to({graphics:mask_6_graphics_431,x:269.1,y:243.7}).wait(1).to({graphics:mask_6_graphics_432,x:268.9,y:244.1}).wait(1).to({graphics:mask_6_graphics_433,x:268.8,y:244.4}).wait(1).to({graphics:mask_6_graphics_434,x:268.6,y:244.8}).wait(1).to({graphics:mask_6_graphics_435,x:268.4,y:245.1}).wait(1).to({graphics:mask_6_graphics_436,x:268.3,y:245.5}).wait(1).to({graphics:mask_6_graphics_437,x:262.4,y:245.8}).wait(1).to({graphics:mask_6_graphics_438,x:252.2,y:242}).wait(1).to({graphics:mask_6_graphics_439,x:241.9,y:232}).wait(1).to({graphics:mask_6_graphics_440,x:231.7,y:221.9}).wait(1).to({graphics:mask_6_graphics_441,x:221.4,y:211.9}).wait(1).to({graphics:mask_6_graphics_442,x:211.2,y:201.8}).wait(1).to({graphics:mask_6_graphics_443,x:200.9,y:191.8}).wait(1).to({graphics:mask_6_graphics_444,x:190.7,y:181.7}).wait(1).to({graphics:mask_6_graphics_445,x:180.4,y:171.7}).wait(1).to({graphics:mask_6_graphics_446,x:170.2,y:161.6}).wait(1).to({graphics:mask_6_graphics_447,x:266.6,y:249}).wait(4).to({graphics:mask_6_graphics_451,x:168.1,y:160.5}).wait(361).to({graphics:mask_6_graphics_812,x:185.7,y:181.6}).wait(1).to({graphics:mask_6_graphics_813,x:186.9,y:182.6}).wait(1).to({graphics:mask_6_graphics_814,x:188,y:183.6}).wait(1).to({graphics:mask_6_graphics_815,x:189.1,y:184.6}).wait(1).to({graphics:mask_6_graphics_816,x:190.2,y:185.6}).wait(1).to({graphics:mask_6_graphics_817,x:191.4,y:186.6}).wait(1).to({graphics:mask_6_graphics_818,x:192.5,y:187.5}).wait(1).to({graphics:mask_6_graphics_819,x:193.6,y:188.5}).wait(1).to({graphics:mask_6_graphics_820,x:194.8,y:189.5}).wait(1).to({graphics:mask_6_graphics_821,x:195.9,y:190.5}).wait(1).to({graphics:mask_6_graphics_822,x:197,y:191.5}).wait(1).to({graphics:mask_6_graphics_823,x:198.2,y:192.5}).wait(1).to({graphics:mask_6_graphics_824,x:199.3,y:193.5}).wait(1).to({graphics:mask_6_graphics_825,x:200.4,y:194.5}).wait(1).to({graphics:mask_6_graphics_826,x:201.6,y:195.5}).wait(1).to({graphics:mask_6_graphics_827,x:202.7,y:196.5}).wait(1).to({graphics:mask_6_graphics_828,x:203.8,y:197.5}).wait(1).to({graphics:mask_6_graphics_829,x:205,y:198.5}).wait(1).to({graphics:mask_6_graphics_830,x:206.1,y:199.5}).wait(1).to({graphics:mask_6_graphics_831,x:207.2,y:200.5}).wait(1).to({graphics:mask_6_graphics_832,x:208.3,y:201.5}).wait(1).to({graphics:mask_6_graphics_833,x:209.5,y:202.5}).wait(1).to({graphics:mask_6_graphics_834,x:210.6,y:203.5}).wait(1).to({graphics:mask_6_graphics_835,x:211.7,y:204.5}).wait(1).to({graphics:mask_6_graphics_836,x:212.9,y:205.5}).wait(1).to({graphics:mask_6_graphics_837,x:214,y:206.5}).wait(1).to({graphics:mask_6_graphics_838,x:215.1,y:207.5}).wait(1).to({graphics:mask_6_graphics_839,x:216.3,y:208.4}).wait(1).to({graphics:mask_6_graphics_840,x:217.4,y:209.4}).wait(1).to({graphics:mask_6_graphics_841,x:218.5,y:210.4}).wait(1).to({graphics:mask_6_graphics_842,x:219.7,y:211.4}).wait(1).to({graphics:mask_6_graphics_843,x:220.8,y:212.4}).wait(1).to({graphics:mask_6_graphics_844,x:221.9,y:213.4}).wait(1).to({graphics:mask_6_graphics_845,x:223.1,y:214.4}).wait(1).to({graphics:mask_6_graphics_846,x:224.2,y:215.4}).wait(1).to({graphics:mask_6_graphics_847,x:225.3,y:216.4}).wait(1).to({graphics:mask_6_graphics_848,x:226.4,y:217.4}).wait(1).to({graphics:mask_6_graphics_849,x:227.6,y:218.4}).wait(1).to({graphics:mask_6_graphics_850,x:228.7,y:219.4}).wait(1).to({graphics:mask_6_graphics_851,x:229.8,y:220.4}).wait(1).to({graphics:mask_6_graphics_852,x:231,y:221.4}).wait(1).to({graphics:mask_6_graphics_853,x:232.1,y:222.4}).wait(1).to({graphics:mask_6_graphics_854,x:233.2,y:223.4}).wait(1).to({graphics:mask_6_graphics_855,x:234.4,y:224.4}).wait(1).to({graphics:mask_6_graphics_856,x:235.5,y:225.4}).wait(1).to({graphics:mask_6_graphics_857,x:236.6,y:226.4}).wait(1).to({graphics:mask_6_graphics_858,x:237.8,y:227.4}).wait(1).to({graphics:mask_6_graphics_859,x:238.9,y:228.4}).wait(1).to({graphics:mask_6_graphics_860,x:240,y:229.4}).wait(1).to({graphics:mask_6_graphics_861,x:241.1,y:230.3}).wait(866));

	// press splode
	this.instance_18 = new lib.splodecircle("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(260.4,263.2,1.732,1.732,0,0,0,17.8,17.8);
	this.instance_18.alpha = 0.039;
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(508).to({_off:false},0).to({scaleX:4.27,scaleY:4.27,x:266.5,y:251.2,alpha:0},16).to({_off:true},1).wait(1202));

	// Layer 4
	this.instance_19 = new lib.splodecircle("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(266,252.2,3.944,3.944,0,0,0,17.8,17.8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(505).to({_off:false},0).to({x:266.5,y:251.2,alpha:0.18},16).wait(12).to({x:266.4},0).to({x:266.5,y:252.2,alpha:0},13).to({_off:true},2).wait(1179));

	// mr. butt
	this.instance_20 = new lib.circlefill("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(266.3,251,1,1,0,0,0,68,68);

	this.instance_21 = new lib.circleFAB("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(266.3,251,1,1,-90,0,0,68,68);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},430).to({state:[{t:this.instance_21}]},16).to({state:[{t:this.instance_21}]},27).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},54).to({state:[{t:this.instance_21}]},16).to({state:[{t:this.instance_21}]},7).to({state:[{t:this.instance_21}]},14).to({state:[]},299).to({state:[]},20).wait(836));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(446).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-16.8},27).to({rotation:-5.5,y:250.9},4).to({scaleX:1,scaleY:1,rotation:0,y:251},4).wait(54).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:-60,x:266.4,y:251.1},16).to({scaleX:1,scaleY:1,rotation:-52.6,x:266.3},7).to({scaleX:1,scaleY:1,rotation:-45,y:251},14).to({_off:true},299).wait(856));

	// mask for lines (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_431 = new cjs.Graphics().p("EgedApLMAAAhSVMA87AAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(431).to({graphics:mask_7_graphics_431,x:186.5,y:245.6}).wait(1296));

	// hl1
	this.instance_22 = new lib.hline("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(583.3,79,0.999,1,0,0,0,198.3,0);
	this.instance_22.alpha = 0.199;
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(443).to({_off:false},0).to({regX:198.4,regY:0.1,scaleX:1,x:234.3,y:79.1},37).to({regX:205.1,regY:0,x:176.2,y:79},12).wait(291).to({startPosition:0},0).to({x:592.2},23).to({_off:true},1).wait(920));

	// hl2
	this.instance_23 = new lib.hline("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-210.7,218,0.999,1,0,0,0,198.3,0);
	this.instance_23.alpha = 0.199;
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(443).to({_off:false},0).to({regY:0.1,scaleX:1,x:120.9,y:218.1},37).to({regX:205.1,regY:0,x:176.2,y:218},12).wait(291).to({startPosition:0},0).to({x:592.2},23).to({_off:true},1).wait(920));

	// hlbot
	this.instance_24 = new lib.hline("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(589,366.4,1,1,0,0,0,205.1,0);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(443).to({_off:false},0).to({x:239.3},37).to({x:181},12).wait(291).to({startPosition:0},0).to({x:597},23).to({_off:true},1).wait(920));

	// bot bot line
	this.instance_25 = new lib.hline("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-204.9,483.1,1,1,0,0,0,205.1,0);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(440).to({_off:false},0).to({x:181.1},40).wait(310).to({x:185.1},0).to({x:601.1},38).to({_off:true},1).wait(898));

	// buttshadow
	this.instance_26 = new lib.shadowFAB("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(267.7,254.4,1,1,0,0,0,140.2,134.3);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(452).to({_off:false},0).to({x:268.2,alpha:0.25},31).wait(324).to({startPosition:0},0).to({alpha:0},30).to({_off:true},35).wait(855));

	// anb mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_477 = new cjs.Graphics().p("EAL+AgnQgWgEgSgOQgSgOgJgWQgFgMgBgMIABAAQAcABAaAKIAaAIIAKABIAFADIANAHIgBApIAAAHQgIABgJAAIgSgBgAL1d5IADgBIAAADIgDgCgAMGd3IABAAIAAABg");
	var mask_8_graphics_478 = new cjs.Graphics().p("AgHBXQgWgEgRgNIAAAAQgSgPgKgVIAAAAQgFgMgBgNIAAAAIABAAIAAAAIALABIAAAAQgDAGAAAHIAAAAQAAgHADgGIAAAAIADgFIAAAAQAHgJAOgEIAAAAQANgEAOADIAAAAQAKACAOAFIAAAAIAZAJIAAAAIAYAIIAAAAQANAGAGAIIAAAAQAIALgCAPIAAAAQgCAOgLAIIAAAAQgOAKgbgFIAAAAIAAAFIAAAAQgIACgJAAIAAAAIgRgCgAgQhVIAEgBIAAAAIAAADIAAAAIgEgCgAAAhYIABAAIAAAAIAAABIAAAAg");
	var mask_8_graphics_479 = new cjs.Graphics().p("EAL+AgnQgWgEgSgOQgSgOgJgWQgJgWACgXQADgWAOgUQAOgTAVgJQAPgHAQAAIADAKIAHAOQANAeADApQACAXgCAzIAAAHQgJABgIAAIgSgBg");
	var mask_8_graphics_480 = new cjs.Graphics().p("AgCBXQgWgEgRgNIAAAAQgSgPgKgVIAAAAQgJgWADgWIAAAAQACgXAPgTIAAAAQAOgTAUgKIAAAAQAPgGAPgBIAAAAIAEAKIAAAAIAGAPIAAAAQAFAJADALIAAAAIgFACIAAAAQgIAEgGAHIAAAAQgGALAAAXIAAAAIAAAGIAAAAQAAAVACALIAAAAQADARAKAJIAAAAQAIAHAKADIAAAAIAAACIAAAAIAAAHIAAAAQgIACgJAAIAAAAIgRgCgAAhBOIgBAAIAAAAQgKgDgIgHIAAAAQgKgJgDgRIAAAAQgCgLAAgVIAAAAIAAgGIAAAAQAAgXAGgLIAAAAQAGgHAIgEIAAAAIAFgCIAAAAQAGgCAHABIAAAAQAUACAHATIAAAAQADAHABAMIAAAAIABATIAAAAIAEAOIAAAAIADAOIAAAAQABALgGAKIAAAAQgHAJgKAEIAAAAQgGACgGAAIAAAAIgJgBg");
	var mask_8_graphics_481 = new cjs.Graphics().p("EALcAgnQgWgEgRgOQgSgOgKgWQgJgWADgXQACgWAPgUQAOgTAUgJQAbgMAeAHQAfAHASAXQATAXAAAfQABAfgRAYQgQAXgcAJQgMAEgOAAIgRgBg");
	var mask_8_graphics_482 = new cjs.Graphics().p("AAzBjQgKgBgIgFIAAAAQgHgGgEgIIAAAAIgDgIIAAAAQgCgIAAgNIAAAAQAAANACAIIAAAAIgJAEIAAAAQgUAGgWgEIAAAAQgWgEgSgNIAAAAQgSgPgJgVIAAAAQgJgWACgWIAAAAQADgXAOgTIAAAAQAOgTAVgKIAAAAQAagMAeAIIAAAAQAWAFAQAOIAAAAIAIgCIAAAAIAGgGIAAAAQAJgHAMABIAAAAQAMABAIAIIAAAAQAIAIADAOIAAAAQACAJAAARIAAAAIgBBOQAAAegJAMIAAAAQgKAMgRgBIAAAAIgIgBIAAAAQgFACgGAAIAAAAIgBAAg");
	var mask_8_graphics_483 = new cjs.Graphics().p("EAKlAgnQgWgEgSgOQgSgOgJgWQgJgWACgXQADgWAOgUQAOgTAVgJQAagMAfAHIAKADQAHgFAIgEQAZgKAfABQAuADAaAYQATASAFAbQAFAbgJAZQgMAbgZARQgbAQgkgBQgYgBgTgHQgKAHgMAEQgNAEgNAAIgRgBg");
	var mask_8_graphics_484 = new cjs.Graphics().p("AB+BwQgKAAgIgHIAAAAQgIgGgDgJIAAAAQgEgKACgVIAAAAIABgKIAAAAQACgeAAgeIAAAAIgBgpIAAAAIAAgKIAAAAIAAgLIAAAAQACgSAHgJIAAAAQAKgMARABIAAAAQASAAAIANIAAAAQAGAHABAMIAAAAIACAUIAAAAIAABxQAAAegIAMIAAAAQgFAIgKAFIAAAAQgIADgHAAIAAAAIgEAAgAhcBVQgWgEgSgOIAAAAQgSgOgJgWIAAAAQgJgWACgWIAAAAQADgWAOgUIAAAAQAOgTAVgJIAAAAQAagMAfAHIAAAAIAKADIAAAAQAHgFAIgEIAAAAQAZgKAeABIAAAAQAuADAaAYIAAAAIACADIAAAAIAAALIAAAAIAAAKIAAAAIABApIAAAAQAAAegCAeIAAAAQgIAIgKAHIAAAAQgbAQgkgBIAAAAQgXgBgTgHIAAAAQgKAHgMAEIAAAAQgNAEgOAAIAAAAIgQgBg");
	var mask_8_graphics_485 = new cjs.Graphics().p("EAJuAgnQgWgEgSgOQgSgOgJgWQgJgWACgXQADgWAOgUQAOgTAVgJQAagMAfAHIAKADQAHgFAIgEQAZgKAfABQAtADAaAYQAXgQAfACQAiACAXAWQAWAWADAiQAEAigTAaQgQAXgbAJQgeALgfgNQgRgGgMgLIgEACQgbAQgkgBQgYgBgTgHQgKAHgMAEQgNAEgNAAIgRgBg");
	var mask_8_graphics_486 = new cjs.Graphics().p("EANJAgtQgJgEgGgHIgBgDQgXAEgYgJQgRgHgMgLIgEACQgbARgkgCQgYAAgTgIQgKAHgMAFQgVAGgWgEQgWgEgSgNQgSgPgJgVQgJgWACgXQADgXAOgTQAOgTAVgKQAagMAfAIIAKADQAHgGAIgDQAZgLAfACQAtACAaAYQAXgQAfADQAiACAXAWQAMALAGAPIAIgQQAFgKAHgFQAJgHANABQAMABAJAIQAFAEADAGQALACAJAHQAJAHADALQADALgFAKQgCAFgGAGIgKAJIgPAUQgIAJgQALIgaASIgMAKIgLAHQgOAOgMACIgGABQgGAAgGgDg");
	var mask_8_graphics_487 = new cjs.Graphics().p("EANgAg2QgSgKgNgUIgGgMQgaAGgbgKQgRgHgMgLIgDACQgcARgkgCQgXAAgTgIQgKAHgNAFQgUAGgXgEQgWgEgRgNQgSgPgKgVQgJgWADgXQACgXAPgTQAOgTAUgKQAbgMAeAIIAKADQAHgGAJgDQAZgLAeACQAuACAaAYQAXgQAfADQAiACAWAWIAJAJQAIgEAKgBQATgCAUAHQATAHAPAOQAdAdAAArQABAVgJAWQgMAdgYAQQgTANgZABIgCAAQgXAAgUgMg");
	var mask_8_graphics_488 = new cjs.Graphics().p("EANlAhdQgYAAgLgHQgGgEgDgGIgBAAQgNgJgBgRQgBgRAMgLIAFgDQgLgJgJgNIgGgMQgaAGgbgKQgRgHgMgLIgDACQgcAQgkgBQgXAAgTgIQgKAHgNAEQgUAHgXgEQgWgEgRgOQgSgOgKgWQgJgVADgYQACgWAPgTQAOgUAUgJQAbgMAeAHIAKADQAHgFAJgEQAZgKAeABQAuADAaAYQAXgQAfADQAiABAWAXIAJAJQAIgEAKgBQATgDAUAIQATAGAPAPQAdAdAAArQABAVgJAWQgHARgLANIAOAAQAYgBALAGQAFADAEAFIAFADQAIAFAFAIQAFAKgBAJQAAALgGAHQgGAJgJAEQgKAEgUAAg");
	var mask_8_graphics_489 = new cjs.Graphics().p("EAOJAiSQgWgCgSgLQgSgMgLgSQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgNARgTAJQgSAHgRAAIgGAAg");
	var mask_8_graphics_490 = new cjs.Graphics().p("EAO9AiuQgegBgtgOQgXgIgKgHQgRgLgCgSQgBgMAHgKIABgCQgHgHgFgJQgJgRgEgYQgCgQgBgdQAAgjACgSQACgMADgJIgGgLQgZAGgbgKQgRgHgMgLIgEACQgbARgkgCQgYAAgTgIQgKAHgMAFQgVAGgWgEQgWgEgSgNQgSgPgJgVQgJgWACgXQADgXAOgTQAOgTAVgKQAagMAfAIIAKADQAHgGAIgDQAZgLAfACQAtACAaAYQAXgQAfADQAiACAXAWIAIAJQAJgEAJgBQAUgCAUAHQATAHAOAOQAeAdAAArQAAASgGASQAJAQAEAVQAEAUABAgQAAAjgEAVQgGAegPATIgIAIIAMADQATAGAIAGQAOAKABAOQACAJgGAKQgFAJgJAFQgOAIgUAAIgFAAg");
	var mask_8_graphics_491 = new cjs.Graphics().p("EANpAjWQgfgKgRgZQgRgYAEggQACggAUgWQAKgKALgGQgMgKgHgNQgJgRgEgYQgDgQAAgdQgBgjADgSQABgMADgJIgFgLQgaAGgagKQgRgHgMgLIgEACQgbARglgCQgXAAgTgIQgKAHgNAFQgUAGgXgEQgVgEgSgNQgSgPgJgVQgKgWADgXQACgXAPgTQAOgTAVgKQAagMAeAIIAKADQAIgGAIgDQAZgLAeACQAuACAaAYQAXgQAfADQAiACAWAWIAJAJQAIgEAKgBQATgCAVAHQASAHAPAOQAeAdAAArQAAASgGASQAJAQAEAVQAEAUAAAgQABAjgEAVQgGAegQATQgJAMgNAIIALAKQARAVADAYQAEAegPAcQgQAcgcALQgPAGgQAAQgNAAgPgFg");
	var mask_8_graphics_492 = new cjs.Graphics().p("EAMOAjmQgKAAgJgHQgHgHgEgKQgGgPAAgaIgCh9QABglANgNQAJgKAQABQAPABAIALQAJALAAAVIAAAjQAJgBAHACIADgEQAKgKALgGQgMgKgHgNQgJgRgEgYQgDgQAAgdQgBgjADgSQABgMADgJIgFgLQgaAGgagKQgRgHgMgLIgEACQgbARglgCQgXAAgTgIQgKAHgNAFQgUAGgXgEQgVgEgSgNQgSgPgJgVQgKgWADgXQACgXAPgTQAOgTAVgKQAagMAeAIIAKADQAIgGAIgDQAZgLAeACQAuACAaAYQAXgQAfADQAiACAWAWIAJAJQAIgEAKgBQATgCAVAHQASAHAPAOQAeAdAAArQAAASgGASQAJAQAEAVQAEAUAAAgQABAjgEAVQgGAegQATQgJAMgNAIIALAKQARAVADAYQAEAegPAcQgQAcgcALQgdALgegKQgdgJgRgXIgFAXQgFAQgKAKQgLAMgNAAIgBgBg");
	var mask_8_graphics_493 = new cjs.Graphics().p("EALSAjeQgbgMgPgcQgOgeAKgiQAJgiAcgSQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_494 = new cjs.Graphics().p("EALSAjeQgOgGgKgKQgJAIgLADQgRAFgMgJQgMgKgCgVQgDgWAGgfIAMg2QACgTAEgJQAHgNARgDQAQgDALAKQAKAJADAPQAZgMAfAFQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_495 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgSgPgKgYQgIgYAEgXIACgHQAGgBACgDIAHgJIALgJQAGgFACgLIACgMQATgNAYgCQAcgCAaAQIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_496 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgPgMgJgTQgWAVgSgCQgRgDgKgTQgHgPAFgUQAHghAbgVIASgLIATgJIAZgQQANgJALgEQAOgGAOABQAPABAKAKQAGAGADAJIAOAHIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_497 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiQAIghAZgTQAZgSAiACQAiACAXAWQAGAHAGAIQAWABAVANIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_498 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiQAEgPAHgMQgMgCgHgDQgJgFgGgIQgGgIAAgKQAAgJAHgJQAHgIAKgEQAMgFAcAAQBYAAAsAEQAhADAMAOQANANgEAUQgGATgSAFIgBABIAIAEIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_499 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiIABgDIgEgHQgNgZAFgeQAFgeAUgUQAUgUAegEQAegEAZAOQAZAOANAcQANAdgIAdQAXABATANIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_500 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiIABgDIgEgHQgNgZAFgeQACgOAGgMIgHgEQgKgIgBgOQgCgOAIgLQAOgVAegEQANgBASACIAhAEQAVADAJADQARAFAHAMQAIALgFAPIgDAIQAGAIAEAKQANAdgIAdQAXABATANIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_501 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiIABgDIgEgHQgNgZAFgeIACgKIAAgBQgHgXAGgXQAGgYAQgRQAXgYAkgCQAlgCAZAWQAaAWAEAkQADATgFARQAHAXgGAXQAXABATANIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_502 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiIABgDIgEgHQgNgZAFgeIACgKIAAgBQgHgXAGgXQAFgSAKgOIgEgCQgOgJABgRQAAgSANgJQAMgJAdAAQA9AAAaAEQAWADAKAKQAKAJAAAPQAAAOgKAJQgDAEgGADQAJAQACAUQADATgFARQAHAXgGAXQAXABATANIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgJgWQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_503 = new cjs.Graphics().p("EALSAjeQgJgEgIgGIgDACQgXARgggBQgegBgXgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiIABgDIgEgHQgNgZAFgeIACgKIAAgBQgHgXAGgXQAFgUAMgOQgJgMgGgPQgIgbAGgZQAGgWARgQQgFgHgDgIQgKgWADgXQACgWAPgUQAOgTAVgJQAagMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAVAHQASAHAPAOQAeAeAAArQAAASgGASQAJAQAEAVQAEATAAAhQABAigEAVQgGAegQATQgJAMgNAIIALALQARAVADAYQAEAegPAcQgQAbgcALQgdALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJgEAMIAg3QAaAFATAQQAFgLAIgJQAKgJALgHQgMgJgHgNQgJgRgEgZQgDgPAAgdQgBgjADgTQABgLADgKIgFgKQgaAGgagLQgRgGgMgLIgEACQgbAQglgBIgUgCQAEAJABALQADAYgJAWQgFALgGAJQAOATACAaQADATgFARQAHAXgGAXQAXABATANIAIAFIAIgGQAUgMAYAAQAJAAAKABg");
	var mask_8_graphics_813 = new cjs.Graphics().p("ABEd9IIEoEIIFIEIoFIEg");
	var mask_8_graphics_814 = new cjs.Graphics().p("ABBd1IIEoFIIFIFIoFIEg");
	var mask_8_graphics_815 = new cjs.Graphics().p("AA+dsIIEoEIIFIEIoFIEg");
	var mask_8_graphics_816 = new cjs.Graphics().p("AA7djIIEoEIIEIEIoEIEg");
	var mask_8_graphics_817 = new cjs.Graphics().p("AA4dbIIEoFIIEIFIoEIEg");
	var mask_8_graphics_818 = new cjs.Graphics().p("AA1dSIIEoEIIEIEIoEIEg");
	var mask_8_graphics_819 = new cjs.Graphics().p("AAydJIIEoEIIEIEIoEIFg");
	var mask_8_graphics_820 = new cjs.Graphics().p("AAvdBIIEoEIIEIEIoEIEg");
	var mask_8_graphics_821 = new cjs.Graphics().p("AAsc4IIEoEIIEIEIoEIEg");
	var mask_8_graphics_822 = new cjs.Graphics().p("AApcvIIEoEIIEIEIoEIFg");
	var mask_8_graphics_823 = new cjs.Graphics().p("AAmcnIIEoEIIEIEIoEIEg");
	var mask_8_graphics_824 = new cjs.Graphics().p("AAjceIIEoEIIEIEIoEIEg");
	var mask_8_graphics_825 = new cjs.Graphics().p("AAgcWIIEoFIIEIFIoEIEg");
	var mask_8_graphics_826 = new cjs.Graphics().p("AAccNIIFoEIIEIEIoEIEg");
	var mask_8_graphics_827 = new cjs.Graphics().p("AAZcEIIFoEIIEIEIoEIEg");
	var mask_8_graphics_828 = new cjs.Graphics().p("AAWb8IIEoFIIFIFIoFIEg");
	var mask_8_graphics_829 = new cjs.Graphics().p("AATbzIIEoEIIFIEIoFIEg");
	var mask_8_graphics_830 = new cjs.Graphics().p("AAQbqIIEoEIIFIEIoFIFg");
	var mask_8_graphics_831 = new cjs.Graphics().p("AANbiIIEoEIIEIEIoEIEg");
	var mask_8_graphics_832 = new cjs.Graphics().p("AAKbZIIEoEIIEIEIoEIEg");
	var mask_8_graphics_833 = new cjs.Graphics().p("AAHbQIIEoEIIEIEIoEIFg");
	var mask_8_graphics_834 = new cjs.Graphics().p("AAEbIIIEoEIIEIEIoEIEg");
	var mask_8_graphics_835 = new cjs.Graphics().p("AABa/IIEoEIIEIEIoEIEg");
	var mask_8_graphics_836 = new cjs.Graphics().p("AgBa3IIDoFIIEIFIoEIEg");
	var mask_8_graphics_837 = new cjs.Graphics().p("AgEauIIDoEIIEIEIoEIEg");
	var mask_8_graphics_838 = new cjs.Graphics().p("AgHalIIDoEIIEIEIoEIEg");
	var mask_8_graphics_839 = new cjs.Graphics().p("AgKadIIDoFIIEIFIoEIEg");
	var mask_8_graphics_840 = new cjs.Graphics().p("AgOaUIIEoEIIEIEIoEIEg");
	var mask_8_graphics_841 = new cjs.Graphics().p("AgRaLIIEoEIIEIEIoEIFg");
	var mask_8_graphics_842 = new cjs.Graphics().p("AgUaDIIEoEIIEIEIoEIEg");
	var mask_8_graphics_843 = new cjs.Graphics().p("AgXZ6IIDoEIIFIEIoFIEg");
	var mask_8_graphics_844 = new cjs.Graphics().p("AgaZxIIDoEIIFIEIoFIFg");
	var mask_8_graphics_845 = new cjs.Graphics().p("AgdZpIIDoEIIFIEIoFIEg");
	var mask_8_graphics_846 = new cjs.Graphics().p("AggZgIIDoEIIEIEIoEIEg");
	var mask_8_graphics_847 = new cjs.Graphics().p("AgjZYIIDoFIIEIFIoEIEg");
	var mask_8_graphics_848 = new cjs.Graphics().p("AgmZPIIDoEIIEIEIoEIEg");
	var mask_8_graphics_849 = new cjs.Graphics().p("AgpZGIIDoEIIEIEIoEIEg");
	var mask_8_graphics_850 = new cjs.Graphics().p("AgsY+IIDoFIIEIFIoEIEg");
	var mask_8_graphics_851 = new cjs.Graphics().p("AgvY1IIDoEIIEIEIoEIEg");
	var mask_8_graphics_852 = new cjs.Graphics().p("AgyYsIIDoEIIEIEIoEIFg");
	var mask_8_graphics_853 = new cjs.Graphics().p("Ag1YkIIDoEIIEIEIoEIEg");
	var mask_8_graphics_854 = new cjs.Graphics().p("Ag4YbIIDoEIIEIEIoEIEg");
	var mask_8_graphics_855 = new cjs.Graphics().p("Ag8YSIIEoEIIEIEIoEIFg");
	var mask_8_graphics_856 = new cjs.Graphics().p("Ag/YKIIEoEIIEIEIoEIEg");
	var mask_8_graphics_857 = new cjs.Graphics().p("AhCYBIIDoEIIFIEIoFIEg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(477).to({graphics:mask_8_graphics_477,x:80.2,y:208.8}).wait(1).to({graphics:mask_8_graphics_478,x:157.6,y:408.8}).wait(1).to({graphics:mask_8_graphics_479,x:80.2,y:208.8}).wait(1).to({graphics:mask_8_graphics_480,x:157.1,y:408.8}).wait(1).to({graphics:mask_8_graphics_481,x:83.6,y:208.8}).wait(1).to({graphics:mask_8_graphics_482,x:160.1,y:409.8}).wait(1).to({graphics:mask_8_graphics_483,x:89.1,y:208.8}).wait(1).to({graphics:mask_8_graphics_484,x:166.1,y:409}).wait(1).to({graphics:mask_8_graphics_485,x:94.6,y:208.8}).wait(1).to({graphics:mask_8_graphics_486,x:99.4,y:209.6}).wait(1).to({graphics:mask_8_graphics_487,x:99.8,y:211.4}).wait(1).to({graphics:mask_8_graphics_488,x:102.5,y:214.1}).wait(1).to({graphics:mask_8_graphics_489,x:100.4,y:219.4}).wait(1).to({graphics:mask_8_graphics_490,x:101.4,y:222.2}).wait(1).to({graphics:mask_8_graphics_491,x:100.4,y:226.7}).wait(1).to({graphics:mask_8_graphics_492,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_493,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_494,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_495,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_496,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_497,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_498,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_499,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_500,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_501,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_502,x:100.4,y:227.9}).wait(1).to({graphics:mask_8_graphics_503,x:100.4,y:227.9}).wait(310).to({graphics:mask_8_graphics_813,x:110.1,y:243.3}).wait(1).to({graphics:mask_8_graphics_814,x:109.8,y:242.5}).wait(1).to({graphics:mask_8_graphics_815,x:109.5,y:241.6}).wait(1).to({graphics:mask_8_graphics_816,x:109.1,y:240.7}).wait(1).to({graphics:mask_8_graphics_817,x:108.8,y:239.9}).wait(1).to({graphics:mask_8_graphics_818,x:108.5,y:239}).wait(1).to({graphics:mask_8_graphics_819,x:108.2,y:238.2}).wait(1).to({graphics:mask_8_graphics_820,x:107.9,y:237.3}).wait(1).to({graphics:mask_8_graphics_821,x:107.6,y:236.4}).wait(1).to({graphics:mask_8_graphics_822,x:107.3,y:235.6}).wait(1).to({graphics:mask_8_graphics_823,x:107,y:234.7}).wait(1).to({graphics:mask_8_graphics_824,x:106.7,y:233.8}).wait(1).to({graphics:mask_8_graphics_825,x:106.4,y:233}).wait(1).to({graphics:mask_8_graphics_826,x:106.1,y:232.1}).wait(1).to({graphics:mask_8_graphics_827,x:105.8,y:231.2}).wait(1).to({graphics:mask_8_graphics_828,x:105.5,y:230.4}).wait(1).to({graphics:mask_8_graphics_829,x:105.2,y:229.5}).wait(1).to({graphics:mask_8_graphics_830,x:104.9,y:228.7}).wait(1).to({graphics:mask_8_graphics_831,x:104.5,y:227.8}).wait(1).to({graphics:mask_8_graphics_832,x:104.2,y:226.9}).wait(1).to({graphics:mask_8_graphics_833,x:103.9,y:226.1}).wait(1).to({graphics:mask_8_graphics_834,x:103.6,y:225.2}).wait(1).to({graphics:mask_8_graphics_835,x:103.3,y:224.3}).wait(1).to({graphics:mask_8_graphics_836,x:103,y:223.5}).wait(1).to({graphics:mask_8_graphics_837,x:102.7,y:222.6}).wait(1).to({graphics:mask_8_graphics_838,x:102.4,y:221.7}).wait(1).to({graphics:mask_8_graphics_839,x:102.1,y:220.9}).wait(1).to({graphics:mask_8_graphics_840,x:101.8,y:220}).wait(1).to({graphics:mask_8_graphics_841,x:101.5,y:219.2}).wait(1).to({graphics:mask_8_graphics_842,x:101.2,y:218.3}).wait(1).to({graphics:mask_8_graphics_843,x:100.9,y:217.4}).wait(1).to({graphics:mask_8_graphics_844,x:100.6,y:216.6}).wait(1).to({graphics:mask_8_graphics_845,x:100.3,y:215.7}).wait(1).to({graphics:mask_8_graphics_846,x:99.9,y:214.8}).wait(1).to({graphics:mask_8_graphics_847,x:99.6,y:214}).wait(1).to({graphics:mask_8_graphics_848,x:99.3,y:213.1}).wait(1).to({graphics:mask_8_graphics_849,x:99,y:212.2}).wait(1).to({graphics:mask_8_graphics_850,x:98.7,y:211.4}).wait(1).to({graphics:mask_8_graphics_851,x:98.4,y:210.5}).wait(1).to({graphics:mask_8_graphics_852,x:98.1,y:209.7}).wait(1).to({graphics:mask_8_graphics_853,x:97.8,y:208.8}).wait(1).to({graphics:mask_8_graphics_854,x:97.5,y:207.9}).wait(1).to({graphics:mask_8_graphics_855,x:97.2,y:207.1}).wait(1).to({graphics:mask_8_graphics_856,x:96.9,y:206.2}).wait(1).to({graphics:mask_8_graphics_857,x:96.6,y:205.3}).wait(870));

	// android navbut
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,0,1).p("AifiuIE/AAQAPAAAAAPIAAE/QAAAPgPAAIk/AAQgPAAAAgPIAAk/QAAgPAPAAg");
	this.shape_2.setTransform(175.3,428);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(477).to({_off:false},0).to({_off:true},378).wait(872));

	// vert line
	this.instance_27 = new lib.lineanimate();
	this.instance_27.parent = this;
	this.instance_27.setTransform(383.6,736.5,1,1,0,0,0,0,244.5);
	this.instance_27.alpha = 0.051;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(372).to({_off:false},0).to({y:238.5,alpha:1},68).wait(372).to({y:-247.5},48).to({_off:true},1).wait(866));

	// right shade
	this.instance_28 = new lib.rightshade("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(472,245.1,1,1,0,0,0,86,246.1);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(477).to({_off:false},0).to({alpha:0.16},45).wait(244).to({startPosition:0},0).to({alpha:0},31).to({_off:true},1).wait(929));

	// radio shadow
	this.instance_29 = new lib.circledrop();
	this.instance_29.parent = this;
	this.instance_29.setTransform(266.8,251.4,2.072,2.068,0,0,0,25.4,25.5);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(146).to({_off:false},0).to({scaleX:1.37,scaleY:1.35,x:266.6,y:251.3,alpha:0.328},7).to({regX:25.5,regY:25.6,scaleX:1.1,scaleY:1.08,x:266.5,y:251.4,alpha:0.461},5).to({regX:25.4,regY:25.7,scaleX:1.01,scaleY:0.99,y:251.3,alpha:0.5},5).wait(221).to({x:267.5,y:251.8,alpha:0.051},45).to({_off:true},1).wait(1297));

	// radio mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_145 = new cjs.Graphics().p("A53d3QlDlEjBnXQjAnVAAnNQAAnxCRnJQCloBEykzQFFlFKXkVQKYkWHJAAQGdAAHKEjQFPDVGSGSQKHKHAAOVQAAGykcImQkAHzlfFfQk4E4nOCnQmtCanfAAQx1AAouougAncmRQjYDYAAEwQAAExDYDYQDXDYExAAQExAADYjYQDYjYAAkxQAAkwjYjYQjYjYkxAAQkxAAjXDYg");
	var mask_9_graphics_146 = new cjs.Graphics().p("A25crQkvkvi0m6Qi0m3AAmwQAAnQCImtQCbngEekfQEwkxJtkDQJukEGrAAQGEAAGsEQQE6DHF4F5QJeJeAANaQAAGWkJIDQjxHUlIFIQkkEkmxCcQmSCRnAAAQwtAAoKoKgAlplKQjKDKAAEdQAAEeDKDKQDKDKEdAAQEeAADKjKQDKjKAAkeQAAkdjKjKQjKjKkeAAQkdAAjKDKg");
	var mask_9_graphics_147 = new cjs.Graphics().p("Az6cDQkbkaiomcQiomZAAmSQAAmxB/mQQCRnAEKkLQEckcJCjxQJDjzGPAAQFpAAGPD+QElC5FfFfQI0I1AAMgQAAF7j3HgQjgGzkyEyQkRERmTCRQl2CHmiAAQvkAAnmnngAj2jeQi8C8AAEJQAAELC8C8QC8C9EKAAQEKAAC9i9QC8i8AAkLQAAkJi8i8Qi9i9kKAAQkKAAi8C9g");
	var mask_9_graphics_148 = new cjs.Graphics().p("Aw8bcQkGkGicl+Qibl7AAl1QAAmRB1lyQCGmgD3j4QEHkHIYjfQIZjhFyAAQFPAAFyDrQEPCsFFFFQIMIMAALlQAAFfjmG9QjPGUkcEcQj9D8l1CHQlcB9mDAAQubAAnDnDgAiDhyQiuCtAAD3QAAD3CuCvQCuCuD3AAQD3AACuiuQCvivAAj3QAAj3ivitQiuivj3AAQj3AAiuCvg");
	var mask_9_graphics_149 = new cjs.Graphics().p("At+a0QjxjxiPlgQiQldAAlXQAAlzBslUQB8l/DjjkQDyjzHvjOQHujPFVAAQE0AAFVDZQD6CeEsEsQHiHiAAKsQAAFDjTGaQjAF0kFEFQjpDplYB8QlABzllAAQtSAAmgmggAgPgHQihCgAADkQAADjChChQCfChDkAAQDkAACgihQChihAAjjQAAjkihigQigihjkAAQjkAAifChg");
	var mask_9_graphics_150 = new cjs.Graphics().p("ArAaNQjcjdiDlBQiElAAAk6QAAlTBkk3QBwleDQjRQDejdHEi9QHEi9E4AAQEaAAE4DGQDkCRESESQG5G5AAJxQAAEnjBF3QivFUjvDwQjVDUk7ByQkkBplHAAQsJAAl9l8gABjBkQiSCTAADQQAADRCSCTQCTCTDQAAQDQAACTiTQCTiTAAjRQAAjQiTiTQiTiSjQAAQjQAAiTCSg");
	var mask_9_graphics_151 = new cjs.Graphics().p("AoBZmQjIjIh3kkQh3kiAAkdQAAkzBakaQBmk9C8i9QDJjJGZirQGbisEbAAQD/AAEbC0QDPCDD5D4QGQGQAAI3QAAEMiwFUQieE0jZDZQjBDBkeBnQkJBfkoAAQrBAAlYlYgADWDQQiFCFAAC9QAAC9CFCFQCFCGC9AAQC9AACFiGQCGiFAAi9QAAi9iGiFQiFiFi9AAQi9AAiFCFg");
	var mask_9_graphics_152 = new cjs.Graphics().p("AlDY+QizizhrkGQhrkEAAj/QAAkUBRj+QBbkbCqiqQC0i0FuiaQFxiaD9AAQDmAAD9CiQC6B1DfDfQFnFmAAH9QAADwidExQiPEVjCDCQitCtkABdQjuBVkKAAQp4AAk1k1gAFJE8Qh3B3AACqQAACpB3B4QB4B3CpAAQCpAAB4h3QB4h4AAipQAAiqh4h3Qh4h4ipAAQipAAh4B4g");
	var mask_9_graphics_153 = new cjs.Graphics().p("AiFYWQifiehejoQhfjmAAjiQAAj0BIjhQBRj7CViWQCgifFEiIQFGiJDhAAQDLAADgCPQClBoDFDGQE+E8AAHDQAADUiLEOQh+D1itCsQiZCajiBRQjTBMjrAAQoxAAkQkSgAG8GnQhqBqAACWQAACWBqBqQBqBqCWAAQCWAABqhqQBqhqAAiWQAAiWhqhqQhqhqiWAAQiWAAhqBqg");
	var mask_9_graphics_154 = new cjs.Graphics().p("AhEYJQiYiYhajdQhajcAAjYQAAjpBEjXQBOjwCPiPQCXiYE3iCQE3iCDXAAQDCAADXCIQCdBjC8C9QEwEuAAGvQAADLiFECQh5DqikClQiTCSjYBOQjJBIjhAAQoXAAkFkFgAHkHMQhmBmAACPQAACPBmBlQBlBlCPAAQCPAABlhlQBmhlAAiPQAAiPhmhmQhlhliPAAQiPAAhlBlg");
	var mask_9_graphics_155 = new cjs.Graphics().p("AgDX7QiQiQhWjTQhWjSAAjOQAAjeBBjNQBJjlCJiIQCQiREph8QEph8DMAAQC5AADNCCQCWBfCzCzQEiEhAAGaQAADCh/D2QhzDfidCdQiLCLjPBLQjABFjWAAQn+AAj5j6gAILHxQhgBhAACIQAACJBgBgQBhBhCIAAQCJAABghhQBhhgAAiJQAAiIhhhhQhghgiJAAQiIAAhhBgg");
	var mask_9_graphics_156 = new cjs.Graphics().p("AA+XuQiJiKhSjIQhSjIAAjDQAAjUA+jDQBGjaCBiCQCKiJEah2QEbh2DCAAQCwAADDB7QCOBbCrCqQEUETAAGGQAAC5h5DqQhtDUiVCVQiFCFjFBHQi2BBjMAAQnlAAjtjtgAIzIWQhcBcAACCQAACCBcBcQBbBbCCAAQCCAABchbQBchcAAiCQAAiChchcQhchbiCAAQiCAAhbBbg");
	var mask_9_graphics_157 = new cjs.Graphics().p("AB/XhQiCiDhNi+QhOi+AAi5QAAjJA7i5QBCjPB6h7QCEiCELhwQEMhwC5AAQCmAAC5B1QCHBWCjChQEFEFAAFyQAACvhzDeQhnDKiOCNQh+B+i6BDQitA+jCAAQnMAAjhjggAJaI7QhXBXAAB8QAAB7BXBXQBXBXB7AAQB8AABXhXQBXhXAAh7QAAh8hXhXQhXhXh8AAQh7AAhXBXg");
	var mask_9_graphics_158 = new cjs.Graphics().p("ADAXTQh8h8hIi0QhJizAAivQAAi+A3ivQA+jEB1h1QB8h8D9hoQD9hqCvAAQCeAACuBvQCABQCaCZQD3D3AAFeQAACmhtDSQhiC+iFCGQh4B3iwBAQikA6i2AAQm0AAjVjUgAKCJgQhTBSAAB1QAAB1BTBSQBSBSB1AAQB0AABShSQBThSAAh1QAAh1hThSQhShSh0AAQh1AAhSBSg");
	var mask_9_graphics_159 = new cjs.Graphics().p("ADWXOQh5h5hJixQhHivAAisQAAi7A2irQA+jAByhzQB6h5D4hnQD5hoCrAAQCbAACrBtQB9BOCXCXQDyDyAAFYQAACihqDOQhgC7iDCDQh1B1itA+QihA6izAAQmsAAjQjRgAKPJsQhRBRAAByQAABzBRBQQBRBRByAAQByAABRhRQBRhQAAhzQAAhyhRhRQhRhQhyAAQhyAAhRBQg");
	var mask_9_graphics_160 = new cjs.Graphics().p("ADrXKQh2h3hHitQhGitAAipQAAi2A1ioQA8i8BwhxQB4h3DzhlQD0hmCoAAQCYAACoBrQB7BNCTCTQDuDuAAFRQAACfhoDKQheC3iBCBQhzByipA+QieA4iwAAQmjAAjNjMgAKcJ5QhPBPAABwQAABwBPBPQBPBPBwAAQBwAABPhPQBQhPAAhwQAAhwhQhPQhPhQhwAAQhwAAhPBQg");
	var mask_9_graphics_161 = new cjs.Graphics().p("AEBXFQh0h0hGiqQhFipAAimQAAizA0ikQA8i5BuhuQB1h1DuhkQDvhjClAAQCVAACkBoQB5BNCRCQQDpDpAAFKQAACchnDGQhcC0h+B+QhwBwinA8QiaA4isAAQmbAAjJjJgAKpKFQhOBNAABuQAABuBOBOQBOBNBuAAQBtAABOhNQBOhOAAhuQAAhuhOhNQhOhOhtAAQhuAAhOBOg");
	var mask_9_graphics_162 = new cjs.Graphics().p("AEXXAQhyhyhEimQhEilAAijQAAivAzihQA7i1BrhsQBzhzDphhQDrhhChAAQCSAAChBlQB2BLCOCOQDkDkAAFEQAACYhkDCQhaCwh8B8QhuBuijA7QiXA2ipAAQmTAAjEjFgAK2KRQhMBMAABsQAABrBMBMQBMBNBsAAQBsAABMhNQBMhMAAhrQAAhshMhMQhMhMhsAAQhsAAhMBMg");
	var mask_9_graphics_163 = new cjs.Graphics().p("AEsW8QhwhwhCijQhDiiAAifQAAirAzieQA5iyBphpQBwhxDlhfQDlhfCfAAQCOAACeBjQB0BKCLCKQDfDgAAE9QAACVhiC+QhYCth5B5QhsBrigA6QiUA1ilAAQmLAAjAjAgALDKdQhLBLAABpQAABqBLBKQBKBLBqAAQBpAABLhLQBKhKAAhqQAAhphKhLQhLhKhpAAQhqAAhKBKg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(145).to({graphics:mask_9_graphics_145,x:261.7,y:239.5}).wait(1).to({graphics:mask_9_graphics_146,x:253.5,y:235.7}).wait(1).to({graphics:mask_9_graphics_147,x:245.3,y:228.2}).wait(1).to({graphics:mask_9_graphics_148,x:237.2,y:220.7}).wait(1).to({graphics:mask_9_graphics_149,x:229,y:213.2}).wait(1).to({graphics:mask_9_graphics_150,x:220.8,y:205.7}).wait(1).to({graphics:mask_9_graphics_151,x:212.7,y:198.2}).wait(1).to({graphics:mask_9_graphics_152,x:204.5,y:190.7}).wait(1).to({graphics:mask_9_graphics_153,x:196.3,y:183.2}).wait(1).to({graphics:mask_9_graphics_154,x:193.5,y:180.6}).wait(1).to({graphics:mask_9_graphics_155,x:190.7,y:178.1}).wait(1).to({graphics:mask_9_graphics_156,x:187.9,y:175.5}).wait(1).to({graphics:mask_9_graphics_157,x:185.1,y:172.9}).wait(1).to({graphics:mask_9_graphics_158,x:182.3,y:170.3}).wait(1).to({graphics:mask_9_graphics_159,x:181.3,y:169.5}).wait(1).to({graphics:mask_9_graphics_160,x:180.4,y:168.6}).wait(1).to({graphics:mask_9_graphics_161,x:179.5,y:167.8}).wait(1).to({graphics:mask_9_graphics_162,x:178.5,y:166.9}).wait(1).to({graphics:mask_9_graphics_163,x:177.5,y:166}).wait(1564));

	// radio select
	this.instance_30 = new lib.radioselected();
	this.instance_30.parent = this;
	this.instance_30.setTransform(267,252.3,0.969,0.969,0,0,0,49.1,49.1);
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(145).to({_off:false},0).to({_off:true},304).wait(1278));

	// bar bot copy 2
	this.instance_31 = new lib.ClipGroup_7();
	this.instance_31.parent = this;
	this.instance_31.setTransform(278.5,859.2,0.337,1,0,0,0,700.5,1269.5);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(73).to({_off:false},0).wait(1).to({regX:1110,regY:476,scaleX:0.35,x:417.9,y:65.7,alpha:0.022},0).wait(1).to({scaleX:0.37,x:419.4,alpha:0.043},0).wait(1).to({scaleX:0.39,x:420.9,alpha:0.065},0).wait(1).to({scaleX:0.4,x:422.3,alpha:0.087},0).wait(1).to({scaleX:0.42,x:423.8,alpha:0.109},0).wait(1).to({scaleX:0.44,x:425.3,alpha:0.13},0).wait(1).to({scaleX:0.45,x:426.7,alpha:0.152},0).wait(1).to({scaleX:0.47,x:428.2,alpha:0.174},0).wait(1).to({scaleX:0.48,x:429.6,alpha:0.196},0).wait(1).to({scaleX:0.5,x:431.1,alpha:0.217},0).wait(1).to({scaleX:0.52,x:432.6,alpha:0.239},0).wait(1).to({scaleX:0.53,x:434.1,alpha:0.261},0).wait(1).to({scaleX:0.55,x:435.5,alpha:0.283},0).wait(1).to({scaleX:0.56,x:437,alpha:0.304},0).wait(1).to({scaleX:0.58,x:438.4,alpha:0.326},0).wait(1).to({scaleX:0.6,x:439.9,alpha:0.348},0).wait(1).to({scaleX:0.61,x:441.4,alpha:0.37},0).wait(1).to({scaleX:0.63,x:442.8,alpha:0.391},0).wait(1).to({scaleX:0.65,x:444.3,alpha:0.413},0).wait(1).to({scaleX:0.66,x:445.7,alpha:0.435},0).wait(1).to({scaleX:0.68,x:447.2,alpha:0.457},0).wait(1).to({scaleX:0.7,x:448.7,alpha:0.478},0).wait(1).to({scaleX:0.71,x:450.1,alpha:0.5},0).wait(1).to({scaleX:0.73,x:451.6,alpha:0.522},0).wait(1).to({scaleX:0.75,x:453.1,alpha:0.543},0).wait(1).to({scaleX:0.76,x:454.6,alpha:0.565},0).wait(1).to({scaleX:0.78,x:456,alpha:0.587},0).wait(1).to({scaleX:0.79,x:457.5,alpha:0.609},0).wait(1).to({scaleX:0.81,x:458.9,alpha:0.63},0).wait(1).to({scaleX:0.83,x:460.4,alpha:0.652},0).wait(1).to({scaleX:0.84,x:461.9,alpha:0.674},0).wait(1).to({scaleX:0.86,x:463.3,alpha:0.696},0).wait(1).to({scaleX:0.88,x:464.8,alpha:0.717},0).wait(1).to({scaleX:0.89,x:466.2,alpha:0.739},0).wait(1).to({scaleX:0.91,x:467.7,alpha:0.761},0).wait(1).to({scaleX:0.92,x:469.2,alpha:0.783},0).wait(1).to({scaleX:0.94,x:470.7,alpha:0.804},0).wait(1).to({scaleX:0.96,x:472.1,alpha:0.826},0).wait(1).to({scaleX:0.97,x:473.6,alpha:0.848},0).wait(1).to({scaleX:0.99,x:475,alpha:0.87},0).wait(1).to({scaleX:1.01,x:476.5,alpha:0.891},0).wait(1).to({scaleX:1.02,x:477.9,alpha:0.913},0).wait(1).to({scaleX:1.04,x:479.4,alpha:0.935},0).wait(1).to({scaleX:1.06,x:480.9,alpha:0.957},0).wait(1).to({scaleX:1.07,x:482.3,alpha:0.978},0).wait(1).to({scaleX:1.09,x:483.8,alpha:1},0).wait(265).to({scaleX:1.07,x:482.3,alpha:0.983},0).wait(1).to({scaleX:1.06,x:480.9,alpha:0.966},0).wait(1).to({scaleX:1.04,x:479.4,alpha:0.949},0).wait(1).to({scaleX:1.02,x:478,alpha:0.932},0).wait(1).to({scaleX:1.01,x:476.5,alpha:0.915},0).wait(1).to({scaleX:0.99,x:475.1,alpha:0.898},0).wait(1).to({scaleX:0.98,x:473.6,alpha:0.881},0).wait(1).to({scaleX:0.96,x:472.2,alpha:0.864},0).wait(1).to({scaleX:0.94,x:470.7,alpha:0.847},0).wait(1).to({scaleX:0.93,x:469.2,alpha:0.831},0).wait(1).to({scaleX:0.91,x:467.8,alpha:0.814},0).wait(1).to({scaleX:0.9,x:466.4,alpha:0.797},0).wait(1).to({scaleX:0.88,x:464.9,alpha:0.78},0).wait(1).to({scaleX:0.86,x:463.5,alpha:0.763},0).wait(1).to({scaleX:0.85,x:462,alpha:0.746},0).wait(1).to({scaleX:0.83,x:460.5,alpha:0.729},0).wait(1).to({scaleX:0.82,x:459.1,alpha:0.712},0).wait(1).to({scaleX:0.8,x:457.7,alpha:0.695},0).wait(1).to({scaleX:0.78,x:456.2,alpha:0.678},0).wait(1).to({scaleX:0.77,x:454.7,alpha:0.661},0).wait(1).to({scaleX:0.75,x:453.3,alpha:0.644},0).wait(1).to({scaleX:0.74,x:451.9,alpha:0.627},0).wait(1).to({scaleX:0.72,x:450.4,alpha:0.61},0).wait(1).to({scaleX:0.7,x:448.9,alpha:0.593},0).wait(1).to({scaleX:0.69,x:447.5,alpha:0.576},0).wait(1).to({scaleX:0.67,x:446,alpha:0.559},0).wait(1).to({scaleX:0.66,x:444.6,alpha:0.542},0).wait(1).to({scaleX:0.64,x:443.1,alpha:0.525},0).wait(1).to({scaleX:0.62,x:441.7,alpha:0.508},0).wait(1).to({scaleX:0.61,x:440.2,alpha:0.492},0).wait(1).to({scaleX:0.59,x:438.8,alpha:0.475},0).wait(1).to({scaleX:0.57,x:437.3,alpha:0.458},0).wait(1).to({scaleX:0.56,x:435.8,alpha:0.441},0).wait(1).to({scaleX:0.54,x:434.4,alpha:0.424},0).wait(1).to({scaleX:0.53,x:433,alpha:0.407},0).wait(1).to({scaleX:0.51,x:431.5,alpha:0.39},0).wait(1).to({scaleX:0.49,x:430,alpha:0.373},0).wait(1).to({scaleX:0.48,x:428.6,alpha:0.356},0).wait(1).to({scaleX:0.46,x:427.1,alpha:0.339},0).wait(1).to({scaleX:0.45,x:425.7,alpha:0.322},0).wait(1).to({scaleX:0.43,x:424.2,alpha:0.305},0).wait(1).to({scaleX:0.41,x:422.8,alpha:0.288},0).wait(1).to({scaleX:0.4,x:421.3,alpha:0.271},0).wait(1).to({scaleX:0.38,x:419.9,alpha:0.254},0).wait(1).to({scaleX:0.37,x:418.4,alpha:0.237},0).wait(1).to({scaleX:0.35,x:416.9,alpha:0.22},0).wait(1).to({scaleX:0.33,x:415.5,alpha:0.203},0).wait(1).to({scaleX:0.32,x:414,alpha:0.186},0).wait(1).to({scaleX:0.3,x:412.5,alpha:0.169},0).wait(1).to({scaleX:0.29,x:411.1,alpha:0.153},0).wait(1).to({scaleX:0.27,x:409.7,alpha:0.136},0).wait(1).to({scaleX:0.25,x:408.2,alpha:0.119},0).wait(1).to({scaleX:0.24,x:406.7,alpha:0.102},0).wait(1).to({scaleX:0.22,x:405.3,alpha:0.085},0).wait(1).to({scaleX:0.21,x:403.9,alpha:0.068},0).wait(1).to({scaleX:0.19,x:402.4,alpha:0.051},0).wait(1).to({scaleX:0.17,x:400.9,alpha:0.034},0).wait(1).to({scaleX:0.16,x:399.5,alpha:0.017},0).wait(1).to({scaleX:0.14,x:398,alpha:0},0).to({_off:true},1).wait(1284));

	// bar bot copy
	this.instance_32 = new lib.ClipGroup_7();
	this.instance_32.parent = this;
	this.instance_32.setTransform(280.5,1044.1,0.333,1,0,0,0,704.2,1269.5);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(66).to({_off:false},0).wait(1).to({regX:1110,regY:476,scaleX:0.35,x:417.2,y:250.6,alpha:0.021},0).wait(1).to({scaleX:0.37,x:418.6,alpha:0.043},0).wait(1).to({scaleX:0.38,x:420.1,alpha:0.064},0).wait(1).to({scaleX:0.4,x:421.6,alpha:0.085},0).wait(1).to({scaleX:0.41,x:423,alpha:0.106},0).wait(1).to({scaleX:0.43,x:424.5,alpha:0.128},0).wait(1).to({scaleX:0.45,x:425.9,alpha:0.149},0).wait(1).to({scaleX:0.46,x:427.4,alpha:0.17},0).wait(1).to({scaleX:0.48,x:428.8,alpha:0.191},0).wait(1).to({scaleX:0.49,x:430.2,alpha:0.213},0).wait(1).to({scaleX:0.51,x:431.7,alpha:0.234},0).wait(1).to({scaleX:0.53,x:433.1,alpha:0.255},0).wait(1).to({scaleX:0.54,x:434.6,alpha:0.277},0).wait(1).to({scaleX:0.56,x:436,alpha:0.298},0).wait(1).to({scaleX:0.57,x:437.5,alpha:0.319},0).wait(1).to({scaleX:0.59,x:438.9,alpha:0.34},0).wait(1).to({scaleX:0.61,x:440.4,alpha:0.362},0).wait(1).to({scaleX:0.62,x:441.8,alpha:0.383},0).wait(1).to({scaleX:0.64,x:443.3,alpha:0.404},0).wait(1).to({scaleX:0.65,x:444.7,alpha:0.426},0).wait(1).to({scaleX:0.67,x:446.2,alpha:0.447},0).wait(1).to({scaleX:0.69,x:447.6,alpha:0.468},0).wait(1).to({scaleX:0.7,x:449,alpha:0.489},0).wait(1).to({scaleX:0.72,x:450.5,alpha:0.511},0).wait(1).to({scaleX:0.73,x:451.9,alpha:0.532},0).wait(1).to({scaleX:0.75,x:453.4,alpha:0.553},0).wait(1).to({scaleX:0.77,x:454.8,alpha:0.574},0).wait(1).to({scaleX:0.78,x:456.3,alpha:0.596},0).wait(1).to({scaleX:0.8,x:457.7,alpha:0.617},0).wait(1).to({scaleX:0.82,x:459.2,alpha:0.638},0).wait(1).to({scaleX:0.83,x:460.6,alpha:0.66},0).wait(1).to({scaleX:0.85,x:462,alpha:0.681},0).wait(1).to({scaleX:0.86,x:463.5,alpha:0.702},0).wait(1).to({scaleX:0.88,x:464.9,alpha:0.723},0).wait(1).to({scaleX:0.9,x:466.4,alpha:0.745},0).wait(1).to({scaleX:0.91,x:467.8,alpha:0.766},0).wait(1).to({scaleX:0.93,x:469.3,alpha:0.787},0).wait(1).to({scaleX:0.94,x:470.7,alpha:0.809},0).wait(1).to({scaleX:0.96,x:472.2,alpha:0.83},0).wait(1).to({scaleX:0.98,x:473.6,alpha:0.851},0).wait(1).to({scaleX:0.99,x:475,alpha:0.872},0).wait(1).to({scaleX:1.01,x:476.5,alpha:0.894},0).wait(1).to({scaleX:1.02,x:478,alpha:0.915},0).wait(1).to({scaleX:1.04,x:479.4,alpha:0.936},0).wait(1).to({scaleX:1.06,x:480.8,alpha:0.957},0).wait(1).to({scaleX:1.07,x:482.3,alpha:0.979},0).wait(1).to({scaleX:1.09,x:483.7,alpha:1},0).wait(269).to({scaleX:1.07,x:482.3,alpha:0.983},0).wait(1).to({scaleX:1.06,x:480.8,alpha:0.966},0).wait(1).to({scaleX:1.04,x:479.4,alpha:0.949},0).wait(1).to({scaleX:1.02,x:477.9,alpha:0.932},0).wait(1).to({scaleX:1.01,x:476.4,alpha:0.915},0).wait(1).to({scaleX:0.99,x:475,alpha:0.898},0).wait(1).to({scaleX:0.98,x:473.5,alpha:0.881},0).wait(1).to({scaleX:0.96,x:472,alpha:0.864},0).wait(1).to({scaleX:0.94,x:470.6,alpha:0.847},0).wait(1).to({scaleX:0.93,x:469.1,alpha:0.831},0).wait(1).to({scaleX:0.91,x:467.7,alpha:0.814},0).wait(1).to({scaleX:0.9,x:466.2,alpha:0.797},0).wait(1).to({scaleX:0.88,x:464.8,alpha:0.78},0).wait(1).to({scaleX:0.86,x:463.3,alpha:0.763},0).wait(1).to({scaleX:0.85,x:461.8,alpha:0.746},0).wait(1).to({scaleX:0.83,x:460.4,alpha:0.729},0).wait(1).to({scaleX:0.82,x:458.9,alpha:0.712},0).wait(1).to({scaleX:0.8,x:457.5,alpha:0.695},0).wait(1).to({scaleX:0.78,x:456,alpha:0.678},0).wait(1).to({scaleX:0.77,x:454.5,alpha:0.661},0).wait(1).to({scaleX:0.75,x:453.1,alpha:0.644},0).wait(1).to({scaleX:0.73,x:451.6,alpha:0.627},0).wait(1).to({scaleX:0.72,x:450.2,alpha:0.61},0).wait(1).to({scaleX:0.7,x:448.7,alpha:0.593},0).wait(1).to({scaleX:0.69,x:447.2,alpha:0.576},0).wait(1).to({scaleX:0.67,x:445.8,alpha:0.559},0).wait(1).to({scaleX:0.65,x:444.3,alpha:0.542},0).wait(1).to({scaleX:0.64,x:442.9,alpha:0.525},0).wait(1).to({scaleX:0.62,x:441.4,alpha:0.508},0).wait(1).to({scaleX:0.61,x:439.9,alpha:0.492},0).wait(1).to({scaleX:0.59,x:438.5,alpha:0.475},0).wait(1).to({scaleX:0.57,x:437,alpha:0.458},0).wait(1).to({scaleX:0.56,x:435.6,alpha:0.441},0).wait(1).to({scaleX:0.54,x:434.1,alpha:0.424},0).wait(1).to({scaleX:0.53,x:432.6,alpha:0.407},0).wait(1).to({scaleX:0.51,x:431.2,alpha:0.39},0).wait(1).to({scaleX:0.49,x:429.7,alpha:0.373},0).wait(1).to({scaleX:0.48,x:428.3,alpha:0.356},0).wait(1).to({scaleX:0.46,x:426.8,alpha:0.339},0).wait(1).to({scaleX:0.45,x:425.3,alpha:0.322},0).wait(1).to({scaleX:0.43,x:423.9,alpha:0.305},0).wait(1).to({scaleX:0.41,x:422.4,alpha:0.288},0).wait(1).to({scaleX:0.4,x:421,alpha:0.271},0).wait(1).to({scaleX:0.38,x:419.5,alpha:0.254},0).wait(1).to({scaleX:0.37,x:418,alpha:0.237},0).wait(1).to({scaleX:0.35,x:416.5,alpha:0.22},0).wait(1).to({scaleX:0.33,x:415.1,alpha:0.203},0).wait(1).to({scaleX:0.32,x:413.6,alpha:0.186},0).wait(1).to({scaleX:0.3,x:412.2,alpha:0.169},0).wait(1).to({scaleX:0.28,x:410.7,alpha:0.153},0).wait(1).to({scaleX:0.27,x:409.2,alpha:0.136},0).wait(1).to({scaleX:0.25,x:407.8,alpha:0.119},0).wait(1).to({scaleX:0.24,x:406.3,alpha:0.102},0).wait(1).to({scaleX:0.22,x:404.9,alpha:0.085},0).wait(1).to({scaleX:0.21,x:403.4,alpha:0.068},0).wait(1).to({scaleX:0.19,x:401.9,alpha:0.051},0).wait(1).to({scaleX:0.17,x:400.5,alpha:0.034},0).wait(1).to({scaleX:0.16,x:399,alpha:0.017},0).wait(1).to({scaleX:0.14,x:397.6,alpha:0},0).to({_off:true},1).wait(1286));

	// bar bot
	this.instance_33 = new lib.ClipGroup_7();
	this.instance_33.parent = this;
	this.instance_33.setTransform(284.5,1224.1,0.33,1,0,0,0,711.9,1269.5);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(59).to({_off:false},0).wait(1).to({regX:1110,regY:476,scaleX:0.35,x:417.4,y:430.6,alpha:0.021},0).wait(1).to({scaleX:0.36,x:418.8,alpha:0.042},0).wait(1).to({scaleX:0.38,x:420.2,alpha:0.063},0).wait(1).to({scaleX:0.39,x:421.6,alpha:0.083},0).wait(1).to({scaleX:0.41,x:423,alpha:0.104},0).wait(1).to({scaleX:0.43,x:424.4,alpha:0.125},0).wait(1).to({scaleX:0.44,x:425.9,alpha:0.146},0).wait(1).to({scaleX:0.46,x:427.3,alpha:0.167},0).wait(1).to({scaleX:0.47,x:428.7,alpha:0.188},0).wait(1).to({scaleX:0.49,x:430.1,alpha:0.208},0).wait(1).to({scaleX:0.5,x:431.5,alpha:0.229},0).wait(1).to({scaleX:0.52,x:432.9,alpha:0.25},0).wait(1).to({scaleX:0.54,x:434.3,alpha:0.271},0).wait(1).to({scaleX:0.55,x:435.6,alpha:0.292},0).wait(1).to({scaleX:0.57,x:437.1,alpha:0.313},0).wait(1).to({scaleX:0.58,x:438.5,alpha:0.333},0).wait(1).to({scaleX:0.6,x:439.9,alpha:0.354},0).wait(1).to({scaleX:0.61,x:441.3,alpha:0.375},0).wait(1).to({scaleX:0.63,x:442.7,alpha:0.396},0).wait(1).to({scaleX:0.65,x:444.1,alpha:0.417},0).wait(1).to({scaleX:0.66,x:445.5,alpha:0.438},0).wait(1).to({scaleX:0.68,x:446.9,alpha:0.458},0).wait(1).to({scaleX:0.69,x:448.3,alpha:0.479},0).wait(1).to({scaleX:0.71,x:449.7,alpha:0.5},0).wait(1).to({scaleX:0.73,x:451.1,alpha:0.521},0).wait(1).to({scaleX:0.74,x:452.5,alpha:0.542},0).wait(1).to({scaleX:0.76,x:453.9,alpha:0.563},0).wait(1).to({scaleX:0.77,x:455.3,alpha:0.583},0).wait(1).to({scaleX:0.79,x:456.8,alpha:0.604},0).wait(1).to({scaleX:0.8,x:458.1,alpha:0.625},0).wait(1).to({scaleX:0.82,x:459.5,alpha:0.646},0).wait(1).to({scaleX:0.84,x:460.9,alpha:0.667},0).wait(1).to({scaleX:0.85,x:462.3,alpha:0.688},0).wait(1).to({scaleX:0.87,x:463.7,alpha:0.708},0).wait(1).to({scaleX:0.88,x:465.1,alpha:0.729},0).wait(1).to({scaleX:0.9,x:466.6,alpha:0.75},0).wait(1).to({scaleX:0.91,x:468,alpha:0.771},0).wait(1).to({scaleX:0.93,x:469.4,alpha:0.792},0).wait(1).to({scaleX:0.95,x:470.8,alpha:0.813},0).wait(1).to({scaleX:0.96,x:472.2,alpha:0.833},0).wait(1).to({scaleX:0.98,x:473.6,alpha:0.854},0).wait(1).to({scaleX:0.99,x:475,alpha:0.875},0).wait(1).to({scaleX:1.01,x:476.4,alpha:0.896},0).wait(1).to({scaleX:1.02,x:477.8,alpha:0.917},0).wait(1).to({scaleX:1.04,x:479.2,alpha:0.938},0).wait(1).to({scaleX:1.06,x:480.6,alpha:0.958},0).wait(1).to({scaleX:1.07,x:482,alpha:0.979},0).wait(1).to({scaleX:1.09,x:483.4,alpha:1},0).wait(274).to({scaleX:1.07,x:481.8,alpha:0.982},0).wait(1).to({scaleX:1.05,x:480.4,alpha:0.964},0).wait(1).to({scaleX:1.03,x:478.8,alpha:0.945},0).wait(1).to({scaleX:1.02,x:477.3,alpha:0.927},0).wait(1).to({scaleX:1,x:475.8,alpha:0.909},0).wait(1).to({scaleX:0.98,x:474.2,alpha:0.891},0).wait(1).to({scaleX:0.97,x:472.7,alpha:0.873},0).wait(1).to({scaleX:0.95,x:471.2,alpha:0.855},0).wait(1).to({scaleX:0.93,x:469.6,alpha:0.836},0).wait(1).to({scaleX:0.91,x:468.1,alpha:0.818},0).wait(1).to({scaleX:0.9,x:466.6,alpha:0.8},0).wait(1).to({scaleX:0.88,x:465,alpha:0.782},0).wait(1).to({scaleX:0.86,x:463.5,alpha:0.764},0).wait(1).to({scaleX:0.85,x:462,alpha:0.745},0).wait(1).to({scaleX:0.83,x:460.4,alpha:0.727},0).wait(1).to({scaleX:0.81,x:458.9,alpha:0.709},0).wait(1).to({scaleX:0.79,x:457.3,alpha:0.691},0).wait(1).to({scaleX:0.78,x:455.8,alpha:0.673},0).wait(1).to({scaleX:0.76,x:454.3,alpha:0.655},0).wait(1).to({scaleX:0.74,x:452.8,alpha:0.636},0).wait(1).to({scaleX:0.72,x:451.3,alpha:0.618},0).wait(1).to({scaleX:0.71,x:449.7,alpha:0.6},0).wait(1).to({scaleX:0.69,x:448.2,alpha:0.582},0).wait(1).to({scaleX:0.67,x:446.7,alpha:0.564},0).wait(1).to({scaleX:0.65,x:445.1,alpha:0.545},0).wait(1).to({scaleX:0.64,x:443.6,alpha:0.527},0).wait(1).to({scaleX:0.62,x:442.1,alpha:0.509},0).wait(1).to({scaleX:0.6,x:440.5,alpha:0.491},0).wait(1).to({scaleX:0.59,x:439,alpha:0.473},0).wait(1).to({scaleX:0.57,x:437.5,alpha:0.455},0).wait(1).to({scaleX:0.55,x:435.9,alpha:0.436},0).wait(1).to({scaleX:0.53,x:434.4,alpha:0.418},0).wait(1).to({scaleX:0.52,x:432.9,alpha:0.4},0).wait(1).to({scaleX:0.5,x:431.3,alpha:0.382},0).wait(1).to({scaleX:0.48,x:429.8,alpha:0.364},0).wait(1).to({scaleX:0.46,x:428.3,alpha:0.345},0).wait(1).to({scaleX:0.45,x:426.8,alpha:0.327},0).wait(1).to({scaleX:0.43,x:425.2,alpha:0.309},0).wait(1).to({scaleX:0.41,x:423.7,alpha:0.291},0).wait(1).to({scaleX:0.39,x:422.2,alpha:0.273},0).wait(1).to({scaleX:0.38,x:420.6,alpha:0.255},0).wait(1).to({scaleX:0.36,x:419.1,alpha:0.236},0).wait(1).to({scaleX:0.34,x:417.5,alpha:0.218},0).wait(1).to({scaleX:0.33,x:416,alpha:0.2},0).wait(1).to({scaleX:0.31,x:414.4,alpha:0.182},0).wait(1).to({scaleX:0.29,x:412.9,alpha:0.164},0).wait(1).to({scaleX:0.27,x:411.4,alpha:0.145},0).wait(1).to({scaleX:0.26,x:409.9,alpha:0.127},0).wait(1).to({scaleX:0.24,x:408.3,alpha:0.109},0).wait(1).to({scaleX:0.22,x:406.8,alpha:0.091},0).wait(1).to({scaleX:0.2,x:405.3,alpha:0.073},0).wait(1).to({scaleX:0.19,x:403.7,alpha:0.055},0).wait(1).to({scaleX:0.17,x:402.2,alpha:0.036},0).wait(1).to({scaleX:0.15,x:400.7,alpha:0.018},0).wait(1).to({scaleX:0.13,x:399.2,alpha:0},0).wait(4).to({_off:true},1).wait(1287));

	// circle 1
	this.instance_34 = new lib.circlebasic();
	this.instance_34.parent = this;
	this.instance_34.setTransform(266.3,66.6,1,1,0,0,0,68,68);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(60).to({_off:false},0).to({alpha:1},53).wait(260).to({alpha:0},56).to({_off:true},17).wait(1281));

	// circle 3
	this.instance_35 = new lib.circlebasic();
	this.instance_35.parent = this;
	this.instance_35.setTransform(266.3,429.6,1,1,0,0,0,68,68);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(55).to({_off:false},0).to({alpha:1},47).wait(271).to({alpha:0},56).to({_off:true},17).wait(1281));

	// circlecenter mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_2 = new cjs.Graphics().p("AUlOoIgFgBQgPgBgLgJQgNgLgFgRQgFgRAGgQQAGgQAOgKQALgHAMgCIADAAQAEA3AKAzIgIABIgEAAg");
	var mask_10_graphics_3 = new cjs.Graphics().p("AUPOoQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALQAOALAFAQQAFARgGARQgGARgOAJQgNAJgQAAIgEAAg");
	var mask_10_graphics_4 = new cjs.Graphics().p("AUjOyQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQARAAAOALQAOALAFARQAFAQgGARQgGARgOAJQgOAJgRAAIgCAAg");
	var mask_10_graphics_5 = new cjs.Graphics().p("AU7OzQgagCgPgIQgOAJgSAAQgSgBgOgLQgFgEgDgFQgSAAgOgLQgNgKgFgRQgEgRAGgQQAFgQAPgKQAOgKARAAQARABAPALIAJAIQAOABAMAHQAQgJAdgBQAmgBATAMQAVAOACAbQABAagUASQgTAPgkAAIgIAAg");
	var mask_10_graphics_6 = new cjs.Graphics().p("ABABOQgSgIgCgTIAAAAIAAgHIAAAAQACgNALgVIAAAAIAagtIABgBQAKgUALgGIAAAAQAQgKARAJIAAAAQASAJABATIAAAAQABANgMAWIAAAAIgYAtQgNAZgMAHIAAAAQgJAFgJAAIAAAAQgHAAgIgEgAAHAuQgYgBgPgJIAAAAQgOAKgTgBIAAAAQgSgBgNgKIAAAAQgFgEgEgFIAAAAQgSgBgNgKIAAAAQgNgLgFgQIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARABIAAAAQARAAAOALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAdgBIAAAAQAmgBASANIAAAAQALAHAGAKIAAAAIgaAtQgLAVgCANIAAAAQgMADgQAAIAAAAIgJgBg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AWRPFQgJgBgOgFIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQAOAMAEATQAFASgHARQgGARgRAKQgNAJgOAAIgHgBg");
	var mask_10_graphics_8 = new cjs.Graphics().p("ACWBtQgPgBgIgLIAAAAQgOgTAJgdIAAAAIABgDIAAAAQAPggADgQIAAAAIADgPIAAAAIABgGIAAAAIACgIIAAAAQAFgJAKgGIAAAAQALgFAKACIAAAAQALACAIAIIAAAAQAIAIACALIAAAAIACAUIAAAAQADAFAHALIAAAAQAIAQgKAPIAAAAQgDAEgGAFIAAAAIgKAJIAAAAQgEAFgJAPIAAAAQgIANgGAFIAAAAQgJAGgMAAIAAAAIgFAAgABZA5QgJgBgOgGIAAAAIgWgIIAAAAQgagEgMgFIAAAAQgNgFgJgMIAAAAIgBgCIAAAAQgSAGgbgBIAAAAQgZgBgPgJIAAAAQgOAKgTgBIAAAAQgSgBgNgKIAAAAQgFgEgEgEIAAAAQgSgBgNgKIAAAAQgNgLgFgRIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARABIAAAAQARAAAOALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAegBIAAAAQAmgBASANIAAAAQAIAFAFAIIAAAAQAJgDAMgBIAAAAQAfgDAdAJIAAAAQAaAHANANIAAAAQAKAJAFAMIAAAAIgBAGIAAAAIgDAPIAAAAQgDAQgPAgIAAAAIgBADIAAAAQgNAIgNAAIAAAAIgHAAg");
	var mask_10_graphics_9 = new cjs.Graphics().p("AWoPgQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARQAKAbgNAYQgHALgLAIQgMAIgNAAIgDABQgTAAgVgOg");
	var mask_10_graphics_10 = new cjs.Graphics().p("ADMCRQgLgDgIgKIAAAAQgHgLAAgLIAAAAQAAgHADgIIAAAAIAHgOIAAAAQALgVACgHIAAAAQADgOADgIIAAAAIAFgHIAAAAQAHgKAOgCIAAAAQASgCAMAOIAAAAQAKALAAAWIAAAAQABAUgIAPIAAAAIgLASQgFAOgEAGIAAAAQgHAKgMAEIAAAAQgGADgHAAIAAAAQgFAAgFgCgAB6BVQgagTgOgIIAAAAIgagOIAAAAQgPgKgHgKIAAAAIgFgIIAAAAIgIgEIAAAAIgVgIIAAAAQgagDgNgFIAAAAQgOgFgJgMIAAAAIgBgCIAAAAQgSAHgagCIAAAAQgagBgPgIIAAAAQgOAJgSAAIAAAAQgSgBgOgLIAAAAQgFgEgDgFIAAAAQgSAAgOgLIAAAAQgNgLgFgRIAAAAQgEgRAGgPIAAAAQAFgRAPgJIAAAAQAOgLARABIAAAAQARAAAPALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgJAdgBIAAAAQAmgCATANIAAAAQAIAFAGAIIAAAAQAJgDAMgBIAAAAQAdgDAeAJIAAAAQAZAHAOAOIAAAAQAKAKAFANIAAAAIAKACIAAAAQARAEAaAQIAAAAQAWAOAMALIAAAAQARAOAHARIAAAAIABAEIAAAAIgFAHIAAAAQgDAIgDAOIAAAAQgCAHgLAVIAAAAIgHAOIAAAAQgIAEgIAAIAAAAIgEAAIAAAAQgSAAgVgOg");
	var mask_10_graphics_11 = new cjs.Graphics().p("AX4QaQgTgEgTgSIggghIgSgSQgIgJgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARIABABIADAAQAaAFAgAiQAVAVAKAQQAOAWgDAVQgCAWgUAPQgPAMgRAAIgJgBg");
	var mask_10_graphics_12 = new cjs.Graphics().p("ADDDMQgLgCgJgJIAAAAQgJgKAAgMIAAAAQAAgUAWgSIAAAAIABgBIAAAAIARgMIAAAAQAMgIAGgFIAAAAQAJgIALgQIAAAAIAEgGIAAAAIAPgTIAAAAQALgNAOgGIAAAAQAPgHAOAFIAAAAQALAEAHAKIAAAAQAGALgCAMIAAAAQgCAOgVAVIAAAAIgmAtIAAAAQgXAagVANIAAAAQgRALgQAAIAAAAIgGAAgAC5CDQgTgDgUgSIAAAAIgggiIAAAAIgRgRIAAAAQgJgKgEgIIAAAAQgOgDgPgKIAAAAQgagTgOgIIAAAAIgZgOIAAAAQgPgJgHgKIAAAAIgFgJIAAAAIgIgDIAAAAIgWgIIAAAAQgagEgNgFIAAAAQgOgFgJgMIAAAAIgBgCIAAAAQgSAGgagBIAAAAQgagBgPgJIAAAAQgOAKgSgBIAAAAQgSgBgOgKIAAAAQgFgEgDgFIAAAAQgSgBgOgKIAAAAQgNgLgFgRIAAAAQgEgRAGgQIAAAAQAFgQAPgKIAAAAQAOgKARABIAAAAQARAAAPALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAdgBIAAAAQAmgBATANIAAAAQAIAFAGAIIAAAAQAJgDAMgBIAAAAQAegDAeAJIAAAAQAYAHAOANIAAAAQAKAKAFAOIAAAAIAKABIAAAAQARAEAaARIAAAAQAWAOAMALIAAAAQARAPAHARIAAAAIAAABIAAAAIAEABIAAAAQAZAFAhAgIAAAAQAVAVAJAQIAAAAQAMATAAASIAAAAIgEAGIAAAAQgLAQgJAIIAAAAQgGAFgMAIIAAAAIgRAMIAAAAIgEgBg");
	var mask_10_graphics_13 = new cjs.Graphics().p("AYtRXQgRgBgPgJQgNgIgNgRIgUgfQgVgkgEgLIgDgKQgRgFgSgQIggghIgRgSQgJgJgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgLIgFgIIgIgDIgWgJQgagDgNgFQgOgFgJgNIgBgBQgSAGgagBQgagCgPgIQgOAJgSAAQgSgBgOgLQgFgEgDgFQgSAAgOgLQgNgKgFgRQgEgRAGgQQAFgQAPgKQAOgKARAAQARABAPALIAJAIQAOABAMAHQAQgJAdgBQAmgBATAMQAIAGAGAHQAJgDAMgBQAegDAeAJQAZAHAOAOQAKAKAFANIAKACQARAEAaARQAWANAMALQARAQAHARIAAABIAEAAQAZAFAhAiQAVAVAJAQQAFAIADAIQAIACAIAFQANAIAQAZIAoA8QAOAVACAMQAEARgIAQQgIAPgOAJQgOAIgQAAIgCgBg");
	var mask_10_graphics_14 = new cjs.Graphics().p("AD0EOQgPgEgHgMIAAAAQgHgPAHgWIAAAAQAGgSALgOIAAAAQAHgIAJgHIAAAAIAYgRIAAAAQAQgKAHgJIAAAAIAGgIIAAAAIADgEIAAAAIALgMIAAAAQAOgMATAHIAAAAQAIADAGAHIAAAAQAGAHACAJIAAAAQAEATgTAZIAAAAIgGAIIAAAAIAAAEIAAAAQACAKgEAJIAAAAQgDAGgHALIAAAAQgFANgDAFIAAAAQgGAKgMAEIAAAAQgMAEgLgDIAAAAQgGgCgFgDIAAAAQgHALgGAEIAAAAQgIAGgJAAIAAAAIgKgCgADZCwQgNgIgNgRIAAAAIgUgfIAAAAQgVgkgEgLIAAAAIgDgKIAAAAQgRgFgSgQIAAAAIggghIAAAAIgRgRIAAAAQgJgJgEgIIAAAAQgOgDgPgKIAAAAQgZgTgOgIIAAAAIgagPIAAAAQgPgJgHgLIAAAAIgFgIIAAAAIgIgDIAAAAIgWgJIAAAAQgagDgNgFIAAAAQgOgFgJgNIAAAAIgBgBIAAAAQgSAGgagBIAAAAQgagCgPgIIAAAAQgOAJgSAAIAAAAQgSgBgOgLIAAAAQgFgEgDgFIAAAAQgSAAgOgLIAAAAQgNgKgFgRIAAAAQgEgRAGgQIAAAAQAFgQAPgKIAAAAQAOgKARAAIAAAAQARABAPALIAAAAIAJAIIAAAAQAOABAMAHIAAAAQAQgJAdgBIAAAAQAmgBATAMIAAAAQAIAGAGAHIAAAAQAJgDAMgBIAAAAQAegDAeAJIAAAAQAZAHAOAOIAAAAQAKAKAFANIAAAAIAJACIAAAAQARAEAaARIAAAAQAWANAMALIAAAAQARAQAHARIAAAAIAAABIAAAAIAEAAIAAAAQAZAFAhAiIAAAAQAVAVAJAQIAAAAQAFAIADAIIAAAAQAIACAIAFIAAAAQANAHAQAZIAAAAIAoA8QAOAVACAMIAAAAIABAEIAAAAIgGAIIAAAAQgHAJgQAKIAAAAIgYARIAAAAQgJAHgHAIIAAAAQgLgCgLgHg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AX+STQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgNAcgYASQgZARgfACIgIAAQgaAAgXgMg");
	var mask_10_graphics_16 = new cjs.Graphics().p("AEQFPQgFgFgDgHIAAAAIgIAAIAAAAQgbgBgLgLIAAAAQgKgIAAgOIAAAAQgBgOAIgJIAAAAQAJgLAQgDIAAAAQgQgCgPgIIAAAAQgbgOgQgaIAAAAQgQgbAAgeIAAAAQAAgbANgXIAAAAQgJgIgIgLIAAAAIgUggIAAAAQgVgkgEgJIAAAAIgDgKIAAAAQgSgFgRgQIAAAAIgggiIAAAAIgSgRIAAAAQgIgKgEgIIAAAAQgNgDgQgKIAAAAQgagTgNgIIAAAAIgbgPIAAAAQgPgJgHgKIAAAAIgEgJIAAAAIgJgDIAAAAIgWgIIAAAAQgagEgMgFIAAAAQgOgFgJgMIAAAAIgBgCIAAAAQgSAGgbgBIAAAAQgZgBgPgJIAAAAQgOAKgTgBIAAAAQgSgBgNgKIAAAAQgFgEgEgFIAAAAQgSgBgNgKIAAAAQgNgLgFgRIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARABIAAAAQARAAAOALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAegBIAAAAQAmgBASANIAAAAQAJAFAFAIIAAAAQAJgDAMgBIAAAAQAfgDAdAJIAAAAQAaAHANANIAAAAQALAKAFAOIAAAAIAJABIAAAAQARAEAaARIAAAAQAWAOAMALIAAAAQARAPAGARIAAAAIABABIAAAAIADABIAAAAQAaAFAgAhIAAAAQAVAVAKAQIAAAAQAFAIADAJIAAAAQAIABAHAFIAAAAQAOAIAQAaIAAAAIAnA7QAJANAEAKIAAAAQAPAAAOAEIAAAAQAiAJAWAZIAAAAQAUAZAEAfIAAAAQAEAcgLAcIAAAAQgGAAgFACIAAAAQgJADgPALIAAAAIgvAkIgOAMIAAAAIgBAAIAAAAIABAAIAAAAIAOgMIAAAAIAvgkQAPgLAJgDIAAAAQAFgCAGAAIAAAAIAKAAIAAAAQALACAIAGIAAAAQAIAHADAKIAAAAQADAKgDAIIAAAAIACABIAAAAQARAIADASIAAAAQADAOgHALIAAAAQADAGAAAHIAAAAQABAKgFAKIAAAAQgGAJgJAGIAAAAQgHAEgWAFIAAAAQgkAHgXABIAAAAIgEAAIAAAAQgaAAgMgMgAD2D8IAPgBIAAAAIgPABgAEGD7IAAAAIAAAAIAAAAg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AY8UhQgrgCgbgeQgmgpAChgQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBpgxAqQgbAWglAAIgJAAg");
	var mask_10_graphics_18 = new cjs.Graphics().p("AFWHeQgLgBgXgIIAAAAQgXgIgMgCIAAAAQgVgBgKgCIAAAAQgSgDgJgJIAAAAQgKgJABgQIAAAAQABgPALgJIAAAAQAGgFAMgDIAAAAQAAgHAEgGIAAAAIAFgHIAAAAQAJgIAOgCIAAAAQAGgBAcAAIAAAAIAZgBIgZABQgcAAgGABIAAAAQgOACgJAIIAAAAQgKgHgJgJIAAAAQgmgqAChfIAAAAQABggAEgUIAAAAQAFgcAMgUIAAAAIACgCIAAAAIgCgCIAAAAQgbgNgQgbIAAAAQgQgbAAgeIAAAAQAAgZANgYIAAAAQgJgHgIgMIAAAAIgUgfIAAAAQgVgkgEgLIAAAAIgDgKIAAAAQgSgFgRgQIAAAAIggghIAAAAIgSgSIAAAAQgIgJgEgIIAAAAQgNgDgQgKIAAAAQgagTgNgIIAAAAIgbgPIAAAAQgPgJgHgLIAAAAIgEgIIAAAAIgJgDIAAAAIgWgJIAAAAQgagDgMgFIAAAAQgOgFgJgNIAAAAIgBgBIAAAAQgSAGgbgBIAAAAQgZgCgPgIIAAAAQgOAJgTAAIAAAAQgSgBgNgLIAAAAQgFgEgEgFIAAAAQgSAAgNgLIAAAAQgNgKgFgRIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARAAIAAAAQARABAOALIAAAAIAJAIIAAAAQAOABAMAHIAAAAQAQgJAegBIAAAAQAmgBASAMIAAAAQAJAGAFAHIAAAAQAJgDAMgBIAAAAQAfgDAdAJIAAAAQAaAHANAOIAAAAQALAKAFANIAAAAIAJACIAAAAQARAEAaARIAAAAQAWANAMALIAAAAQARAQAGARIAAAAIABABIAAAAIADAAIAAAAQAaAFAgAiIAAAAQAVAVAKAQIAAAAQAFAIADAIIAAAAQAIACAHAFIAAAAQAOAIAQAZIAAAAIAnA8QAJAOAEAJIAAAAQAPAAAOAEIAAAAQAiAJAWAaIAAAAQAUAYAEAfIAAAAQAEAdgMAcIAAAAQgFALgGAJIAAAAQAWALAOATIAAAAQAaAkACBHIAAAAQADBngwArIAAAAQgIgDgKgBIAAAAIgGgBIAAAAIAGABIAAAAQAKABAIADIAAAAQAQAFAJALIAAAAQAJAKABANIAAAAIgBAJIAAAAQASAOgCATIAAAAQgDATgZALIAAAAQgSAIgUAAIAAAAIgMgBgAFNFjIADAAIAAAAIgDAAgAFRFjIgBAAIAAAAIABAAg");
	var mask_10_graphics_19 = new cjs.Graphics().p("AYVWaQgfgDgZgRQgYgSgNgdQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgYALgZAAIgKAAg");
	var mask_10_graphics_20 = new cjs.Graphics().p("ADUJPQgJgGgPgNIAAAAIgTgTIgPgQIAAAAIgCgDIAAAAQgGgEgEgFIAAAAQgIgJgBgNIAAAAQAAgMAHgKIAAAAQAKgLAfgFIAAAAIABgBIAAAAQgJgLgGgOIAAAAQgNgdAEgeIAAAAIAGgZIAAAAIAHgZIAAAAQAGgtAIgWIAAAAQAKgaAXgSIAAAAIAAAAIAAAAQgbgqAChSIAAAAQABggADgTIAAAAQAFgdANgSIAAAAIACgDIAAAAIgDgBIAAAAQgagOgQgaIAAAAQgQgbAAgeIAAAAQAAgbANgXIAAAAQgJgIgJgLIAAAAIgUggIAAAAQgVgkgEgKIAAAAIgDgKIAAAAQgRgFgSgQIAAAAIgggiIAAAAIgRgRIAAAAQgJgKgEgIIAAAAQgNgDgPgKIAAAAQgagTgOgIIAAAAIgagPIAAAAQgPgJgHgKIAAAAIgFgJIAAAAIgIgDIAAAAIgWgIIAAAAQgagEgNgFIAAAAQgOgFgJgMIAAAAIgBgCIAAAAQgSAGgagBIAAAAQgagBgPgJIAAAAQgOAKgSgBIAAAAQgSgBgOgKIAAAAQgFgEgDgFIAAAAQgSgBgOgKIAAAAQgNgLgFgRIAAAAQgEgRAGgQIAAAAQAFgQAPgKIAAAAQAOgKARABIAAAAQARAAAPALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAdgBIAAAAQAmgBATANIAAAAQAIAFAGAIIAAAAQAJgDAMgBIAAAAQAegDAeAJIAAAAQAZAHAOANIAAAAQAKAKAFAOIAAAAIAKABIAAAAQARAEAZARIAAAAQAWAOAMALIAAAAQARAPAHARIAAAAIAAABIAAAAIAEABIAAAAQAZAFAhAhIAAAAQAVAVAJAQIAAAAQAFAIADAJIAAAAQAIABAIAFIAAAAQANAIAQAaIAAAAIAoA8QAJANAEAKIAAAAQAOAAAPAEIAAAAQAiAJAVAZIAAAAQAVAZAEAfIAAAAQAEAdgNAdIAAAAQgEAKgGAJIAAAAQAVAMAPATIAAAAQAaAiACBHIAAAAQADBogxArIAAAAQAZAkAAA9IAAAAQAAAygTApIAAAAQgVAugnATIAAAAQgOAHgPADIAAAAIgEgFIAAAAQgdgdgYgGIAAAAQAYAGAdAdIAAAAIAEAFIAAAAQAVAYgEARIAAAAQgCALgKAHIAAAAQgJAHgMACIAAAAIgIAAIAAAAIgDAHIAAAAQgIAOgOADIAAAAIgGAAIAAAAQgLAAgLgGgAC8HQIAVgCIAAAAIgVACgADSHOIAAAAIAAAAIAAAAg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AWcYNQgcgCgYgPQgXgPgNgaQgOgZAAgbQAAgZALglQAThDAggbQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgYQAHguAIgVQAKgaAWgSIABgBQgbgqABhRQABggAEgUQAFgcAMgUIACgCIgCgCQgbgNgQgbQgQgbAAgeQAAgaANgYQgJgHgIgMIgUgfQgVgkgEgLIgDgKQgSgFgRgQIggghIgSgSQgIgJgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARIABABIADAAQAaAFAgAiQAVAVAKAQQAFAIADAIQAIACAHAFQAOAIAQAZIAnA8QAJAOAEAJQAPAAAOAEQAiAJAWAaQAUAYAEAfQAEAegMAcQgFALgGAJQAWALAOATQAaAkACBHQADBogwAqQAZAkAAA9QgBAzgSAoQgVAvgnATQgbANgegCQAMAZABAgQABAugVAsQgZA0gmATQgVALgYAAIgIAAg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AACK3QgVgCgSgdIAAAAQgPgXgIgWIAAAAQgKgYAGgQIAAAAQACgIAHgGIAAAAQAHgGAIgCIAAAAQANgEALAHIAAAAIACgGIAAAAQAHgSASgFIAAAAQAOgEALAGIAAAAIAIAGIAAAAQAHAGAFALIAAAAIAIATIAAAAIAMAXIAAAAQAHANAEAJIAAAAIABACIAAAAQAFAOgBANIAAAAQgBAOgIAKIAAAAQgOAPgTgFIAAAAQgFgBgIgEIAAAAIgFAGIAAAAQgLALgOAAIAAAAIgFAAgACLJ9QgdgCgXgPIAAAAQgEgJgHgNIAAAAIgMgXIAAAAIgIgTIAAAAQgFgLgHgGIAAAAIgIgGIAAAAIAAgGIAAAAQAAgZALgkIAAAAQAUhEAfgaIAAAAQAegZArADIAAAAIgEgJIAAAAQgNgdAEgeIAAAAIAGgZIAAAAIAHgZIAAAAQAGgtAIgWIAAAAQAKgaAXgSIAAAAIAAAAIAAAAQgbgqAChRIAAAAQABggADgTIAAAAQAFgdANgTIAAAAIACgDIAAAAIgDgBIAAAAQgagOgQgaIAAAAQgQgbAAgeIAAAAQAAgbANgXIAAAAQgJgIgJgLIAAAAIgUggIAAAAQgVgkgEgKIAAAAIgDgKIAAAAQgRgFgSgQIAAAAIgggiIAAAAIgRgRIAAAAQgJgKgEgIIAAAAQgNgDgPgKIAAAAQgagTgOgIIAAAAIgagPIAAAAQgPgJgHgKIAAAAIgFgJIAAAAIgIgDIAAAAIgWgIIAAAAQgagEgNgFIAAAAQgOgFgJgMIAAAAIgBgCIAAAAQgSAGgagBIAAAAQgagBgPgJIAAAAQgOAKgSgBIAAAAQgSgBgOgKIAAAAQgFgEgDgFIAAAAQgSgBgOgKIAAAAQgNgLgFgRIAAAAQgEgRAGgQIAAAAQAFgQAPgKIAAAAQAOgKARABIAAAAQARAAAPALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAdgBIAAAAQAmgBATANIAAAAQAIAFAGAIIAAAAQAJgDAMgBIAAAAQAegDAeAJIAAAAQAZAHAOANIAAAAQAKAKAFAOIAAAAIAKABIAAAAQARAEAZARIAAAAQAWAOAMALIAAAAQARAPAHARIAAAAIAAABIAAAAIAEABIAAAAQAZAFAhAhIAAAAQAVAVAJAQIAAAAQAFAIADAJIAAAAQAIABAIAFIAAAAQANAIAQAaIAAAAIAoA8QAJANAEAKIAAAAQAOAAAPAEIAAAAQAiAJAVAZIAAAAQAVAZAEAfIAAAAQAEAdgNAdIAAAAQgEAKgGAJIAAAAQAVAMAPATIAAAAQAaAjACBHIAAAAQADBngxArIAAAAQAZAkAAA9IAAAAQAAAygTApIAAAAQgVAugnATIAAAAQgbANgegCIAAAAQANAZABAhIAAAAQABAtgVAsIAAAAQgZA0gmAUIAAAAQgVAKgYAAIAAAAIgIAAg");
	var mask_10_graphics_23 = new cjs.Graphics().p("ARXZFQgYgNgQgYQgPgYgCgcQgCgbAMgaQAMgaAWgQQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQggAJgcAAQgjAAgbgOg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AkmL5QgKgGgHgPIAAAAQgLgWgBgjIAAAAIAAgEIAAAAIgDgKIAAAAQgBgGABgWIAAAAQAAgQgDgXIAAAAIgEgEIAAAAQgSgUgHgLIAAAAQgMgUADgSIAAAAQADgXATgIIAAAAIAEgCIAAAAQgBgJACgHIAAAAQACgJAHgGIAAAAQAIgHAJgCIAAAAQAUgEAOAPIAAAAQAPAQgCAhIAAAAQgBAQABAFIAAAAQACAHAFALIAAAAQACAGABAJIAAAAIADAFIAAAAQACADAHADIAAAAIADACIAAAAQAGAFAIAOIAAAAQAIAPANAOIAAAAIAPASIAAAAQAKAOAAAOIAAAAQAAgOgKgOIAAAAIgPgSIAAAAQgNgOgIgPIAAAAQgIgOgGgFIAAAAQACgQAHgPIAAAAQAMgaAWgQIAAAAQAQgLAbgKIAAAAIAugQIAAAAIAlgQIAAAAQAWgKAPgEIAAAAQAggKAgAGIAAAAIAJACIAAAAQADgUAHgZIAAAAQAUhEAfgaIAAAAQAegZArADIAAAAIgEgJIAAAAQgNgdAEgeIAAAAIAGgZIAAAAIAHgZIAAAAQAGgtAIgWIAAAAQAKgaAXgSIAAAAIAAAAIAAAAQgbgqAChRIAAAAQABggADgTIAAAAQAFgdANgTIAAAAIACgDIAAAAIgDgBIAAAAQgagOgQgaIAAAAQgQgbAAgeIAAAAQAAgbANgXIAAAAQgJgIgJgLIAAAAIgUggIAAAAQgVgkgEgKIAAAAIgDgKIAAAAQgRgFgSgQIAAAAIgggiIAAAAIgRgRIAAAAQgJgKgEgIIAAAAQgNgDgPgKIAAAAQgagTgOgIIAAAAIgagPIAAAAQgPgJgHgKIAAAAIgFgJIAAAAIgIgDIAAAAIgWgIIAAAAQgagEgNgFIAAAAQgOgFgJgMIAAAAIgBgCIAAAAQgSAGgagBIAAAAQgagBgPgJIAAAAQgOAKgSgBIAAAAQgSgBgOgKIAAAAQgFgEgDgFIAAAAQgSgBgOgKIAAAAQgNgLgFgRIAAAAQgEgRAGgQIAAAAQAFgQAPgKIAAAAQAOgKARABIAAAAQARAAAPALIAAAAIAJAJIAAAAQAOAAAMAIIAAAAQAQgKAdgBIAAAAQAmgBATANIAAAAQAIAFAGAIIAAAAQAJgDAMgBIAAAAQAegDAeAJIAAAAQAZAHAOANIAAAAQAKAKAFAOIAAAAIAKABIAAAAQARAEAZARIAAAAQAWAOAMALIAAAAQARAPAHARIAAAAIAAABIAAAAIAEABIAAAAQAZAFAhAhIAAAAQAVAVAJAQIAAAAQAFAIADAJIAAAAQAIABAIAFIAAAAQANAIAQAaIAAAAIAoA8QAJANAEAKIAAAAQAOAAAPAEIAAAAQAiAJAVAZIAAAAQAVAZAEAfIAAAAQAEAdgNAdIAAAAQgEAKgGAJIAAAAQAVAMAPATIAAAAQAaAjACBHIAAAAQADBngxArIAAAAQAZAkAAA9IAAAAQAAAygTApIAAAAQgVAugnATIAAAAQgbANgegCIAAAAQANAZABAhIAAAAQABAtgVAsIAAAAQgZA0gmAUIAAAAQgYAMgdgCIAAAAQgJAAgIgCIAAAAQgFAegUAXIAAAAQgTAWguAWIAAAAQg2AbgpAKIAAAAQhKAUgxgZIAAAAQgDAHgFAFIAAAAQgIAHgKABIAAAAQgMABgCACIAAAAQgEACgCAHIAAAAIgKAOQgLARgKAFIAAAAQgIADgHAAIAAAAQgIAAgIgEg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AM/ZSQhBgWgbgpQgPgXgBgdQgCgdAMgZQANgZAXgQQAYgRAcgCQAYgCAkAJIA8AQIBaAFQAYABAUAFQAJgNANgKQAQgLAbgKIAugQIAlgQQAWgKAPgEQAggKAhAGIAJACQADgUAHgZQAUhEAfgaQAegZArADIgEgJQgNgdAEgeIAGgZIAHgZQAGgtAIgWQAKgaAXgSIAAAAQgbgqAChSQABggADgTQAFgdANgTIACgDIgDgBQgagOgQgaQgQgbAAgeQAAgbANgXQgJgIgJgLIgUggQgVgkgEgKIgDgKQgRgFgSgQIgggiIgRgRQgJgKgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgKIgFgJIgIgDIgWgIQgagEgNgFQgOgFgJgMIgBgCQgSAGgagBQgagBgPgJQgOAKgSgBQgSgBgOgKQgFgEgDgFQgSgBgOgKQgNgLgFgRQgEgRAGgQQAFgQAPgKQAOgKARABQARAAAPALIAJAJQAOAAAMAIQAQgKAdgBQAmgBATANQAIAFAGAIQAJgDAMgBQAegDAeAJQAZAHAOANQAKAKAFAOIAKABQARAEAaARQAWAOAMALQARAPAHARIAAABIAEABQAZAFAhAhQAVAVAJAQQAFAIADAJQAIABAIAFQANAIAQAaIAoA8QAJANAEAKQAOAAAPAEQAiAJAVAZQAVAZAEAfQAEAdgNAdQgEAKgGAJQAVAMAPATQAaAjACBHQADBogxArQAZAkAAA9QAAAygTApQgVAugnATQgbANgegCQANAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgFAegUAXQgTAWguAWQg3AbgpAKQg3APgogKQgOARgTALQghAShBAAQhsAAhEgWg");
	var mask_10_graphics_26 = new cjs.Graphics().p("AlWLfQglgMgZgSIAAAAQgFAGgGADIAAAAQgLAFgNgCIAAAAQgMgDgKgHIAAAAQgJAOgQABIAAAAQgMABgJgFIAAAAIgCgBIAAAAQgJgBgIgGIAAAAQgHgHgDgJIAAAAQgGgPAFgVIAAAAQADgMAJgXIAAAAQAKgXADgMIAAAAIAEgUIAAAAQAEgMAFgHIAAAAIABgBIAAAAIADgNIAAAAQABgPACgHIAAAAIAHgSIAFgRIAAAAQAFgLALgHIAAAAQAKgHAMAAIAAAAQANAAAKAHIAAAAQALAGAFALIAAAAQAFAMgBAWIAAAAIAAALIAAAAQAAAQADAHIAAAAIAFAQQACAHAAAPIAAAAIABAkIgBgkQAAgPgCgHIAAAAIgFgQQgDgHAAgQIAAAAQAWgOAYgCIAAAAQAYgCAlAKIAAAAIA8APIAAAAIBZAFIAAAAQAZACATAEIAAAAQAKgNANgJIAAAAQAQgMAbgJIAAAAIAsgQIAAAAIAlgQIAAAAQAXgKAOgFIAAAAQAhgJAhAFIAAAAIAJACIAAAAQACgUAIgZIAAAAQAThDAggbIAAAAQAegZAqADIAAAAIgEgJIAAAAQgMgdAEgeIAAAAIAFgZIAAAAIAHgYIAAAAQAHguAIgVIAAAAQAKgaAWgSIAAAAIABgBIAAAAQgbgqABhQIAAAAQABggAEgUIAAAAQAFgcAMgUIAAAAIACgCIAAAAIgCgCIAAAAQgbgNgQgbIAAAAQgQgbAAgeIAAAAQAAgaANgYIAAAAQgJgHgIgMIAAAAIgUgfIAAAAQgVgkgEgLIAAAAIgDgKIAAAAQgSgFgRgQIAAAAIggghIAAAAIgSgSIAAAAQgIgJgEgIIAAAAQgOgDgQgKIAAAAQgagTgNgIIAAAAIgbgPIAAAAQgPgJgHgLIAAAAIgEgIIAAAAIgIgDIAAAAIgWgJIAAAAQgagDgMgFIAAAAQgOgFgJgNIAAAAIgBgBIAAAAQgSAGgbgBIAAAAQgZgCgPgIIAAAAQgOAJgTAAIAAAAQgSgBgNgLIAAAAQgFgEgEgFIAAAAQgSAAgNgLIAAAAQgNgKgFgRIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARAAIAAAAQARABAOALIAAAAIAJAIIAAAAQAOABAMAHIAAAAQAQgJAegBIAAAAQAmgBASAMIAAAAQAJAGAFAHIAAAAQAJgDAMgBIAAAAQAfgDAcAJIAAAAQAaAHANAOIAAAAQALAKAFANIAAAAIAJACIAAAAQARAEAbARIAAAAQAWANAMALIAAAAQARAQAGARIAAAAIABABIAAAAIADAAIAAAAQAaAFAgAiIAAAAQAVAVAKAQIAAAAQAFAIADAIIAAAAQAIACAHAFIAAAAQAOAIAQAZIAAAAIAnA8QAJAOAEAJIAAAAQAPAAAOAEIAAAAQAiAJAWAaIAAAAQAUAYAEAfIAAAAQAEAegMAcIAAAAQgFALgGAJIAAAAQAWALAOATIAAAAQAaAkACBHIAAAAQADBngwAqIAAAAQAZAkAAA9IAAAAQgBAzgSAoIAAAAQgVAvgnATIAAAAQgbANgegCIAAAAQAMAZABAgIAAAAQABAugVAsIAAAAQgZA0gmATIAAAAQgYANgdgCIAAAAQgJgBgIgCIAAAAQgEAegUAXIAAAAQgUAXguAWIAAAAQg3AagpALIAAAAQg2AOgogJIAAAAQgNARgTAKIAAAAQghAThCAAIAAAAQhrAAhEgXgAmKKmIAAgIIAAAAIAAAIg");
	var mask_10_graphics_27 = new cjs.Graphics().p("ANAZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQhMhIAFhFQADgdASgZQARgZAbgMQAbgMAeADQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AjMLfQgTgGgQgIIAAAAIgNAIIAAAAQgkAVgrABIAAAAQg4ACg6gcIAAAAQgzgYgugrIAAAAQhMhJAFhEIAAAAIAAgBIAAAAQgGACgGAAIAAAAQgKgBgKgJIAAAAIgPgSIAAAAIgMgPIAAAAQgGgJAAgJIAAAAQAAgPAVgTIAAAAQATgRAbgVIAAAAQASgNALABIAAAAIARACIAAAAIAJgCIAAAAIAIgEIAAAAQALgDALAEIAAAAQALAEAGAJIAAAAQAHAKgBALIAAAAQAAAGgBAGIAAAAIANAAIAAAAQAfAEAXARIAAAAQAMAJAfAiIAAAAQAZAcAVAJIAAAAQAMAFAUACIAAAAIAiAFIAAAAIAIACIAAAAIAIgGIAAAAQAYgQAbgDIAAAAQAYgCAlAKIAAAAIA8APIAAAAIBZAFIAAAAQAYACATAEIAAAAQAKgNANgJIAAAAQAQgMAbgJIAAAAIAtgQIAAAAIAlgQIAAAAQAXgKAOgFIAAAAQAhgJAhAFIAAAAIAJACIAAAAQACgUAIgZIAAAAQAThDAggbIAAAAQAegZAqADIAAAAIgEgJIAAAAQgMgdAEgeIAAAAIAFgZIAAAAIAHgYIAAAAQAHguAIgVIAAAAQAKgaAWgSIAAAAIABgBIAAAAQgbgqABhQIAAAAQABggAEgUIAAAAQAFgcAMgUIAAAAIACgCIAAAAIgCgCIAAAAQgbgNgQgbIAAAAQgQgbAAgeIAAAAQAAgaANgYIAAAAQgJgHgIgMIAAAAIgUgfIAAAAQgVgkgEgLIAAAAIgDgKIAAAAQgSgFgRgQIAAAAIggghIAAAAIgSgSIAAAAQgIgJgEgIIAAAAQgOgDgQgKIAAAAQgagTgNgIIAAAAIgbgPIAAAAQgPgJgHgLIAAAAIgEgIIAAAAIgJgDIAAAAIgWgJIAAAAQgagDgMgFIAAAAQgOgFgJgNIAAAAIgBgBIAAAAQgSAGgbgBIAAAAQgYgCgPgIIAAAAQgOAJgTAAIAAAAQgSgBgNgLIAAAAQgFgEgEgFIAAAAQgSAAgNgLIAAAAQgNgKgFgRIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARAAIAAAAQARABAOALIAAAAIAJAIIAAAAQAOABAMAHIAAAAQAQgJAdgBIAAAAQAmgBASAMIAAAAQAJAGAFAHIAAAAQAJgDAMgBIAAAAQAfgDAdAJIAAAAQAaAHANAOIAAAAQALAKAFANIAAAAIAJACIAAAAQARAEAbARIAAAAQAWANAMALIAAAAQARAQAGARIAAAAIABABIAAAAIADAAIAAAAQAaAFAgAiIAAAAQAVAVAKAQIAAAAQAFAIADAIIAAAAQAIACAHAFIAAAAQAOAIAQAZIAAAAIAnA8QAJAOAEAJIAAAAQAPAAAOAEIAAAAQAiAJAWAaIAAAAQAUAYAEAfIAAAAQAEAegMAcIAAAAQgFALgGAJIAAAAQAWALAOATIAAAAQAaAkACBHIAAAAQADBngwAqIAAAAQAZAkAAA9IAAAAQgBAzgSAoIAAAAQgVAvgnATIAAAAQgbANgegCIAAAAQAMAZABAgIAAAAQABAugVAsIAAAAQgZA0gmATIAAAAQgYANgdgCIAAAAQgJgBgIgCIAAAAQgEAegUAXIAAAAQgUAXguAWIAAAAQg3AagpALIAAAAQg2AOgpgJIAAAAQgNARgTAKIAAAAQghAThBAAIAAAAQhrAAhEgXg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AM/ZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg5gbQgzgYgvgsQg9g7gIg4QgoAGghgUQgTgLgSgVQgMgNgSgaQgog5gSgoQgag5AAgzQABg3AdgiQASgVAbgKQAbgKAbAEQAcAFAWASQAWASALAaQAEAKAFAXQAFAWAFALQAHAQAbAjQAiAsANAoQADAMACAKQANgCAPACQAfADAXASQALAIAfAjQAZAcAVAIQAMAFAVADIAhAEIAJADIAHgGQAYgRAcgCQAYgCAkAJIA8AQIBaAFQAYABAUAFQAJgNANgKQAQgLAbgKIAugQIAlgQQAWgKAPgEQAggKAhAGIAJACQADgUAHgZQAUhEAfgaQAegZArADIgEgJQgNgdAEgeIAGgZIAHgZQAGgtAIgWQAKgaAXgSIAAAAQgbgqAChSQABggADgTQAFgdANgTIACgDIgDgBQgagOgQgaQgQgbAAgeQAAgbANgXQgJgIgJgLIgUggQgVgkgEgKIgDgKQgRgFgSgQIgggiIgRgRQgJgKgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgKIgFgJIgIgDIgWgIQgagEgNgFQgOgFgJgMIgBgCQgSAGgagBQgagBgPgJQgOAKgSgBQgSgBgOgKQgFgEgDgFQgSgBgOgKQgNgLgFgRQgEgRAGgQQAFgQAPgKQAOgKARABQARAAAPALIAJAJQAOAAAMAIQAQgKAdgBQAmgBATANQAIAFAGAIQAJgDAMgBQAegDAeAJQAZAHAOANQAKAKAFAOIAKABQARAEAaARQAWAOAMALQARAPAHARIAAABIAEABQAZAFAhAhQAVAVAJAQQAFAIADAJQAIABAIAFQANAIAQAaIAoA8QAJANAEAKQAOAAAPAEQAiAJAVAZQAVAZAEAfQAEAdgNAdQgEAKgGAJQAVAMAPATQAaAjACBHQADBogxArQAZAkAAA9QAAAygTApQgVAugnATQgbANgegCQANAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgFAegUAXQgTAWguAWQg3AbgpAKQg3APgogKQgOARgTALQghAShBAAQhsAAhEgWg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AhwLfQgTgGgQgIIAAAAIgNAIIAAAAQgkAVgrABIAAAAQg4ACg6gcIAAAAQgzgYgugrIAAAAQg+g7gIg4IAAAAQgnAFgigTIAAAAQgTgMgSgUIAAAAQgLgOgSgZIAAAAQgog6gTgoIAAAAQgag4ABgzIAAAAQABg4AdgiIAAAAQAGgHAHgGIAAAAIgHAEIAAAAQgTAJgNgBIAAAAQgQgCgJgPIAAAAQgIgPAFgOIAAAAQAFgPAbgRIAAAAQAggTASgJIAAAAQAcgOAZgEIAAAAQAUgDAMAFIAAAAQAMAGAFAOIAAAAQAFAOgHANIAAAAQgDAHgLAMIAAAAIgFAKIAAAAQgDAGgDADIAAAAIgCACIAAAAQAaAGAVARIAAAAQAXASAKAZIAAAAQAEALAGAXIAAAAQAFAWAEALIAAAAQAHAPAbAjIAAAAQAjAsAMApIAAAAQAEALABALIAAAAQAOgCAOABIAAAAQAfAEAXARIAAAAQAMAJAfAiIAAAAQAZAcAVAJIAAAAQAMAFAUACIAAAAIAiAFIAAAAIAIACIAAAAIAIgGIAAAAQAYgQAbgDIAAAAQAYgCAlAKIAAAAIA8APIAAAAIBYAFIAAAAQAZACATAEIAAAAQAKgNANgJIAAAAQAQgMAbgJIAAAAIAtgQIAAAAIAlgQIAAAAQAXgKAOgFIAAAAQAhgJAhAFIAAAAIAJACIAAAAQACgUAIgZIAAAAQAThDAggbIAAAAQAegZAqADIAAAAIgEgJIAAAAQgMgdAEgeIAAAAIAFgZIAAAAIAHgYIAAAAQAHguAIgVIAAAAQAKgaAWgSIAAAAIABgBIAAAAQgbgqABhQIAAAAQABggAEgUIAAAAQAFgcAMgUIAAAAIACgCIAAAAIgCgCIAAAAQgbgNgQgbIAAAAQgQgbAAgeIAAAAQAAgaANgYIAAAAQgJgHgIgMIAAAAIgUgfIAAAAQgVgkgEgLIAAAAIgDgKIAAAAQgSgFgRgQIAAAAIggghIAAAAIgSgSIAAAAQgIgJgEgIIAAAAQgOgDgQgKIAAAAQgagTgNgIIAAAAIgbgPIAAAAQgPgJgHgLIAAAAIgEgIIAAAAIgJgDIAAAAIgWgJIAAAAQgagDgMgFIAAAAQgOgFgJgNIAAAAIgBgBIAAAAQgSAGgbgBIAAAAQgZgCgPgIIAAAAQgOAJgTAAIAAAAQgSgBgMgLIAAAAQgFgEgEgFIAAAAQgSAAgNgLIAAAAQgNgKgFgRIAAAAQgFgRAGgQIAAAAQAGgQAOgKIAAAAQAPgKARAAIAAAAQAQABAOALIAAAAIAJAIIAAAAQAOABAMAHIAAAAQAQgJAegBIAAAAQAmgBASAMIAAAAQAJAGAFAHIAAAAQAJgDAMgBIAAAAQAfgDAdAJIAAAAQAaAHANAOIAAAAQALAKAFANIAAAAIAJACIAAAAQARAEAbARIAAAAQAWANAMALIAAAAQARAQAGARIAAAAIABABIAAAAIADAAIAAAAQAaAFAgAiIAAAAQAVAVAKAQIAAAAQAFAIADAIIAAAAQAIACAHAFIAAAAQAOAIAQAZIAAAAIAnA8QAJAOAEAJIAAAAQAPAAAOAEIAAAAQAiAJAWAaIAAAAQAUAYAEAfIAAAAQAEAegMAcIAAAAQgFALgGAJIAAAAQAWALAOATIAAAAQAaAkACBHIAAAAQADBngwAqIAAAAQAZAkAAA9IAAAAQgBAzgSAoIAAAAQgVAvgnATIAAAAQgbANgegCIAAAAQAMAZABAgIAAAAQABAugVAsIAAAAQgZA0gmATIAAAAQgYANgdgCIAAAAQgJgBgIgCIAAAAQgEAegUAXIAAAAQgUAXguAWIAAAAQg3AagpALIAAAAQg2AOgpgJIAAAAQgNARgTAKIAAAAQghAThCAAIAAAAQhqAAhEgXg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AM/ZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg5gbQgzgYgvgsQg9g7gIg4QgoAGghgUQgTgLgSgVQgMgNgSgaQgog5gSgoQgag5AAgzQABg3AdgiIACgCQgLgEgLgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAVgcAegMQAfgLAiAJQAiAJAWAZQAVAZAEAgQACANgCANIAAACQADARgEASIABAGQAEAegNAcQgHARgMANQAVAGARAOQAWASALAaQAEAKAFAXQAFAWAFALQAHAQAbAjQAiAsANAoQADAMACAKQANgCAPACQAfADAXASQALAIAfAjQAZAcAVAIQAMAFAVADIAhAEIAJADIAHgGQAYgRAcgCQAYgCAkAJIA8AQIBaAFQAYABAUAFQAJgNANgKQAQgLAbgKIAugQIAlgQQAWgKAPgEQAggKAhAGIAJACQADgUAHgZQAUhEAfgaQAegZArADIgEgJQgNgdAEgeIAGgZIAHgZQAGgtAIgWQAKgaAXgSIAAAAQgbgqAChSQABggADgTQAFgdANgTIACgDIgDgBQgagOgQgaQgQgbAAgeQAAgbANgXQgJgIgJgLIgUggQgVgkgEgKIgDgKQgRgFgSgQIgggiIgRgRQgJgKgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgKIgFgJIgIgDIgWgIQgagEgNgFQgOgFgJgMIgBgCQgSAGgagBQgagBgPgJQgOAKgSgBQgSgBgOgKQgFgEgDgFQgSgBgOgKQgNgLgFgRQgEgRAGgQQAFgQAPgKQAOgKARABQARAAAPALIAJAJQAOAAAMAIQAQgKAdgBQAmgBATANQAIAFAGAIQAJgDAMgBQAegDAeAJQAZAHAOANQAKAKAFAOIAKABQARAEAaARQAWAOAMALQARAPAHARIAAABIAEABQAZAFAhAhQAVAVAJAQQAFAIADAJQAIABAIAFQANAIAQAaIAoA8QAJANAEAKQAOAAAPAEQAiAJAVAZQAVAZAEAfQAEAdgNAdQgEAKgGAJQAVAMAPATQAaAjACBHQADBogxArQAZAkAAA9QAAAygTApQgVAugnATQgbANgegCQANAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgFAegUAXQgTAWguAWQg3AbgpAKQg3APgogKQgOARgTALQghAShBAAQhsAAhEgWg");
	var mask_10_graphics_32 = new cjs.Graphics().p("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");
	var mask_10_graphics_33 = new cjs.Graphics().p("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");
	var mask_10_graphics_34 = new cjs.Graphics().p("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");
	var mask_10_graphics_35 = new cjs.Graphics().p("ANAZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRQAsgQApAPQAXAJASARQASASAHAXQAGASgBAYQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_36 = new cjs.Graphics().p("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");
	var mask_10_graphics_37 = new cjs.Graphics().p("ANAZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAfgLAiAJQAiAJAVAZQAVAZAEAfQAEAdgNAdQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_38 = new cjs.Graphics().p("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");
	var mask_10_graphics_39 = new cjs.Graphics().p("ANAZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAfgLAiAIQAhAJAWAZQAVAZAEAgQAEAegNAcQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_40 = new cjs.Graphics().p("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");
	var mask_10_graphics_41 = new cjs.Graphics().p("ANAZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAPgGAPAAQAEgXAPgVQAUgdAfgLQAegLAgAIQATgZAcgKQAfgMAiAJQAiAJAVAZQAWAZAEAgQAEAegNAcQgNAdgZAQQgYARgfACQgQABgOgDQgKAMgNAJQgZARgeACQgDANgGANQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_42 = new cjs.Graphics().p("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");
	var mask_10_graphics_43 = new cjs.Graphics().p("ANAZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAPgGAPAAQAEgXAPgVQAUgdAfgLQAegLAgAIQATgZAcgKIACgBIAIgNQAVgdAfgLQAfgMAiAKQAiAJAWAaQAUAYAEAfQAEAdgNAdQgMAcgZASQgMAIgPAFQgMAZgXAPQgYARgfACQgQABgOgDQgKAMgNAJQgZARgeACQgDANgGANQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_44 = new cjs.Graphics().p("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");
	var mask_10_graphics_45 = new cjs.Graphics().p("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");
	var mask_10_graphics_46 = new cjs.Graphics().p("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");
	var mask_10_graphics_47 = new cjs.Graphics().p("ANLZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAPgGAPAAQAEgXAPgVQAUgdAfgLQAegLAgAIQATgZAcgKIACgBIAIgNQAVgdAfgLQAfgMAiAKIADABQAIgJAKgHQAagSAhgBQAigBAbARQAWAOAOAXQANgIAPABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWgAN9V0IA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgJgBgHgCQgIARgNAOQgWAZgeAIQgeAIgfgJQgHAIgKAHQgMAIgPAFQgMAZgXAPQgYARgfACQgQABgOgDQgKAMgNAJQgZARgeACQgDANgGANQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCIAJgBQAWAAAeAIg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_10_graphics_2,x:132.9,y:93.6}).wait(1).to({graphics:mask_10_graphics_3,x:135.1,y:93.6}).wait(1).to({graphics:mask_10_graphics_4,x:137.1,y:94.6}).wait(1).to({graphics:mask_10_graphics_5,x:142.1,y:94.7}).wait(1).to({graphics:mask_10_graphics_6,x:275.2,y:184.7}).wait(1).to({graphics:mask_10_graphics_7,x:148.6,y:96.6}).wait(1).to({graphics:mask_10_graphics_8,x:282.2,y:187.4}).wait(1).to({graphics:mask_10_graphics_9,x:154.1,y:100.6}).wait(1).to({graphics:mask_10_graphics_10,x:286.8,y:191.2}).wait(1).to({graphics:mask_10_graphics_11,x:159.1,y:105.1}).wait(1).to({graphics:mask_10_graphics_12,x:293.5,y:196.9}).wait(1).to({graphics:mask_10_graphics_13,x:164.1,y:111.2}).wait(1).to({graphics:mask_10_graphics_14,x:297.3,y:203.7}).wait(1).to({graphics:mask_10_graphics_15,x:169.3,y:118.3}).wait(1).to({graphics:mask_10_graphics_16,x:301.8,y:211.2}).wait(1).to({graphics:mask_10_graphics_17,x:171.5,y:131.3}).wait(1).to({graphics:mask_10_graphics_18,x:301.5,y:224.4}).wait(1).to({graphics:mask_10_graphics_19,x:171.5,y:143.4}).wait(1).to({graphics:mask_10_graphics_20,x:301.3,y:236.2}).wait(1).to({graphics:mask_10_graphics_21,x:171.5,y:154.9}).wait(1).to({graphics:mask_10_graphics_22,x:301.3,y:246}).wait(1).to({graphics:mask_10_graphics_23,x:171.5,y:161.9}).wait(1).to({graphics:mask_10_graphics_24,x:301.3,y:253}).wait(1).to({graphics:mask_10_graphics_25,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_26,x:288.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_27,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_28,x:275.2,y:252.3}).wait(1).to({graphics:mask_10_graphics_29,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_30,x:265.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_31,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_32,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_33,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_34,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_35,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_36,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_37,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_38,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_39,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_40,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_41,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_42,x:264.9,y:252.3}).wait(1).to({graphics:mask_10_graphics_43,x:171.5,y:164}).wait(1).to({graphics:mask_10_graphics_44,x:264.9,y:251.5}).wait(1).to({graphics:mask_10_graphics_45,x:264.9,y:251.3}).wait(1).to({graphics:mask_10_graphics_46,x:264.9,y:251.3}).wait(1).to({graphics:mask_10_graphics_47,x:172.7,y:164}).wait(1680));

	// circle center
	this.instance_36 = new lib.circlebasic();
	this.instance_36.parent = this;
	this.instance_36.setTransform(266.3,251,1,1,0,0,0,68,68);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(2).to({_off:false},0).to({_off:true},444).wait(1281));

	// press shad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.078)","rgba(0,0,0,0.157)"],[0.831,1],0,0,0,0,0,69.4).s().p("AngHhQjHjHAAkaQAAkZDHjHQDIjHEYAAQEZAADHDHQDIDHAAEZQAAEajIDHQjHDHkZAAQkYAAjIjHg");
	this.shape_3.setTransform(266.3,251);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(121).to({_off:false},0).to({_off:true},25).wait(1581));

	// line animate
	this.instance_37 = new lib.lineanimate();
	this.instance_37.parent = this;
	this.instance_37.setTransform(113.5,453.8);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(55).to({_off:false},0).wait(1).to({regY:231.7,y:676.7,alpha:0.02},0).wait(1).to({y:668,alpha:0.039},0).wait(1).to({y:659.3,alpha:0.059},0).wait(1).to({y:650.6,alpha:0.078},0).wait(1).to({y:641.9,alpha:0.098},0).wait(1).to({y:633.2,alpha:0.118},0).wait(1).to({y:624.5,alpha:0.137},0).wait(1).to({y:615.8,alpha:0.157},0).wait(1).to({y:607.1,alpha:0.176},0).wait(1).to({y:598.4,alpha:0.196},0).wait(1).to({y:589.7,alpha:0.216},0).wait(1).to({y:581,alpha:0.235},0).wait(1).to({y:572.3,alpha:0.255},0).wait(1).to({y:563.6,alpha:0.275},0).wait(1).to({y:554.9,alpha:0.294},0).wait(1).to({y:546.2,alpha:0.314},0).wait(1).to({y:537.4,alpha:0.333},0).wait(1).to({y:528.7,alpha:0.353},0).wait(1).to({y:520,alpha:0.373},0).wait(1).to({y:511.3,alpha:0.392},0).wait(1).to({y:502.6,alpha:0.412},0).wait(1).to({y:493.9,alpha:0.431},0).wait(1).to({y:485.2,alpha:0.451},0).wait(1).to({y:476.5,alpha:0.471},0).wait(1).to({y:467.8,alpha:0.49},0).wait(1).to({y:459.1,alpha:0.51},0).wait(1).to({y:450.4,alpha:0.529},0).wait(1).to({y:441.7,alpha:0.549},0).wait(1).to({y:433,alpha:0.569},0).wait(1).to({y:424.3,alpha:0.588},0).wait(1).to({y:415.6,alpha:0.608},0).wait(1).to({y:406.9,alpha:0.627},0).wait(1).to({y:398.1,alpha:0.647},0).wait(1).to({y:389.4,alpha:0.667},0).wait(1).to({y:380.7,alpha:0.686},0).wait(1).to({y:372,alpha:0.706},0).wait(1).to({y:363.3,alpha:0.725},0).wait(1).to({y:354.6,alpha:0.745},0).wait(1).to({y:345.9,alpha:0.765},0).wait(1).to({y:337.2,alpha:0.784},0).wait(1).to({y:328.5,alpha:0.804},0).wait(1).to({y:319.8,alpha:0.824},0).wait(1).to({y:311.1,alpha:0.843},0).wait(1).to({y:302.4,alpha:0.863},0).wait(1).to({y:293.7,alpha:0.882},0).wait(1).to({y:285,alpha:0.902},0).wait(1).to({y:276.3,alpha:0.922},0).wait(1).to({y:267.6,alpha:0.941},0).wait(1).to({y:258.8,alpha:0.961},0).wait(1).to({y:250.1,alpha:0.98},0).wait(1).to({y:241.4,alpha:1},0).wait(278).to({y:234.8,alpha:0.983},0).wait(1).to({y:228.3,alpha:0.966},0).wait(1).to({y:221.7,alpha:0.949},0).wait(1).to({y:215,alpha:0.932},0).wait(1).to({y:208.4,alpha:0.915},0).wait(1).to({y:201.8,alpha:0.898},0).wait(1).to({y:195.2,alpha:0.881},0).wait(1).to({y:188.6,alpha:0.864},0).wait(1).to({y:182,alpha:0.847},0).wait(1).to({y:175.4,alpha:0.831},0).wait(1).to({y:168.8,alpha:0.814},0).wait(1).to({y:162.2,alpha:0.797},0).wait(1).to({y:155.6,alpha:0.78},0).wait(1).to({y:148.9,alpha:0.763},0).wait(1).to({y:142.3,alpha:0.746},0).wait(1).to({y:135.7,alpha:0.729},0).wait(1).to({y:129.1,alpha:0.712},0).wait(1).to({y:122.5,alpha:0.695},0).wait(1).to({y:115.9,alpha:0.678},0).wait(1).to({y:109.3,alpha:0.661},0).wait(1).to({y:102.7,alpha:0.644},0).wait(1).to({y:96.1,alpha:0.627},0).wait(1).to({y:89.4,alpha:0.61},0).wait(1).to({y:82.8,alpha:0.593},0).wait(1).to({y:76.2,alpha:0.576},0).wait(1).to({y:69.6,alpha:0.559},0).wait(1).to({y:63,alpha:0.542},0).wait(1).to({y:56.4,alpha:0.525},0).wait(1).to({y:49.8,alpha:0.508},0).wait(1).to({y:43.2,alpha:0.492},0).wait(1).to({y:36.6,alpha:0.475},0).wait(1).to({y:30,alpha:0.458},0).wait(1).to({y:23.4,alpha:0.441},0).wait(1).to({y:16.7,alpha:0.424},0).wait(1).to({y:10.1,alpha:0.407},0).wait(1).to({y:3.5,alpha:0.39},0).wait(1).to({y:-3.1,alpha:0.373},0).wait(1).to({y:-9.7,alpha:0.356},0).wait(1).to({y:-16.3,alpha:0.339},0).wait(1).to({y:-22.9,alpha:0.322},0).wait(1).to({y:-29.5,alpha:0.305},0).wait(1).to({y:-36.1,alpha:0.288},0).wait(1).to({y:-42.7,alpha:0.271},0).wait(1).to({y:-49.4,alpha:0.254},0).wait(1).to({y:-56,alpha:0.237},0).wait(1).to({y:-62.6,alpha:0.22},0).wait(1).to({y:-69.2,alpha:0.203},0).wait(1).to({y:-75.8,alpha:0.186},0).wait(1).to({y:-82.4,alpha:0.169},0).wait(1).to({y:-89,alpha:0.153},0).wait(1).to({y:-95.6,alpha:0.136},0).wait(1).to({y:-102.2,alpha:0.119},0).wait(1).to({y:-108.9,alpha:0.102},0).wait(1).to({y:-115.5,alpha:0.085},0).wait(1).to({y:-122.1,alpha:0.068},0).wait(1).to({y:-128.7,alpha:0.051},0).wait(1).to({y:-135.3,alpha:0.034},0).wait(1).to({y:-141.9,alpha:0.017},0).wait(1).to({y:-148.5,alpha:0},0).to({_off:true},1).wait(1284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '00F7A3F39B744EC99BF63892B1AAFC25',
	width: 534,
	height: 500,
	fps: 60,
	color: "#FF4136",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['00F7A3F39B744EC99BF63892B1AAFC25'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
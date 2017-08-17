(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
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
		var auth='mnugent nuge.co';
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
	this.shape.graphics.f("#FA4646").s().p("AnSHTQjBjBAAkSQAAkQDBjCQDCjBEQAAQESAADBDBQDBDCAAEQQAAESjBDBQjBDBkSAAQkQAAjCjBg");
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
	this.shape.graphics.f("#000000").s().p("EgtyAseIAAuFMA87AAAMAAAhK2Ia6AAMAAABK2IDwAAIAAOFg");
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
	this.shape.graphics.f("#FA4646").s().p("AncHeQjGjGABkYQgBkXDGjGQDFjFEXAAQEXAADGDFQDGDGAAEXQAAEYjGDGQjGDFkXAAQkXAAjFjFg");
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
	this.shape.graphics.f("#FEFEFE").s().p("AnELQQiSAAiGg5QiBg2hjhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iBBkhkQBjhjCBg3QCGg5CSAAIOJAAQCSAACFA5QCBA3BkBjQBkBkA2CBQA5CGAACRQAACTg5CGQg2CAhkBkQhkBkiBA2QiFA5iSAAgAggnOQjBDBAAERQAAERDBDCQDBDBERAAQERAADCjBQDBjCAAkRQAAkRjBjBQjCjBkRAAQkRAAjBDBg");
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
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",-1,8,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-85,188,188);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,66,66);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",-1,8,24);

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
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",-2,6,17);

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
	this.shape_1.graphics.f("#DC0A12").s().p("AhaEeQgqgIhFgiIgfgRQgRgLgKgMQgPgVgHgoQgIgsgBg5QgDhOARgwQAJgYARgbQAKgQAXggQAcgnASgSQAdgeAfgKQAbgKA2AAICxABQAiAAATADQAdAFATAOQAcAUAKAqQAGAbgBAwQgCBSgMA2QgQBKglAxIgYAgQgHAMgLAZQgYAsg3AYQgpASg+AFQgTACgSAAQgdAAgYgFg");
	this.shape_1.setTransform(43.7,50.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shad
	this.instance = new lib.shadowFAB("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.7,47.1,0.638,0.638,0,0,0,140,134.2);
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-5.4,141,125);


(lib.switchoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(27).call(this.frame_65).wait(4));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_22 = new cjs.Graphics().p("AjmnzQgUgTAAgcQAAgbAUgUQATgTAbAAQAcAAATATQAUAUAAAbQAAAcgUATQgTATgcAAQgbAAgTgTg");
	var mask_graphics_23 = new cjs.Graphics().p("Ajwm6QghghAAgvQAAgvAhghQAighAuAAQAvAAAhAhQAiAhAAAvQAAAvgiAhQghAigvAAQguAAgigig");
	var mask_graphics_24 = new cjs.Graphics().p("Aj5mAQgvgvAAhDQAAhCAvgvQAvgvBCAAQBDAAAvAvQAuAvAABCQAABDguAvQgvAvhDAAQhCAAgvgvg");
	var mask_graphics_25 = new cjs.Graphics().p("AkClHQg9g9AAhVQAAhWA9g9QA9g9BVAAQBWAAA8A9QA8A9AABWQAABVg8A9Qg8A9hWAAQhVAAg9g9g");
	var mask_graphics_26 = new cjs.Graphics().p("AkLkOQhLhKAAhpQAAhqBLhKQBKhKBpAAQBpAABKBKQBKBKAABqQAABphKBKQhKBLhpAAQhpAAhKhLg");
	var mask_graphics_27 = new cjs.Graphics().p("AkVjUQhYhZAAh8QAAh9BYhYQBZhYB8AAQB8AABYBYQBYBYAAB9QAAB8hYBZQhYBYh8AAQh8AAhZhYg");
	var mask_graphics_28 = new cjs.Graphics().p("AkeibQhmhmAAiQQAAiQBmhmQBmhmCQAAQCPAABmBmQBmBmAACQQAACQhmBmQhmBmiPAAQiQAAhmhmg");
	var mask_graphics_29 = new cjs.Graphics().p("AknhiQh0hzAAikQAAikB0hzQB0h0CjAAQCjAAB0B0QBzBzAACkQAACkhzBzQh0BzijAAQijAAh0hzg");
	var mask_graphics_30 = new cjs.Graphics().p("Ak3goQiCiCAAi3QAAi3CCiBQCBiCC2AAQC3AACBCCQCCCBAAC3QAAC3iCCCQiBCAi3AAQi2AAiBiAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlZAQQiPiOAAjLQAAjKCPiQQCQiPDJAAQDKAACQCPQCPCQAADKQAADLiPCOQiQCPjKAAQjJAAiQiPg");
	var mask_graphics_32 = new cjs.Graphics().p("Al6BJQidicAAjeQAAjeCdidQCdidDdAAQDeAACdCdQCdCdAADeQAADeidCcQidCdjeAAQjdAAididg");
	var mask_graphics_33 = new cjs.Graphics().p("AmbCCQiripAAjyQAAjxCrirQCrirDwAAQDxAACrCrQCrCrAADxQAADyirCpQirCrjxAAQjwAAirirg");
	var mask_graphics_34 = new cjs.Graphics().p("Am8C8Qi5i5AAkEQAAkEC5i5QC4i4EEAAQEFAAC4C4QC5C5AAEEQAAEEi5C5Qi4C4kFAAQkEAAi4i4g");
	var mask_graphics_35 = new cjs.Graphics().p("AneD1QjGjGAAkXQAAkZDGjGQDHjGEXAAQEYAADHDGQDGDGAAEZQAAEXjGDGQjHDGkYAAQkXAAjHjGg");
	var mask_graphics_36 = new cjs.Graphics().p("An/EuQjUjUAAkqQAAksDUjUQDUjUErAAQEsAADUDUQDUDUAAEsQAAEqjUDUQjUDUksAAQkrAAjUjUg");
	var mask_graphics_37 = new cjs.Graphics().p("AogFoQjijiAAk+QAAk/DijiQDijiE+AAQE/AADiDiQDiDiAAE/QAAE+jiDiQjiDhk/AAQk+AAjijhg");
	var mask_graphics_38 = new cjs.Graphics().p("ApBGcQjwjwAAlRQAAlTDwjvQDvjwFSAAQFTAADvDwQDwDvAAFTQAAFRjwDwQjvDvlTAAQlSAAjvjvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_22,x:-25.1,y:-61.3}).wait(1).to({graphics:mask_graphics_23,x:-27.4,y:-63.6}).wait(1).to({graphics:mask_graphics_24,x:-29.7,y:-65.9}).wait(1).to({graphics:mask_graphics_25,x:-32,y:-68.2}).wait(1).to({graphics:mask_graphics_26,x:-34.3,y:-70.4}).wait(1).to({graphics:mask_graphics_27,x:-36.6,y:-72.7}).wait(1).to({graphics:mask_graphics_28,x:-38.9,y:-75}).wait(1).to({graphics:mask_graphics_29,x:-41.2,y:-77.3}).wait(1).to({graphics:mask_graphics_30,x:-42.8,y:-79.6}).wait(1).to({graphics:mask_graphics_31,x:-42.7,y:-81.9}).wait(1).to({graphics:mask_graphics_32,x:-42.6,y:-84.2}).wait(1).to({graphics:mask_graphics_33,x:-42.5,y:-86.5}).wait(1).to({graphics:mask_graphics_34,x:-42.4,y:-88.7}).wait(1).to({graphics:mask_graphics_35,x:-42.3,y:-91}).wait(1).to({graphics:mask_graphics_36,x:-42.2,y:-93.3}).wait(1).to({graphics:mask_graphics_37,x:-42.1,y:-95.6}).wait(1).to({graphics:mask_graphics_38,x:-43.2,y:-98.4}).wait(31));

	// Layer 3
	this.instance = new lib.circ2();
	this.instance.parent = this;
	this.instance.setTransform(-44.8,-115.2,1,1,0,0,0,66.2,66.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(25).to({scaleX:0.47,scaleY:0.47,x:-44.7,y:-115.1,alpha:0},10).to({_off:true},11).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#252525","rgba(0,0,0,0.298)","rgba(25,25,25,0.4)","rgba(0,0,0,0)"],[0,0.584,0.682,0.902,1],0.1,0.1,0,0.1,0.1,70.8).s().p("AnrHsQjLjMAAkgQAAkfDLjLQDMjMEfAAQEgAADLDMQDMDLAAEfQAAEgjMDMQjLDLkgAAQkfAAjMjLg");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},22).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},5).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({_off:true,alpha:0},5).wait(22));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgbBVQgbgJgSgaQgRgZABgcQABgdAUgXQAUgYAcgHQAbgGAcAMQAcANAOAZQAMAVgBAZQgBAagOAUQgQAYgdAKQgQAFgNAAQgOAAgNgEg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiGBmQgbgcAAgjQAAgeATgbQARgaAcgSQAdgTAggFQASgDARACIAFgIQAUgYAcgHQAcgGAcAMQAcANAOAZQAMAVgBAaQgBAagOATQgQAYgdAKQgWAIgVgEQgOAWgeAWQguAlgnAAQgkAAgbgbg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiUDVQgWgCgSgMQgSgLgLgUQgLgTAAgVQgBgZAOgeQAag3ApgRIAFgEQAPgTAVgIQgBgIAAgJQABgdAUgXQANgQARgJQAMgMAQgKQAdgTAegFQATgDAQACIAHgIQATgYAcgHQAcgGAcAMQAcANAPAZQAMAVgBAaQgCAagNAUQgRAYgdAKQgWAIgVgEQgOAWgdAVQglAdggAGIAAANQgCAagMAUQgNATgVAKQgFANgIAMQgYAmghANQgQAGgSAAIgJAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjZFBQgagIgRgWQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgXAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgOAWgeAVQglAeggAGIAAANQgBAZgOAVQgNASgVAKQgFANgIAMQgXAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgeA6gnANQgMAFgNAAQgNAAgOgFg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjAG9QgUgDgQgKQgygggDheQgDhNAhgiIAIgIQgJgGgHgKQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgOAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAPgSAVgJQgBgIAAgIQABgdAUgYQANgQASgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgXAHgUgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgXAlghANQgNAFgOABIACAFQAKAWAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAxQAAAbgIAUQgHASgOAOQgPANgSAGQgNAEgOAAIgLAAg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AinIiQgrgMgYgvQgRglABg0QABgtARgcQgughgDhaQgDhNAhgiIAIgIQgJgGgHgKQgQgUgEgcQgDgaAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAPgSAVgIQgBgJAAgIQABgdAUgYQANgQASgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgXAHgUgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgXAlghANQgNAGgOABIACAEQAKAXAAAbQgBArgbAzQgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAxQAAAbgIAUIgHANIAFADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQACAVgJAVQgIAVgRAOQgRAOgWAFQgJACgKAAQgMAAgMgDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ag+JuQgYgLgdgiQgWgcgHgTQgLgaAEgbIABgJQgJAAgIgDQgrgLgYgvQgRgmABg0QABgsARgdQgughgDhaQgDhNAhghIAIgIQgJgGgHgJQgQgVgEgcQgDgbAJgZQAFgQAPgeIAJgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgIgRgBgSQAAgZAOgeQAZg3AqgRIAEgFQAPgTAVgIQgBgIAAgJQABgdAUgXQANgQASgIQALgNAPgKQAdgTAggFQASgDARADIAGgJQAUgYAcgHQAcgGAcAMQAcANAOAZQAMAVgBAaQgBAagOAUQgQAYgdAKQgXAIgUgEQgPAXgdAVQglAdggAHIAAAMQgBAagOAUQgNATgVALQgFAMgIAMQgXAmghANQgNAFgOABIACAFQAKAXAAAaQgBAsgbA0QgUAmgXARQAOALAJAQQAJAQAEAXIAGApIAEAxQAAAcgIATIgHAOIAFADQARAOAIAUQAGANADAWIAFAjIAGAWIAEAWQABAMgCALQAJABAJADQATAHARASQAMALARAXQAbAjAHAYQAHAZgIAZQgIAagUARQgUARgaAEIgOABQgTAAgRgIg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ABWK4QgUgHgfgZQglgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgJgBgIgCQgrgMgYgvQgRglABg0QABgtARgcQgughgDhaQgDhMAhgiIAIgIQgJgGgHgKQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAPgSAVgIQgBgJAAgIQABgdAUgYQANgQASgIQALgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgXAHgUgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgXAlghANQgNAGgOABIACAEQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGApIAEAxQAAAbgIAUIgHANIAFADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGARASQAMAMARAXQAbAjAHAXQAFAUgDATQATAAAUAHQAZAJAWASQAbAXAOAfQAOAhgHAfQgIAlgiATQgVALgVAAQgOAAgPgFg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AD4LlQgQgCgTgHIghgPIgegOQgRgIgKgJQgPgNgIgSIgCgFIgBABQgjASgkgMQgUgHgegaQgmgegMgYQgJgTAAgVIABgLQgVABgTgJQgYgLgdgiQgWgcgHgTQgLgaAEgbIABgJQgJAAgIgDQgrgLgYgvQgRgmABg0QABgsARgdQgughgDhaQgDhMAhghIAIgIQgJgHgHgJQgQgVgEgcQgDgbAJgZQAFgQAPgeIAJgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgJgRAAgSQAAgZAOgeQAZg3AqgRIAEgFQAPgTAVgIQgBgIAAgJQABgdAUgXQANgQASgJQAMgMAPgKQAdgTAfgFQASgDARACIAGgIQAUgYAcgHQAcgGAcAMQAcANAOAZQAMAVgBAaQgBAagOAUQgQAYgdAKQgXAIgUgEQgPAWgdAWQglAdggAGIAAANQgBAagNAUQgNATgVAKQgFANgIAMQgYAmghANQgNAFgOABIACAFQAKAXAAAaQgBAsgbA0QgUAmgXASQAOALAJAQQAJAQAEAXIAGApIAEAwQAAAcgIATIgHANIAFAEQARAOAIAUQAGANADAWIAFAjIAGAWIAEAWQABAMgCALQAJABAJADQATAHASASQAMALARAXQAbAjAGAYQAFATgDATQASAAAVAHQAZAJAWATQAbAXAOAeIAEANQAYgNAgAAQAiAAAkAQQApASAUAbQAQAWADAbQADAbgMAYQgLAYgYAOQgVAMgXAAIgGAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AEwL1QhEgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgiATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgJgHgHgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAbgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgcAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAaAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbBAAPQAqAJAYAVQARAQAJAWQAJAWgDAWQgCAXgOATQgOAUgUAJQgSAJgZAAQgTAAgVgFg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ADXL1QhDgPgagnIgJAFQgYAOgagCQgPgBgTgIIghgPIgegNQgQgIgLgKQgOgMgIgSIgCgGIgCABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QABgtAQgcQgtgigDhYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAag4ApgQIAFgGQAPgSAVgJQgCgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAbAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgcAKQgWAHgVgDQgOAWgdAVQglAeggAGIAAANQgCAZgNAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXgBAbQAAArgcA0QgTAmgYATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQACALgCAMQAJABAJADQATAGASASQALAMASAXQAbAjAGAXQAGATgEAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAeAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAIgPAOgNQAYgUAogFQAtgEAlAVQATALANARQANASAEAUQAFAcgKAbQgHATgNAOQgPAQgRAGQgdAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AB0L1QhEgPgZgnIgJAFQgXAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQAoARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATQAPANAJATQAIAUgBAUQgBAUgKASQgKASgQAMQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AAML1QhDgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgjATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgIgHgIgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAbAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbA/APQAjAIAXAPQAHgPAOgNQAYgUAogFQAtgEAmAVQARAKAMAPQAJgLAMgIQAkgVA/ALQAuAIAXATIAKAKIAIgIQAhgcBFACQAwABAbAPQAiAVAIAnQAEATgFASQgFATgNAPQgiAphSgEQgxgCgcgTQgIgGgHgIQgHAIgKAHQgmAahBgLQgvgIgYgWIgFgFIgJALQgOAQgSAGQgdAKgxgQQgdgKgSgLQgDAKgHAIQgOAUgUAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AhnL1QhEgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgjATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgIgHgIgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAbAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbBAAPQAjAIAXAPQAHgPANgNQAYgUAogFQAtgEAmAVQARAKAMAPQAJgLAMgIQAkgVA/ALQAuAIAXATIAKAKIAIgIQAhgcBFACQAwABAbAPQAMAHAJAKIAFgIQANgTAUgKQAUgKAcgBQATgBAfAEQAaADAPAEQAWAFAPALQARAKAKARQALASACATQACATgHATQgGATgOAOQgoAmhbgNQg1gIgYgTIgKgKIgJANQgiAphSgEQgxgCgcgTQgIgGgHgIQgHAIgKAHQgmAahBgLQgvgIgYgWIgFgFIgJALQgOAQgSAGQgdAKgxgQQgdgKgSgLQgDAKgHAIQgNAUgUAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjrL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgNATgVAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAHgPAPgNQAYgUAogFQAtgEAkAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAKAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAlgDAgAbQAfAcAAAlQAAAdgRAaQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgcAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AlTL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgtgigDhYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgNATgVAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQACALgDAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAGATgEAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAIgPAOgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAjgVA+ALQAvAIAWATIAKAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAfgDAaASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAfgSAmAKQAnAJARAfQATAigMArQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgJAHQgmAahBgLQgugIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AmnL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAuAIAWATIAKAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIQAbgIAaAHQAZAIASAWQASAWACAbQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgJAHQgmAahAgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AnTL1QhEgPgagnIgIAFQgYAOgagCQgQgBgTgIIghgPIgegNQgRgIgKgKQgPgMgIgSIgCgGIgBABQgjATgkgNQgUgHgfgZQgmgegMgZQgJgSAAgVIABgMQgVABgTgJQgYgKgdgiQgWgcgHgTQgLgaAEgcIABgIQgIgBgJgCQgrgMgYgvQgRglABg0QABgtARgcQgugigDhYQgDhNAhgiIAIgIQgJgHgHgJQgQgUgEgcQgDgbAJgaQAFgPAPgeIAJgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRgBgSQAAgYAOgeQAZg4AqgQIAEgGQAQgSAUgJQgBgIAAgIQABgdAUgYQAOgQARgIQAMgMAPgKQAdgUAggFQASgDARADIAGgJQAUgXAcgHQAcgHAcANQAcAMAOAZQAMAWgBAaQgBAZgOAVQgQAYgdAKQgWAHgVgDQgPAWgdAVQglAeggAGIAAANQgBAZgOAVQgNATgVAKQgFANgIAMQgYAlghANQgNAFgOABIACAFQAKAXAAAbQgBArgbA0QgUAmgXATQAOALAJAQQAJAQAEAWIAGAqIAEAwQAAAbgIAUIgGANIAEADQARAPAIAUQAGANADAVIAFAjIAGAWIAEAXQABALgCAMQAJABAJADQATAGASASQAMAMARAXQAbAjAHAXQAFATgDAUQATgBAUAIQAZAJAWASQAbAXAOAfIAFANQAXgOAgAAQAiABAkAQQApARAUAcIAIALQAogbBAAPQAjAIAXAPQAHgPAOgNQAYgUAogFQAtgEAmAVQARAKAMAPQAJgLAMgIQAkgVA/ALQAuAIAWATIAKAKIAIgIQAhgcBFACQAwABAbAPQAMAHAJAKIAFgIQANgTAUgKQAUgKAcgBQATgBAfAEQAaADAPAEQAWAFAPALQARAKAKARIADAEIADgEQAOgTAVgJQAOgFAXgDIAlgGIAfgKQATgGAMgCQAfgDAbASQAEgHAFgHQAIgLAOgMIAZgVIAcgaQAQgPANgIQAagPAfAEQAAgjAWgYQAFgFAMgKIARgPQAHgIAJgPIAQgYQASgUAagIIAEgBQgHggAKgqQAJgrAUgbQAagiAlgIQAUgEAUAFQAUAGAPANQAPANAIATQAJATgBAUQgBAOgFASIgKAfQgKAegEALQgJAWgNAOQgMAOgTAHIgHACIABALQACAbgSAsQgWA2gaAWQgdAbgtADQgQABgOgCQAAAOgFAQQgKAjgfAfQgpApgxALQgsAKgigTIgBAAQgEAJgGAJQgQAYgaAPQgqAZhGgBQg7gDgcgXQgNgKgIgPQgFAGgFAGQgoAmhbgNQg1gIgYgTIgKgKIgJANQgiAphSgEQgxgCgcgTQgJgGgGgIQgIAIgJAHQglAahBgLQgvgIgYgWIgFgFIgJALQgOAQgSAGQgdAKgxgQQgdgKgSgLQgEAKgGAIQgOAUgUAJQgSAJgZAAQgTAAgVgFg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AnhL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgNATgVAKQgGANgHAMQgYAlghANQgNAFgPABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAPALAJAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAYgOAfAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAjAIAWAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAfgDAaASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOQASgNAVgEQAWgEAVAIQAVAHAPAQQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgHAIgIAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgcgKgSgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AnjL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQQADgTALgRQALgRAQgKQARgKAUgCQAUgCASAHQAiANAXAnQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AnjL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgGgbgVQgggYgLgaQgMgaAEgoQAEgnAOgTQATgXAjgHQAngJAbAUQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AnjL1QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgmQAAgvALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgGgbgVQgggYgLgaQgMgaAEgoIACgSQgmgHgogmQgtgogGgoQgDgTAGgUQAHgTANgOQANgOATgIQATgHAUABQAmACArAjQArAjALAkQAHAXgEAWQASACAPALQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AnjL9QhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChYQgDhNAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQAcAMAPAZQAMAWgBAaQgCAZgNAVQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFAqIAEAwQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAHAXAQQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBQASgBAgAEQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgnQAAguALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgHgbgUQgggYgLgaQgMgaAEgoIACgSQgmgHgogmQgsgmgGgnQghALgpgJQgxgKgbgdQgTgTgHgcQgGgbAIgaQAIgZAXgSQAXgRAbgBQAQgBAWAHIAkAOIAdAMQAPAHAKAJQAPANAHATQAEAJABAJQAPgEAQABQAmACArAjQArAjALAkQAHAXgEAWQASACAPALQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAWABAgQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAIgZAAQgSAAgWgEg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AnjMTQhEgPgZgoIgJAGQgYAOgagCQgPgCgTgHIgigPIgegOQgQgIgLgJQgOgNgIgSIgDgFIgBABQgiASgkgMQgUgHgggaQglgegNgYQgJgTABgVIABgLQgWAAgTgIQgXgLgdgiQgWgcgIgTQgLgaAEgbIACgJQgJgBgIgCQgrgLgYgvQgSgmACg0QAAgtARgcQgughgChaQgDhMAgghIAJgIQgJgHgHgJQgQgVgEgcQgEgbAJgZQAGgQAPgeIAIgYQAFgQAFgJQAJgQAPgLQAPgMASgEIALgCQgIgRAAgSQgBgZAOgeQAZg3AqgRIAFgFQAPgTAUgIQgBgIABgJQABgdAUgXQANgQARgJQAMgMAQgKQAdgTAfgFQATgDAQACIAHgIQATgYAcgHQAcgGAcAMQAcANAPAZQAMAVgBAaQgCAagNAUQgRAYgdAKQgWAIgVgEQgOAWgdAWQglAdghAGIABANQgCAagNAUQgOATgUAKQgGANgHAMQgYAmghANQgOAFgOABIADAFQAKAXgBAaQAAAsgcA0QgUAlgXATQAOALAKAQQAJAQAEAXIAFAoIAEAxQABAcgIATIgHANIAEAEQASAOAIAUQAFANADAWIAFAjIAGAWIAEAWQABAMgCALQAKABAJADQATAHASASQALALASAXQAbAjAGAYQAFATgDATQATAAAUAHQAZAJAWATQAcAXANAeIAFANQAXgNAgAAQAjAAAkAQQApASAUAbIAHAMQAogbBBAOQAiAIAXAQQAHgQAPgMQAYgVAogEQAtgFAlAWQARAJAMAPQAJgLANgHQAkgVA+AKQAvAJAWATIAJAKIAIgJQAhgcBFACQAxABAbAQQALAHAJAJIAFgIQAOgTAUgKQAUgJAcgBQASgBAgAEQAaADAOADQAXAGAPAKQAQALALARIACADIADgEQAPgTAVgIQANgFAXgEIAlgGIAfgJQATgHANgBQAegDAbASQAEgIAFgHQAIgKAPgNIAZgUIAbgaQARgQANgHQAagPAeAEQAAgkAXgYQAEgFANgJIARgQQAGgHAKgQIAQgXQARgVAbgIIAEgBQgIgfAKgqQAKgrAUgcQAMgRAQgKQgKgSgDgXQgEgVABgmQAAgvALgZQAIgTASgOIACgCQgQgPgLgZQgJgUgNgxIgJgkQgDgUACgQIAAgBQgcgHgbgUQgggYgLgaQgMgbAEgnIACgTQgmgGgogmQgsgngGgnQghALgpgIQgxgKgbgdQgRgSgHgXIAAABQgbASguABQg+ADghgeQgQgPgHgWQgIgVAEgVQAEgWANgSQAOgSAUgJQAXgLAoAAQAvAAAaAPQAUALAMATQAFAIADAIQAXgRAagBQAQAAAWAGIAkAOIAdAMQAPAIAKAJQAPANAHATQAEAIABAKQAPgFAQABQAmACArAkQArAiALAkQAHAXgEAWQASADAPALQAJAGALAOIARAWIAVAXQANAOAGAKQANAWgCAaIgDAOQAhANAXAnQAPAcALAuQAHAeACATQABAcgIAVQgHARgOANIgIAGIADADQAQASAHAeQAFAWABAhQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFAKQgJAWgMAOQgNAOgSAHIgIADIACAKQACAcgSAsQgWA1gaAXQgeAagtAEQgQABgOgCQAAAOgEAPQgLAkgfAfQgoAogyAMQgsAKgigTIgBgBQgEAJgFAJQgRAZgaAPQgqAZhGgBQg6gDgcgXQgOgLgIgPQgEAHgGAFQgnAmhcgNQg0gHgZgUIgKgJIgIAMQgiAqhSgEQgxgCgcgTQgJgHgHgIQgGAJgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAPgRAGQgdAKgygPQgdgKgRgLQgEAJgGAJQgOATgVAKQgSAIgZAAQgSAAgWgEg");
	var mask_1_graphics_24 = new cjs.Graphics().p("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");
	var mask_1_graphics_25 = new cjs.Graphics().p("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");
	var mask_1_graphics_26 = new cjs.Graphics().p("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");
	var mask_1_graphics_27 = new cjs.Graphics().p("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");
	var mask_1_graphics_28 = new cjs.Graphics().p("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");
	var mask_1_graphics_29 = new cjs.Graphics().p("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");
	var mask_1_graphics_30 = new cjs.Graphics().p("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");
	var mask_1_graphics_31 = new cjs.Graphics().p("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");
	var mask_1_graphics_32 = new cjs.Graphics().p("AnjMhQhEgPgZgnIgJAFQgYAOgagCQgPgBgTgIIgigPIgegNQgQgIgLgKQgOgMgIgSIgDgGIgBABQgiATgkgNQgUgHgggZQglgegNgZQgJgSABgVIABgMQgWABgTgJQgXgKgdgiQgWgcgIgTQgLgaAEgcIACgIQgJgBgIgCQgrgMgYgvQgSglACg0QAAgtARgcQgugigChZQgDhMAggiIAJgIQgJgHgHgJQgQgUgEgcQgEgbAJgaQAGgPAPgeIAIgZQAFgPAFgJQAJgRAPgLQAPgMASgEIALgCQgIgRAAgSQgBgYAOgeQAZg4AqgQIAFgGQAPgSAUgJQgBgIABgIQABgdAUgYQANgQARgIQAMgMAQgKQAdgUAfgFQATgDAQADIAHgJQATgXAcgHQAcgHAcANQALAEAJAHQABgcAUgXQATgXAcgHQAIgCAJgBQARgQAWgFQAYgGAYAIIAIgCQAcgHAcANQAIADAIAFQAYgDAYALIALAFQATgVAagGQAcgHAcANQAUAIANAPQARgQAWgFQAcgHAcANQARAHAMAMQALgMAQgHQAWgLApAAQAtAAAaAOQARAKAMAQIABgCQAOgSAUgJQAXgLAoAAQAvAAAaAOQAMAHAJAJIAHgEQAcgTA4AAQAvABAZAOQAQAKAMAPQAJgHALgFQAXgLAoAAQAvAAAaAOQAUALAMAUQAFAHADAIQAXgQAagBQAQgBAWAHIAkAOIAdAMQAPAHAKAJQAPANAHATQAEAJABAJQAPgEAQABQAmACArAjQArAjALAkQAHAXgEAWQASACAPALQAJAHALANIARAXIAVAXQANANAGALQANAWgCAaIgDAOQAhANAXAmQAPAcALAuQAHAfACATQABAbgIAVQgHASgOANIgIAGIADACQAQATAHAeQAFAVABAhQAABJgbAgQgHAHgHAGIAGAMQAIATgBAUQAAAOgFASIgLAfQgJAegFALQgJAWgMAOQgNAOgSAHIgIACIACALQACAbgSAsQgWA2gaAWQgeAbgtADQgQABgOgCQAAAOgEAQQgLAjgfAfQgoApgyALQgsAKgigTIgBAAQgEAJgFAJQgRAYgaAPQgqAZhGgBQg6gDgcgXQgOgKgIgPQgEAGgGAGQgnAmhcgNQg0gIgZgTIgKgKIgIANQgiAphSgEQgxgCgcgTQgJgGgHgIQgGAIgJAHQgmAahBgLQgvgIgZgWIgFgFIgIALQgPAQgRAGQgdAKgygQQgdgKgRgLQgEAKgGAIQgOAUgVAJQgSAJgZAAQgSAAgWgFgAFcJMQAaADAOAEQAXAFAPALQAQAKALARIACAEIADgEQAPgTAVgJQANgFAXgDIAlgGIAfgKQATgGANgCQAegDAbASQAEgHAFgHQAIgLAPgMIAZgVIAbgaQARgPANgIQAagPAeAEQAAgjAXgYQAEgFANgKIARgPQAGgIAKgPIAQgYQARgUAbgIIAEgBQgIggAKgqQAKgrAUgbQAMgRAQgLQgKgRgDgYQgEgUABgnQAAguALgZQAIgUASgOIACgBQgQgQgLgYQgJgVgNgxIgJgkQgDgUACgQIAAgBQgcgGgbgVQgggYgLgaQgMgaAEgoIACgSQgmgHgogmQgsgmgGgnQghALgpgJQgxgKgbgdQgRgRgHgXIAAAAQgbATguABQg+ADghgfQgHgFgEgHIgIAGQgbARguABQhCACghgdIgFgEIgEADQgbATguABQg+ADghgfQgHgFgEgHQgJAMgMAIQgbATgsABQg+ADghgfIgDgCQgPAOgVAIQgdAKgbgKQgYgHgQgUQgNAMgTAHQgdAKgbgKQgKgDgIgFQgQAQgWAIQgdAKgbgKQgOgEgKgIQgVADgTgHIgBAAQgLAEgLAAQgOANgTAHQgdAKgbgKQgQgFgLgKQgCAZgNAUQgRAYgdAKQgWAHgVgDQgOAWgdAVQglAeghAGIABANQgCAZgNAVQgOATgUAKQgGANgHAMQgYAlghANQgOAFgOABIADAFQAKAXgBAbQAAArgcA0QgUAmgXATQAOALAKAQQAJAQAEAWIAFApIAEAxQABAbgIAUIgHANIAEADQASAPAIAUQAFANADAVIAFAjIAGAWIAEAXQABALgCAMQAKABAJADQATAGASASQALAMASAXQAbAjAGAXQAFATgDAUQATgBAUAIQAZAJAWASQAcAXANAfIAFANQAXgOAgAAQAjABAkAQQApARAUAcIAHALQAogbBBAPQAiAIAXAPQAHgPAPgNQAYgUAogFQAtgEAlAVQARAKAMAPQAJgLANgIQAkgVA+ALQAvAIAWATIAJAKIAIgIQAhgcBFACQAxABAbAPQALAHAJAKIAFgIQAOgTAUgKQAUgKAcgBIAHAAQARAAAaADg");
	var mask_1_graphics_45 = new cjs.Graphics().p("A5nQzMAAAgjOMAzPAAAMAAAAjOg");
	var mask_1_graphics_46 = new cjs.Graphics().p("A5nQ1MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_47 = new cjs.Graphics().p("A5nQ3MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_48 = new cjs.Graphics().p("A5nQ5MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_49 = new cjs.Graphics().p("A5nQ7MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_50 = new cjs.Graphics().p("A5nQ9MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A5nQ/MAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_52 = new cjs.Graphics().p("A5nRBMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A5nRDMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_54 = new cjs.Graphics().p("A5nRFMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A5nRHMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_56 = new cjs.Graphics().p("A5qRJMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A7FRKMAAAgjOMAzPAAAMAAAAjOg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A8gRMMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A97ROMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A/WRQMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EggyARSMAAAgjPMAzQAAAMAAAAjPg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgiNARUMAAAgjPMAzPAAAMAAAAjPg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgjoARWMAAAgjPMAzPAAAMAAAAjPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-76,y:-177.6}).wait(1).to({graphics:mask_1_graphics_1,x:-83.2,y:-173.6}).wait(1).to({graphics:mask_1_graphics_2,x:-90,y:-165.2}).wait(1).to({graphics:mask_1_graphics_3,x:-95.2,y:-153.9}).wait(1).to({graphics:mask_1_graphics_4,x:-95.3,y:-141.9}).wait(1).to({graphics:mask_1_graphics_5,x:-95.3,y:-131.5}).wait(1).to({graphics:mask_1_graphics_6,x:-95.3,y:-123.5}).wait(1).to({graphics:mask_1_graphics_7,x:-95.3,y:-116.3}).wait(1).to({graphics:mask_1_graphics_8,x:-89.3,y:-112.4}).wait(1).to({graphics:mask_1_graphics_9,x:-79.7,y:-110.3}).wait(1).to({graphics:mask_1_graphics_10,x:-70.9,y:-110.3}).wait(1).to({graphics:mask_1_graphics_11,x:-61,y:-110.3}).wait(1).to({graphics:mask_1_graphics_12,x:-50.5,y:-110.3}).wait(1).to({graphics:mask_1_graphics_13,x:-38.9,y:-110.3}).wait(1).to({graphics:mask_1_graphics_14,x:-25.8,y:-110.3}).wait(1).to({graphics:mask_1_graphics_15,x:-15.4,y:-110.3}).wait(1).to({graphics:mask_1_graphics_16,x:-7,y:-110.3}).wait(1).to({graphics:mask_1_graphics_17,x:-2.5,y:-110.3}).wait(1).to({graphics:mask_1_graphics_18,x:-1.2,y:-110.3}).wait(1).to({graphics:mask_1_graphics_19,x:-1,y:-110.3}).wait(1).to({graphics:mask_1_graphics_20,x:-1,y:-110.3}).wait(1).to({graphics:mask_1_graphics_21,x:-1,y:-110.3}).wait(1).to({graphics:mask_1_graphics_22,x:-1,y:-111.1}).wait(1).to({graphics:mask_1_graphics_23,x:-1,y:-113.3}).wait(1).to({graphics:mask_1_graphics_24,x:-1,y:-114.1}).wait(1).to({graphics:mask_1_graphics_25,x:-1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_26,x:-1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_27,x:-1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_28,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_29,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_30,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_31,x:-1,y:-114.7}).wait(1).to({graphics:mask_1_graphics_32,x:-1,y:-114.7}).wait(13).to({graphics:mask_1_graphics_45,x:35.9,y:-118}).wait(1).to({graphics:mask_1_graphics_46,x:17.6,y:-117.9}).wait(1).to({graphics:mask_1_graphics_47,x:-0.6,y:-117.7}).wait(1).to({graphics:mask_1_graphics_48,x:-18.8,y:-117.5}).wait(1).to({graphics:mask_1_graphics_49,x:-37,y:-117.3}).wait(1).to({graphics:mask_1_graphics_50,x:-55.3,y:-117.1}).wait(1).to({graphics:mask_1_graphics_51,x:-73.5,y:-116.9}).wait(1).to({graphics:mask_1_graphics_52,x:-91.7,y:-116.7}).wait(1).to({graphics:mask_1_graphics_53,x:-109.9,y:-116.5}).wait(1).to({graphics:mask_1_graphics_54,x:-128.1,y:-116.3}).wait(1).to({graphics:mask_1_graphics_55,x:-146.4,y:-116.1}).wait(1).to({graphics:mask_1_graphics_56,x:-164.3,y:-115.9}).wait(1).to({graphics:mask_1_graphics_57,x:-173.4,y:-115.7}).wait(1).to({graphics:mask_1_graphics_58,x:-182.5,y:-115.6}).wait(1).to({graphics:mask_1_graphics_59,x:-191.6,y:-115.4}).wait(1).to({graphics:mask_1_graphics_60,x:-200.7,y:-115.2}).wait(1).to({graphics:mask_1_graphics_61,x:-209.9,y:-115}).wait(1).to({graphics:mask_1_graphics_62,x:-219,y:-114.8}).wait(1).to({graphics:mask_1_graphics_63,x:-228.1,y:-114.6}).wait(6));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6E6E6").ss(7,0,0,4).p("AnfrJIO/AAQEoAADRDRQBjBjA2CAQA4CFAACQQAACRg4CFQg2CAhjBjQjRDRkoAAIu/AAQkoAAjRjRQhihjg3iAQg4iFAAiRQAAiQA4iFQA3iABihjQBjhiCAg3QCFg4CRAAg");
	this.shape_1.setTransform(-1.2,-115.4,0.951,0.973);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},64).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-186.4,17.8,17.8);


// stage content:
(lib.mainportfolio3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{circStart:24});

	// timeline functions:
	this.frame_109 = function() {
		// this.stop();
	}
	this.frame_677 = function() {
		this.switchmc1.play();
	}
	this.frame_692 = function() {
		this.switchmc2.play();
	}
	this.frame_729 = function() {
		this.gotoAndPlay("circStart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(568).call(this.frame_677).wait(15).call(this.frame_692).wait(37).call(this.frame_729).wait(98));

	// switch2
	this.switchmc2 = new lib.switchoff();
	this.switchmc2.parent = this;
	this.switchmc2.setTransform(339.5,673.8,1,1,0,0,0,123,75);
	this.switchmc2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.switchmc2).wait(562).to({_off:false},0).to({_off:true},169).wait(96));

	// switch1
	this.switchmc1 = new lib.switchoff();
	this.switchmc1.parent = this;
	this.switchmc1.setTransform(339.5,213,1,1,0,0,0,123,75);
	this.switchmc1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.switchmc1).wait(542).to({_off:false},0).to({_off:true},189).wait(96));

	// switch shadowmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_548 = new cjs.Graphics().p("A9PSAMAAAgj/MA6fAAAMAAAAj/gAjmojQjADBAAESQAAERDADBQDCDBEQAAQESAADBjBQDBjBAAkRQAAkSjBjBQjBjBkSAAQkQAAjCDBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(548).to({graphics:mask_graphics_548,x:235.2,y:259.2}).wait(279));

	// switch shadow
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(258.9,251.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.9,251.1);
	this.instance_1.alpha = 0.469;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(548).to({_off:false},0).to({_off:true,alpha:0.469},17).wait(262));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(548).to({_off:false},17).wait(128).to({startPosition:0},0).to({alpha:0},19).to({_off:true},1).wait(114));

	// switch bg mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_531 = new cjs.Graphics().p("AIxVnQizizAAj9QAAj8CzizQCzizD8AAQD9AACzCzQCzCzAAD8QAAD9izCzQizCyj9AAQj8AAiziyg");
	var mask_1_graphics_532 = new cjs.Graphics().p("AHvVxQjAjAAAkQQAAkPDAjAQDAjAEPAAQEQAADADAQDADAAAEPQAAEQjADAQjADAkQAAQkPAAjAjAg");
	var mask_1_graphics_533 = new cjs.Graphics().p("AGsV8QjNjOAAkiQAAkjDNjNQDOjOEiAAQEjAADNDOQDODNAAEjQAAEijODOQjNDNkjAAQkiAAjOjNg");
	var mask_1_graphics_534 = new cjs.Graphics().p("AFqWGQjbjbAAk1QAAk1DbjbQDbjbE1AAQE1AADbDbQDbDbAAE1QAAE1jbDbQjbDbk1AAQk1AAjbjbg");
	var mask_1_graphics_535 = new cjs.Graphics().p("AEnWRQjojpAAlIQAAlIDojoQDpjoFIAAQFIAADoDoQDpDoAAFIQAAFIjpDpQjoDolIAAQlIAAjpjog");
	var mask_1_graphics_536 = new cjs.Graphics().p("ADlWbQj1j1AAlcQAAlbD1j1QD2j2FbAAQFbAAD1D2QD2D1AAFbQAAFcj2D1Qj1D2lbAAQlbAAj2j2g");
	var mask_1_graphics_537 = new cjs.Graphics().p("ACjWmQkCkDAAluQAAluECkDQEDkCFuAAQFuAAEDECQEDEDAAFuQAAFukDEDQkDEDluAAQluAAkDkDg");
	var mask_1_graphics_538 = new cjs.Graphics().p("ABgWwQkPkQAAmBQAAmBEPkQQEQkQGBAAQGBAAEREQQEQEQAAGBQAAGBkQEQQkREQmBAAQmBAAkQkQg");
	var mask_1_graphics_539 = new cjs.Graphics().p("AAeW7QkdkeAAmUQAAmUEdkdQEdkdGUAAQGUAAEeEdQEeEdAAGUQAAGUkeEeQkeEdmUAAQmUAAkdkdg");
	var mask_1_graphics_540 = new cjs.Graphics().p("AgkXFQkrkrAAmnQAAmmErkrQEqkqGnAAQGnAAErEqQErErAAGmQAAGnkrErQkrErmnAAQmnAAkqkrg");
	var mask_1_graphics_541 = new cjs.Graphics().p("AhmXQQk4k5AAm5QAAm6E4k3QE3k5G6AAQG6AAE4E5QE5E3AAG6QAAG5k5E5Qk4E4m6AAQm6AAk3k4g");
	var mask_1_graphics_542 = new cjs.Graphics().p("AioXaQlGlGAAnMQAAnNFGlFQFElFHNAAQHMAAFGFFQFGFFAAHNQAAHMlGFGQlGFGnMAAQnNAAlElGg");
	var mask_1_graphics_543 = new cjs.Graphics().p("AjrXlQlTlTAAngQAAnfFTlTQFSlTHgAAQHfAAFTFTQFUFTAAHfQAAHglUFTQlTFTnfAAQngAAlSlTg");
	var mask_1_graphics_544 = new cjs.Graphics().p("AktXvQlhlgAAnzQAAnyFhlgQFflgHzAAQHyAAFgFgQFhFgAAHyQAAHzlhFgQlgFhnyAAQnzAAlflhg");
	var mask_1_graphics_545 = new cjs.Graphics().p("AlwX6QluluAAoFQAAoGFultQFuluIEAAQIGAAFuFuQFuFtAAIGQAAIFluFuQluFuoGAAQoEAAlulug");
	var mask_1_graphics_546 = new cjs.Graphics().p("AmyYEQl7l7AAoYQAAoYF7l7QF7l7IXAAQIYAAF8F7QF7F7AAIYQAAIYl7F7Ql8F7oYAAQoXAAl7l7g");
	var mask_1_graphics_547 = new cjs.Graphics().p("An1YPQmImJAAorQAAorGImIQGJmIIqAAQIrAAGJGIQGJGIAAIrQAAIrmJGJQmJGIorAAQoqAAmJmIg");
	var mask_1_graphics_548 = new cjs.Graphics().p("AovYgQmWmWAAo+QAAo+GWmVQGWmWI9AAQI+AAGWGWQGWGVAAI+QAAI+mWGWQmWGWo+AAQo9AAmWmWg");
	var mask_1_graphics_693 = new cjs.Graphics().p("ApWZFQnKnKAAqIQAAqHHKnKQHKnKKHAAQKIAAHKHKQHKHKAAKHQAAKInKHKQnKHKqIAAQqHAAnKnKg");
	var mask_1_graphics_694 = new cjs.Graphics().p("AoHY2Qm4m3AAptQAApsG4m4QG3m3JsAAQJtAAG4G3QG3G4AAJsQAAJtm3G3Qm4G4ptAAQpsAAm3m4g");
	var mask_1_graphics_695 = new cjs.Graphics().p("Am5YoQmkmlAApSQAApSGkmkQGlmlJRAAQJTAAGkGlQGlGkAAJSQAAJSmlGlQmkGkpTAAQpRAAmlmkg");
	var mask_1_graphics_696 = new cjs.Graphics().p("AlqYZQmRmSAAo3QAAo4GRmRQGRmSI4AAQI3AAGSGSQGSGRAAI4QAAI3mSGSQmSGSo3AAQo4AAmRmSg");
	var mask_1_graphics_697 = new cjs.Graphics().p("AkbYKQl/l+AAoeQAAodF/l+QF+l+IdAAQIdAAF/F+QF/F+AAIdQAAIel/F+Ql/F/odAAQodAAl+l/g");
	var mask_1_graphics_698 = new cjs.Graphics().p("AjNX8QlrlsAAoDQAAoCFrlrQFrlsIDAAQICAAFsFsQFsFrAAICQAAIDlsFsQlsFsoCAAQoDAAlrlsg");
	var mask_1_graphics_699 = new cjs.Graphics().p("Ah+XtQlZlZAAnoQAAnoFZlYQFYlZHoAAQHoAAFZFZQFZFYAAHoQAAHolZFZQlZFZnoAAQnoAAlYlZg");
	var mask_1_graphics_700 = new cjs.Graphics().p("AgvXeQlGlGAAnNQAAnNFGlGQFFlGHNAAQHOAAFGFGQFGFGAAHNQAAHNlGFGQlGFHnOAAQnNAAlFlHg");
	var mask_1_graphics_701 = new cjs.Graphics().p("AAeXQQkyk0AAmyQAAmzEykzQE0kzGzAAQGyAAE0EzQEzEzAAGzQAAGykzE0Qk0EzmyAAQmzAAk0kzg");
	var mask_1_graphics_702 = new cjs.Graphics().p("ABtXBQkfkgAAmYQAAmYEfkhQEhkgGYAAQGYAAEgEgQEhEhAAGYQAAGYkhEgQkgEhmYAAQmYAAkhkhg");
	var mask_1_graphics_703 = new cjs.Graphics().p("AC8WyQkNkNAAl+QAAl9ENkOQEOkMF9AAQF9AAEOEMQEOEOAAF9QAAF+kOENQkOEOl9AAQl9AAkOkOg");
	var mask_1_graphics_704 = new cjs.Graphics().p("AEKWkQj6j7AAljQAAljD6j6QD7j6FjAAQFjAAD7D6QD7D6AAFjQAAFjj7D7Qj7D7ljAAQljAAj7j7g");
	var mask_1_graphics_705 = new cjs.Graphics().p("AFZWVQjojoAAlIQAAlIDojoQDojoFIAAQFIAADoDoQDpDoAAFIQAAFIjpDoQjoDolIAAQlIAAjojog");
	var mask_1_graphics_706 = new cjs.Graphics().p("AGoWHQjVjWAAktQAAkuDVjVQDVjVEtAAQEuAADVDVQDVDVAAEuQAAEtjVDWQjVDVkuAAQktAAjVjVg");
	var mask_1_graphics_707 = new cjs.Graphics().p("AH2V4QjCjCAAkTQAAkTDCjDQDDjCETAAQESAADDDCQDCDDAAETQAAETjCDCQjDDCkSAAQkTAAjDjCg");
	var mask_1_graphics_708 = new cjs.Graphics().p("AJFVpQivivAAj4QAAj5CvivQCwiwD4AAQD4AACwCwQCvCvAAD5QAAD4ivCvQiwCwj4AAQj4AAiwiwg");
	var mask_1_graphics_709 = new cjs.Graphics().p("AKTVaQicicAAjeQAAjeCcicQCdidDeAAQDdAACdCdQCdCcAADeQAADeidCcQidCdjdAAQjeAAididg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(531).to({graphics:mask_1_graphics_531,x:160.3,y:156.1}).wait(1).to({graphics:mask_1_graphics_532,x:161.4,y:158.5}).wait(1).to({graphics:mask_1_graphics_533,x:162.6,y:160.9}).wait(1).to({graphics:mask_1_graphics_534,x:163.7,y:163.3}).wait(1).to({graphics:mask_1_graphics_535,x:164.9,y:165.7}).wait(1).to({graphics:mask_1_graphics_536,x:166,y:168.1}).wait(1).to({graphics:mask_1_graphics_537,x:167.2,y:170.5}).wait(1).to({graphics:mask_1_graphics_538,x:168.3,y:172.8}).wait(1).to({graphics:mask_1_graphics_539,x:169.5,y:175.2}).wait(1).to({graphics:mask_1_graphics_540,x:170.6,y:177.6}).wait(1).to({graphics:mask_1_graphics_541,x:171.8,y:180}).wait(1).to({graphics:mask_1_graphics_542,x:172.9,y:182.4}).wait(1).to({graphics:mask_1_graphics_543,x:174.1,y:184.8}).wait(1).to({graphics:mask_1_graphics_544,x:175.2,y:187.2}).wait(1).to({graphics:mask_1_graphics_545,x:176.4,y:189.6}).wait(1).to({graphics:mask_1_graphics_546,x:177.5,y:191.9}).wait(1).to({graphics:mask_1_graphics_547,x:178.7,y:194.3}).wait(1).to({graphics:mask_1_graphics_548,x:180.6,y:197.4}).wait(145).to({graphics:mask_1_graphics_693,x:207.1,y:206.3}).wait(1).to({graphics:mask_1_graphics_694,x:204,y:203}).wait(1).to({graphics:mask_1_graphics_695,x:200.9,y:199.6}).wait(1).to({graphics:mask_1_graphics_696,x:197.8,y:196.3}).wait(1).to({graphics:mask_1_graphics_697,x:194.7,y:192.9}).wait(1).to({graphics:mask_1_graphics_698,x:191.5,y:189.6}).wait(1).to({graphics:mask_1_graphics_699,x:188.4,y:186.2}).wait(1).to({graphics:mask_1_graphics_700,x:185.3,y:182.9}).wait(1).to({graphics:mask_1_graphics_701,x:182.2,y:179.5}).wait(1).to({graphics:mask_1_graphics_702,x:179.1,y:176.2}).wait(1).to({graphics:mask_1_graphics_703,x:176,y:172.8}).wait(1).to({graphics:mask_1_graphics_704,x:172.9,y:169.5}).wait(1).to({graphics:mask_1_graphics_705,x:169.8,y:166.1}).wait(1).to({graphics:mask_1_graphics_706,x:166.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_707,x:163.5,y:159.4}).wait(1).to({graphics:mask_1_graphics_708,x:160.4,y:156.1}).wait(1).to({graphics:mask_1_graphics_709,x:157.3,y:152.7}).wait(118));

	// switch bg
	this.instance_2 = new lib.switchon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.1,250.6,1,1,0,0,0,123,75.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(531).to({_off:false},0).to({_off:true},182).wait(114));

	// Layer 29
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAqQgHgBgJgFIgPgJQgUgIAGgPQAEgKAOgMQAKgIAYgEQBAgKATAAQAbgCArACQBpAEBMAWQAdAJADAFQADAHgcgBQgHgBh3ANIh+ANQgnAEgUADQgWAEgKAAIgFAAg");
	this.shape.setTransform(252.3,182.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(513).to({_off:false},0).to({_off:true},182).wait(132));

	// switch ol mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_514 = new cjs.Graphics().p("AjDC0QgYgFgUgQQgPgLgJgPIAkgiIAagXQAPgNAJgLIAQgUQAKgLAIgGIAOgKIAFgDIAHgFIABgBIALgLIAKgMIAYgUQAOgLAEgMQACgGAAgKIAAAAIAAgQIADgQQAlgWAUgIIAcgHIAcgHIAvgPQAZgGAaADQAbADAVANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAcgTAOQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiAMgVABQgUARgaARQg+AmgwAAQgMAAgKgCg");
	var mask_2_graphics_515 = new cjs.Graphics().p("AjjDAQgdgFgVgSQgVgSgLgbQgKgcAFgbQAFgjAjgpQAhgpAigUQAsgaArAJQAqAIAZApIADAFIAHgIIAYgUQAOgLAEgMQABgGAAgKIAAgBIABgPIACgQQAlgXAWgHIAbgHIAcgHIAvgPQAagGAZADQAbADAVANQAXAOAOAWQAPAWACAZQABAbgLAdQgNAdgUANQgJAHgQAGIgcAJIg0AYQgnATgoAPQgiALgWACQgTARgaARQhEAqg0gFQgVAPgUAGQgQAEgQAAQgLAAgMgCg");
	var mask_2_graphics_516 = new cjs.Graphics().p("AhSDAQgdgFgVgSQgWgSgKgbIgBgDQgTAPgbAIQgSAGgiAGQguAIgfgBQgrgCgdgTQgVgOgNgWQgNgXgBgZQgBgYALgYQAKgXAUgQQAZgVA7gNQBCgPAqAGQAdAEAXANQAaAOAOAXIAGALQAigpAhgUQAsgaAqAJQArAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAgBIAAgPIADgQQAlgXAVgHIAbgHIAdgHIAvgPQAZgGAZADQAbADAWANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAdgTANQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiALgWACQgUARgaARQhFAqgzgFQgUAPgUAGQgRAEgQAAQgLAAgLgCg");
	var mask_2_graphics_517 = new cjs.Graphics().p("An9DBQglgMgWgeQgWgeACgnQACgoAZgbQAPgPAegPQAWgLA1gWQAlgPAUgDQAMgCARgBIAeABIA5gBQAYABASAFIASgEQBBgPArAGQAcAEAXANQAaAOAOAWIAHALQAggpAhgTQAsgaAsAIQAqAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgPIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAagGAZADQAbAEAVANQAWANAOAWQAPAWACAaQACAbgMAcQgNAegTANQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTARgbARQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgUgSQgWgRgKgcIgBgCQgTAOgbAJQgSAFgiAGQguAJgfgCQgYgBgUgGIgbABQgxABgTAGQgPAEgcANQgbAOgPAEQgQAFgRAAQgTAAgUgGg");
	var mask_2_graphics_518 = new cjs.Graphics().p("AqGEeQgagJgUgUQgTgUgIgaQgIgbAFgbQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgYAhghQA1g3AqgRQAigOAqAAQAXAAATAEIAigOQAlgPAUgDQANgCARgBIAeABIA5gBQAXABASAFIASgEQBCgPApAGQAcAEAYANQAZAOAPAWIAGALQAhgpAigTQAsgaArAIQAqAIAZApIADAFIACgCIAFgFIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIACgQQAlgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiAKgWABQgTARgbARQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQguAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgGgCIgBABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgKACgKAAQgRAAgRgFg");
	var mask_2_graphics_519 = new cjs.Graphics().p("ArBHGQgjAAgegYQgdgYgJgiQgEgSAAgXQgBgcABgiQABgiACgNQAFgYAIgVQASg4AbgiQAlgtAvgGQASgCAQAEQgEgWAEgWQAFgbAQgWQAQgXAYgOIARgJIAQgLQAHgGAIgMIAMgUQAQgYAggiQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARAAIAeAAIA5AAQAYAAASAFIAQgEQBCgPAqAGQAdAEAXANQAaAOAOAXIAHALQAhgpAhgUQAsgaArAJQArAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAgBIAAgPIADgQQAlgWAVgIIAcgHIAcgHIAvgPQAZgGAaADQAbADAVANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAdgTAOQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiAMgWABQgTARgbARQhFAqgzgFQgVAPgUAGQgbAIgcgGQgdgFgVgSQgWgSgKgbIgBgDQgTAPgbAIQgSAGgiAGQguAIgfgBQgXgBgUgHIgbACQgxABgUAFQgOAEgcAOQgbAOgPAEQgjAKglgMIgFgCIgBABQgMAHgOATIgdApQgRAagNAPQgWAXgnAZQgoAbgcAGQgVAEgWgFIACASQABAfgOAbIgNAXQgJAOgDAJQgJAVAAArQgBAugFATQgKAigfAXQgdAVgiAAIgDAAg");
	var mask_2_graphics_520 = new cjs.Graphics().p("AqgKLQgdgCgbgRQgZgQgTgaQgfgugHhDQgCgaAAgiIAAg9QAAgrAFgSQAIggAbgWIAGgFIgEgDQgdgXgJgjQgEgSAAgXQgBgbABgiQABgjACgMQAFgZAIgTQASg5AbghQAlguAvgFQASgCAQADQgEgWAEgWQAFgbAQgXQAQgXAYgNIARgJIAQgLQAHgHAIgLIAMgUQAQgZAgghQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARgBIAeABIA5gBQAYABASAFIAQgEQBCgPAqAGQAdAEAXANQAaAOAOAWIAHALQAhgpAhgTQAsgaArAIQArAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgPIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAZgGAaADQAbAEAVANQAWANAOAWQAPAWACAaQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTASgbAQQhFArgzgFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgWgRgKgcIgBgCQgTAOgbAJQgSAFgiAGQguAJgfgCQgXgBgUgGIgbABQgxABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgdArQgRAagNAOQgWAXgnAaQgoAbgcAFQgVAEgWgFIACASQABAggOAaIgNAWQgJAOgDAJQgJAWAAAqQgBAvgFATQgKAigfAWQAWAQALAXQAMAYACAjQABALgCAzQgBAnAJAVQAFAMAOAXQANAagCAeQgBAegQAYQgQAZgbANQgYAMgbAAIgGAAg");
	var mask_2_graphics_521 = new cjs.Graphics().p("AnaMWQg0gPgtgfQgugfgggsQgegpgIgkQgFgUAAgdQAAgYAFgSQgVgFgUgMQgZgQgTgZQgfgugHhEQgCgZAAgjIAAg8QAAgsAFgSQAIgfAbgXIAGgFIgEgCQgdgYgJgiQgEgSAAgWQgBgcABgiQABgiACgNQAFgYAIgVQASg4AbgiQAlgtAvgGQASgCAQAEQgEgXAEgWQAFgbAQgWQAQgXAYgOIARgJIAQgLQAHgGAIgMIAMgUQAQgYAggiQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARAAIAeAAIA5AAQAYAAASAFIAQgEQBCgPAqAGQAdAEAXANQAaAOAOAXIAHALQAhgqAhgTQAsgaArAJQArAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAgBIAAgPIADgQQAlgXAVgHIAcgHIAcgHIAvgPQAZgGAaADQAbADAVANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAdgTAOQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiALgWACQgTARgbARQhFAqgzgFQgVAPgUAGQgbAIgcgGQgdgFgVgSQgWgSgKgbIgBgDQgTAPgbAIQgSAGgiAGQguAIgfgBQgXgBgUgHIgbACQgxABgUAFQgOAEgcAOQgbAOgPAEQgjAKglgMIgFgCIgBABQgMAHgOATIgdAqQgRAagNAPQgWAXgnAZQgoAbgcAGQgVAEgWgFIACASQABAfgOAbIgNAXQgJAOgDAJQgJAVAAArQgBAtgFATQgKAigfAXQAWAPALAYQAMAYACAiQABALgCAzQgBAnAJAWQAFAMAOAWQANAagCAeQAAAMgDALQAWAFAUAQQAdAYAJAiQAHAcACAEQAKAUAcAMIAYAJIAXAJQAhAPATAgQAUAggDAkQgCAjgZAdQgZAcgjAHQgKABgMAAQgXAAgbgIg");
	var mask_2_graphics_522 = new cjs.Graphics().p("AiaNWQgmgHglgLQgugNgKgBQgngDgTgEQgigIgYgcQgQgTgGgVQgYAAgbgJQg0gPgtgfQgugfgggsQgegpgIgkQgFgUAAgdQAAgYAFgSQgVgEgUgNQgZgQgTgZQgfgugHhEQgCgZAAgjIAAg8QAAgsAFgSQAIgfAbgXIAGgEIgEgDQgdgYgJghQgEgSAAgXQgBgcABgiQABgiACgNQAFgYAIgVQASg4AbgiQAlgtAvgGQASgCAQAEQgEgWAEgXQAFgbAQgWQAQgXAYgOIARgJIAQgLQAHgGAIgMIAMgUQAQgYAggiQA1g3ArgRQAhgOArAAQAXAAATAFIAigPQAlgPAUgDQAMgCARAAIAeAAIA5AAQAYABASAFIAQgFQBCgPAqAGQAdAEAXANQAaAOAOAXIAHALQAhgpAhgUQAsgaArAJQArAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAAAIAAgQIADgQQAlgWAVgIIAcgHIAcgHIAvgPQAZgGAaADQAbADAVANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAdgTAOQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiAMgWABQgTARgbARQhFAqgzgEQgVAOgUAGQgbAIgcgGQgdgFgVgSQgWgSgKgbIgBgDQgTAPgbAIQgSAGgiAGQguAIgfgBQgXgBgUgHIgbACQgxABgUAFQgOAEgcAOQgbAOgPAEQgjAKglgMIgFgBIgBAAQgMAHgOATIgdAqQgRAagNAPQgWAXgnAZQgoAbgcAGQgVAEgWgFIACASQABAfgOAbIgNAXQgJAOgDAJQgJAVAAArQgBAugFATQgKAhgfAXQAWAPALAYQAMAYACAiQABALgCAzQgBAnAJAWQAFAMAOAWQANAagCAeQAAAMgDALQAWAGAUAPQAdAYAJAiQAHAcACAEQAKAUAcAMIAYAJIAXAJQAhAPATAgQAJAPAFAPIAFgBQAtgDAiAHQALACAUAGIAeAIIA2AKQAgAGATAKQAfAPASAgQATAfgDAjQgCAigYAcQgYAdgiAHQgKACgOAAQgTAAgYgEg");
	var mask_2_graphics_523 = new cjs.Graphics().p("AA9NaQgkgHgRgGQgbgJgTgQQgVAVgcAGQgZAFgqgHQgmgHglgLQgugNgKgBQgngDgTgEQgigIgYgcQgQgTgGgVQgYAAgbgJQg0gPgtgfQgugfgggsQgegpgIgkQgFgUAAgdQAAgYAFgSQgVgEgUgNQgZgQgTgZQgfgugHhEQgCgZAAgjIAAg8QAAgsAFgSQAIgfAbgXIAGgFIgEgCQgdgXgJgiQgEgSAAgXQgBgcABgiQABgiACgNQAFgYAIgVQASg4AbgiQAlgtAvgGQASgCAQAEQgEgWAEgXQAFgbAQgWQAQgXAYgOIARgJIAQgLQAHgGAIgMIAMgUQAQgYAggiQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARAAIAeAAIA5AAQAYAAASAGIAQgFQBCgPAqAGQAdAEAXANQAaAOAOAXIAHALQAhgpAhgUQAsgaArAJQArAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAgBIAAgPIADgQQAlgWAVgIIAcgHIAcgHIAvgPQAZgGAaADQAbADAVANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAdgTAOQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiAMgWABQgTARgbARQhFAqgzgFQgVAPgUAGQgbAIgcgGQgdgFgVgSQgWgSgKgbIgBgDQgTAPgbAIQgSAGgiAGQguAIgfgBQgXgBgUgHIgbACQgxABgUAFQgOAEgcAOQgbAOgPAEQgjAKglgMIgFgCIgBABQgMAHgOATIgdAqQgRAagNAPQgWAXgnAZQgoAbgcAGQgVAEgWgFIACASQABAfgOAbIgNAXQgJAOgDAJQgJAVAAArQgBAugFATQgKAigfAWQAWAPALAYQAMAYACAiQABALgCAzQgBAnAJAWQAFAMAOAWQANAagCAeQAAAMgDALQAWAGAUAPQAdAYAJAiQAHAcACAEQAKAUAcAMIAYAJIAXAJQAhAPATAgQAJAOAFAQIAFgBQAtgDAiAHQALACAUAGIAeAIIA2AKQAgAGATAKQARAIANANIAJgGQAdgUAsgBQAdgBAzAIQAqAHAVAIQAjALATAVQARASAHAYQAHAYgEAYQgDAXgPAVQgPAUgVAMQgeARgsAAQgdAAgygJg");
	var mask_2_graphics_524 = new cjs.Graphics().p("AA9NaQgkgHgRgGQgbgJgTgQQgVAVgcAGQgZAFgqgHQgmgHglgLQgugNgKgBQgngDgTgEQgigIgYgcQgQgTgGgVQgYAAgbgJQg0gPgtgfQgugfgggsQgegpgIgkQgFgUAAgdQAAgYAFgSQgVgEgUgNQgZgQgTgZQgfgugHhEQgCgZAAgjIAAg8QAAgsAFgSQAIgfAbgXIAGgFIgEgCQgdgXgJgiQgEgSAAgXQgBgcABgiQABgiACgNQAFgYAIgVQASg4AbgiQAlgtAvgGQASgCAQAEQgEgWAEgXQAFgbAQgWQAQgXAYgOIARgJIAQgLQAHgGAIgMIAMgUQAQgYAggiQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARAAIAeAAIA5AAQAYAAASAGIAQgFQBCgPAqAGQAdAEAXANQAaAOAOAXIAHALQAhgpAhgUQAsgaArAJQArAIAZApIADAFIAHgIIAYgUQAOgLAEgMQACgGAAgKIAAgBIAAgPIADgQQAlgWAVgIIAcgHIAcgHIAvgPQAZgGAaADQAbADAVANQAWAOAOAWQAPAWACAZQACAbgMAdQgNAdgTAOQgKAHgQAGIgbAJIg1AYQgnATgnAPQgiAMgWABQgTARgbARQhFAqgzgFQgVAPgUAGQgbAIgcgGQgdgFgVgSQgWgSgKgbIgBgDQgTAPgbAIQgSAGgiAGQguAIgfgBQgXgBgUgHIgbACQgxABgUAFQgOAEgcAOQgbAOgPAEQgjAKglgMIgFgCIgBABQgMAHgOATIgdAqQgRAagNAPQgWAXgnAZQgoAbgcAGQgVAEgWgFIACASQABAfgOAbIgNAXQgJAOgDAJQgJAVAAArQgBAugFATQgKAigfAWQAWAPALAYQAMAYACAiQABALgCAzQgBAnAJAWQAFAMAOAWQANAagCAeQAAAMgDALQAWAGAUAPQAdAYAJAiQAHAcACAEQAKAUAcAMIAYAJIAXAJQAhAPATAgQAJAOAFAQIAFgBQAtgDAiAHQALACAUAGIAeAIIA2AKQAgAGATAKQARAIANANIAJgGQAdgUAsgBQAdgBAzAIQAqAHAVAIQAjALATAVIAJAKIABgDQANgVAUgMQAbgRAogDQAbgCAtAEQAhAEAPAEQAbAGASAMQAWAOANAXQAOAXAAAaQACAagMAYQgLAYgVAPQgZATgnAFQgbADgrgDQgogDgagIQgjgKgVgVQgHgGgFgHIgFAIQgPAUgVAMQgeARgsAAQgdAAgygJg");
	var mask_2_graphics_525 = new cjs.Graphics().p("AI7NmQgogDgbgSIgFgDQgWAMgdAEQgcADgrgEQgogDgZgHQgkgLgVgUQgGgHgGgHIgFAIQgOAVgVAMQgfARgrAAQgdAAgygKQglgHgPgFQgdgKgSgPQgWAUgcAGQgYAGgrgIQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgTgHgVQgXAAgcgIQg0gPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgZAEgSQgVgEgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegWgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARADQgFgWAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAhghQA1g3AqgRQAigOAqAAQAXAAATAEIAigOQAlgPAUgDQANgCARgBIAeABIA5gBQAXABASAFIARgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGALQAhgpAigTQAsgaArAIQAqAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIACgQQAlgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgWABQgTARgbARQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgegCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgGgCIgBABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgWAEgWgFIACASQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAVQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBALgDAMQAWAFAUAQQAeAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAIAPAFAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAgAGAUAJQAQAJAOANIAJgHQAdgUArgBQAegBAyAIQArAIAVAHQAiAMAUAVIAIAJIACgCQANgVAUgNQAbgRAngDQAbgCAtAFQAhAEAQAEQAaAGASAMIAGADIAHgDQAWgKAggDIA5gDQAVgBArgEQAlgCAZAJQAbAKATAYQAUAXAEAdQAFAdgMAcQgLAdgXARQgaATgoAHQgVAEgzACIgwABIgagBg");
	var mask_2_graphics_526 = new cjs.Graphics().p("AGjNmQgpgDgbgSIgEgDQgWAMgeAEQgbADgrgEQgogDgagHQgjgLgVgUQgHgHgFgHIgFAIQgPAVgVAMQgeARgrAAQgdAAgygKQgkgHgRgFQgcgKgTgPQgVAUgcAGQgZAGgqgIQgmgGglgMQgugMgKgCQgngCgTgEQgigIgYgdQgPgTgHgVQgYAAgbgIQg0gPgtgfQgugggggrQgegpgIglQgFgUAAgcQAAgZAFgSQgVgEgUgMQgZgQgTgaQgfgugHhDQgCgaAAgiIAAg9QAAgrAFgSQAIggAbgWIAGgFIgEgDQgdgWgJgjQgEgSAAgXQgBgbABgiQABgjACgMQAFgZAIgUQASg5AbghQAlguAvgFQASgCAQADQgEgWAEgWQAFgbAQgXQAQgXAYgNIARgJIAQgLQAHgHAIgLIAMgUQAQgZAgghQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAdAEAWANQAaAOAOAWIAHALQAhgpAhgTQAsgaArAIQArAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgPIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAZgGAaADQAbAEAVANQAWANAOAWQAPAWACAaQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTARgbARQhEArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgWgRgKgcIgBgCQgTAOgaAJQgSAFgiAGQguAJgfgCQgYgBgUgGIgbABQgxABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgdArQgRAagNAOQgWAXgnAaQgoAbgcAFQgVAEgWgFIACASQABAggOAbIgNAWQgJAOgDAJQgJAWAAAqQgBAvgFATQgKAigfAVQAWAQALAXQAMAYACAjQABALgCAzQgBAnAJAVQAFAMAOAXQANAagCAeQAAALgDAMQAWAFAUAQQAdAXAJAjQAHAcACAEQAKAUAcAMIAYAIIAXAJQAhAPATAgQAJAPAFAPIAFAAQAtgEAiAIQALACAUAGIAeAIIA2AKQAgAGATAJQARAJANANIAJgHQAdgUAtgBQAdgBAzAIQApAIAVAHQAjAMATAVIAJAJIABgCQANgVAUgNQAbgRAogDQAbgCAtAFQAhAEAPAEQAbAGASAMIAGADIAHgDQAVgKAhgDIA4gDQAVgBArgEQAlgCAZAJQARAGAOAMQARgSAXgIQAUgHAfgBIAzAAQAQgBAPgEQAKgDATgIQAcgKAeAHQAeAHAWAUQAVAUAIAeQAIAegIAcQgLAlghAcQgdAbgkAIQgVAGggAAIg2gBIgjABQgUAAgOgDQgagGgVgRIgLAJQgZATgoAHQgWAEgzACIgvABIgagBg");
	var mask_2_graphics_527 = new cjs.Graphics().p("AEbNmQgogDgbgSIgFgDQgWAMgdAEQgcADgrgEQgogDgZgHQgjgLgVgUQgGgHgGgHIgFAIQgOAVgVAMQgfARgrAAQgdAAgygKQglgHgQgFQgdgKgSgPQgWAUgcAGQgYAGgrgIQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgTgHgVQgXAAgcgIQg0gPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgZAEgSQgVgEgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegWgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARADQgFgWAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAhghQA1g3AqgRQAigOAqAAQAXAAATAEIAigOQAlgPAUgDQANgCARgBIAeABIA5gBQAXABASAFIASgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGALQAhgpAigTQArgaArAIQAqAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIACgQQAlgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgWABQgTARgbARQhEArg0gFQgVAOgUAGQgaAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgGgCIgBABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgWAEgWgFIACASQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAVQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBALgDAMQAXAFATAQQAeAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAgAGAUAJQARAJANANIAJgHQAdgUAsgBQAegBAyAIQArAIAVAHQAiAMAUAVIAIAJIACgCQANgVAUgNQAagRAngDQAbgCAtAFQAhAEAQAEQAaAGASAMIAGADIAHgDQAWgKAggDIA5gDQAVgBArgEQAlgCAZAJQARAGANAMQASgSAXgIQAUgHAegBIA0AAQAPgBAPgEQAKgDATgIQAcgKAfAHQAOADAMAGIACgDQAMgaAWgPIAmgWQAOgIASgSIAegdQAhgcAkgGQAfgFAeAOQAdANASAaQARAaAAAhQABAggRAbQgIAOgfAdQguAugKAIQghAdggAKQgZAIgcgDQgcgCgWgNQgNAegbAYQgeAbgjAIQgWAGggAAIg2gBIgjABQgUAAgOgDQgagGgVgRIgKAJQgaATgoAHQgVAEgzACIgwABIgagBg");
	var mask_2_graphics_528 = new cjs.Graphics().p("AC4NmQgpgDgbgSIgFgDQgVAMgeAEQgbADgqgEQgogDgagHQgjgLgVgUQgHgHgFgHIgFAIQgPAVgVAMQgeARgsAAQgdAAgygKQgkgHgRgFQgcgKgTgPQgVAUgcAGQgZAGgqgIQgmgGglgMQgugMgKgCQgngCgTgEQgigIgYgdQgQgTgGgVQgYAAgbgIQg0gPgtgfQgugggggrQgegpgIglQgFgUAAgcQAAgZAEgSQgUgEgUgMQgZgQgTgaQgfgugHhDQgCgaAAgiIAAg9QAAgrAFgSQAIggAbgWIAGgFIgEgDQgdgWgJgjQgEgSAAgXQgBgbABgiQABgjACgMQAFgZAIgUQASg5AbghQAlguAvgFQARgCARADQgFgWAFgWQAFgbAQgXQAQgXAYgNIARgJIAQgLQAHgHAIgLIAMgUQAQgZAgghQA1g3ArgRQAhgOArAAQAXAAATAEIAigOQAlgPAUgDQAMgCARgBIAeABIA5gBQAYABASAFIARgEQBCgPAqAGQAdAEAXANQAaAOAOAWIAGALQAigpAhgTQAsgaArAIQAqAIAZApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIAAgPIADgQQAlgXAVgHIAcgHIAcgHIAvgQQAZgGAaADQAbAEAVANQAWANAOAWQAPAWACAaQACAbgMAcQgNAegTAOQgKAHgQAFIgbAJIg1AZQgnATgnAPQgiALgWABQgTARgbARQhFArgygFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgWgRgKgcIgBgCQgTAOgbAJQgSAFgiAGQguAJgfgCQgZgBgUgGIgaABQgxABgUAGQgOAEgcANQgbAOgPAEQgjALglgMIgFgCIgBABQgMAHgOASIgdArQgRAagNAOQgWAXgnAaQgoAbgcAFQgWAEgVgFIACASQABAggOAbIgNAWQgJAOgDAJQgJAWAAAqQgBAvgFATQgKAigfAVQAWAQALAXQAMAYACAjQABALgCAzQgBAnAJAVQAFAMAOAXQANAagCAeQAAALgDAMQAWAFAUAQQAdAXAJAjQAHAcACAEQAKAUAcAMIAYAIIAXAJQAhAPATAgQAJAPAEAPIAGAAQAtgEAiAIQALACAUAGIAeAIIA2AKQAgAGATAJQARAJANANIAJgHQAdgUAtgBQAdgBAzAIQAqAIAVAHQAjAMATAVIAIAJIACgCQANgVAUgNQAbgRAogDQAbgCAsAFQAhAEAPAEQAbAGASAMIAFADIAIgDQAVgKAhgDIA4gDQAVgBArgEQAlgCAZAJQARAGAOAMQARgSAXgIQAUgHAfgBIAzAAQAQgBAPgEQAKgDATgIQAcgKAeAHQAPADAMAGIACgDQALgaAWgPIAngWQANgIATgSIAegdQAggcAkgGQAcgEAbAKIgBgOQgBgbAMgXIAOgWQAKgPAEgIQAEgIAFgRIAKgZQAMgaAZgSQAYgRAdgEQAdgDAcAMQAcAMARAYQAXAggCAuQgCAogTAqQgYA1gkAdQguAjgxgGQgNgBgLgFIABAPQAAAggQAbQgJAOgeAdQgvAugJAIQgiAdgfAKQgaAIgcgDQgbgCgXgNQgMAegcAYQgdAbgkAIQgVAGggAAIg2gBIgjABQgUAAgOgDQgbgGgUgRIgLAJQgZATgoAHQgWAEgzACIgwABIgZgBg");
	var mask_2_graphics_529 = new cjs.Graphics().p("AChNmQgogDgbgSIgFgDQgWAMgdAEQgcADgqgEQgogDgZgHQgkgLgVgUQgGgHgGgHIgFAIQgOAVgVAMQgfARgrAAQgdAAgygKQglgHgQgFQgdgKgSgPQgWAUgcAGQgYAGgrgIQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgTgHgVQgXAAgcgIQg0gPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgZAEgSQgVgEgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegWgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARADQgFgWAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAhghQA1g3AqgRQAigOAqAAQAXAAATAEIAigOQAlgPAUgDQANgCARgBIAeABIA5gBQAXABASAFIASgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGALQAhgpAigTQAsgaArAIQAqAIAYApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIACgQQAlgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgWABQgTARgbARQhDArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgGgCIgBABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgWAEgWgFIACASQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAVQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBALgDAMQAXAFATAQQAeAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAgAGAUAJQARAJANANIAJgHQAdgUAsgBQAegBAyAIQArAIAVAHQAiAMAUAVIAIAJIACgCQANgVAUgNQAbgRAngDQAbgCAsAFQAhAEAQAEQAaAGASAMIAGADIAHgDQAWgKAggDIA5gDQAVgBArgEQAlgCAZAJQARAGANAMQASgSAXgIQAUgHAegBIA0AAQAPgBAPgEQAKgDATgIQAcgKAfAHQAOADAMAGIACgDQAMgaAWgPIAmgWQAOgIASgSIAegdQAhgcAkgGQAbgEAbAKIgBgOQAAgbALgXIAOgWQAKgPAEgIQAEgIAGgRIAJgZQANgaAYgSQAQgLASgGQgIgIgGgJQgUgggDhBQgCg3AJgjQAOgyAkgWQAegUAnAGQAlAGAZAbQAXAXAJAnQAEAUAAAbIgCAvQgEAzgMAZQgMAZgZAQQgLAHgMAEQAHAGAFAIQAXAggCAuQgBAogTAqQgZA1gkAdQgtAjgxgGQgNgBgMgFIABAPQABAggRAbQgIAOgfAdQguAugKAIQghAdggAKQgZAIgcgDQgcgCgWgNQgNAegbAYQgeAbgjAIQgWAGggAAIg2gBIgjABQgUAAgOgDQgagGgVgRIgKAJQgaATgoAHQgVAEgzACIgwABIgagBg");
	var mask_2_graphics_530 = new cjs.Graphics().p("AChNmQgogDgbgSIgFgDQgWAMgdAEQgcADgqgEQgogDgZgHQgkgLgVgUQgGgHgGgHIgFAIQgOAVgVAMQgfARgrAAQgdAAgygKQglgHgQgFQgdgKgSgPQgWAUgcAGQgYAGgrgIQgmgGglgMQgugMgKgCQgngCgTgEQghgIgYgdQgQgTgHgVQgXAAgcgIQg0gPgtgfQgtggghgrQgdgpgJglQgEgUAAgcQAAgZAEgSQgVgEgTgMQgagQgSgaQgfgugHhDQgDgaAAgiIAAg9QAAgrAFgSQAJggAagWIAGgFIgDgDQgegWgIgjQgEgSAAgXQgCgbABgiQABgjADgMQAFgZAHgUQATg5AaghQAmguAvgFQARgCARADQgFgWAEgWQAFgbAQgXQARgXAXgNIARgJIAQgLQAIgHAIgLIAMgUQAPgZAhghQA1g3AqgRQAigOAqAAQAXAAATAEIAigOQAlgPAUgDQANgCARgBIAeABIA5gBQAXABASAFIASgEQBCgPAqAGQAcAEAYANQAZAOAPAWIAGALQAhgpAigTQAsgaArAIQAqAIAYApIADAFIAHgHIAYgUQAOgMAEgLQACgGAAgKIAAgBIABgPIACgQQAlgXAWgHIAbgHIAcgHIAvgQQAagGAZADQAbAEAVANQAXANAOAWQAPAWACAaQABAbgLAcQgNAegUAOQgJAHgQAFIgcAJIg0AZQgnATgoAPQgiALgWABQgTARgbARQhDArg0gFQgVAOgUAGQgbAIgcgFQgdgGgVgSQgVgRgLgcIgBgCQgSAOgcAJQgSAFghAGQgvAJgfgCQgYgBgUgGIgaABQgxABgUAGQgPAEgbANQgcAOgOAEQgjALglgMIgGgCIgBABQgLAHgPASIgcArQgRAagOAOQgVAXgnAaQgpAbgbAFQgWAEgWgFIACASQABAggNAbIgOAWQgIAOgEAJQgJAWAAAqQAAAvgGATQgKAigeAVQAVAQAMAXQALAYACAjQABALgBAzQgBAnAIAVQAGAMAOAXQANAagCAeQgBALgDAMQAXAFATAQQAeAXAJAjQAGAcACAEQAKAUAcAMIAYAIIAYAJQAhAPATAgQAJAPAEAPIAGAAQAsgEAjAIQALACATAGIAfAIIA1AKQAgAGAUAJQARAJANANIAJgHQAdgUAsgBQAegBAyAIQArAIAVAHQAiAMAUAVIAIAJIACgCQANgVAUgNQAbgRAngDQAbgCAsAFQAhAEAQAEQAaAGASAMIAGADIAHgDQAWgKAggDIA5gDQAVgBArgEQAlgCAZAJQARAGANAMQASgSAXgIQAUgHAegBIA0AAQAPgBAPgEQAKgDATgIQAcgKAfAHQAOADAMAGIACgDQAMgaAWgPIAmgWQAOgIASgSIAegdQAhgcAkgGQAbgEAbAKIgBgOQAAgbALgXIAOgWQAKgPAEgIQAEgIAGgRIAJgZQANgaAYgSQAQgLASgGQgIgIgGgJQgUgggDhBQgCg3AJgjQAOgxAigWQgOgHgMgMQgVgVgHgbQgCgJgDgVQgCgUgEgLIgJgWIgLgWQgNggAJgkQAJgkAagXQAagXAlgFQAlgEAfARQA/AjAQBoQAIAvgGAmQgIAtgcAbQgIAIgKAGQAQAIANAOQAXAXAJAnQAEAUAAAbIgCAvQgEAzgMAZQgMAZgZAQQgLAHgMAEQAHAGAFAIQAXAggCAuQgBAogTAqQgZA1gkAdQgtAjgxgGQgNgBgMgFIABAPQABAggRAbQgIAOgfAdQguAugKAIQghAdggAKQgZAIgcgDQgcgCgWgNQgNAegbAYQgeAbgjAIQgWAGggAAIg2gBIgjABQgUAAgOgDQgagGgVgRIgKAJQgaATgoAHQgVAEgzACIgwABIgagBg");
	var mask_2_graphics_531 = new cjs.Graphics().p("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");
	var mask_2_graphics_532 = new cjs.Graphics().p("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");
	var mask_2_graphics_533 = new cjs.Graphics().p("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");
	var mask_2_graphics_534 = new cjs.Graphics().p("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");
	var mask_2_graphics_706 = new cjs.Graphics().p("A3fcbMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_707 = new cjs.Graphics().p("A2JcbMAAAgjOMAzPAAAMAAAAjOg");
	var mask_2_graphics_708 = new cjs.Graphics().p("A0zccMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_709 = new cjs.Graphics().p("AzdcdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_710 = new cjs.Graphics().p("AyHcdMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_711 = new cjs.Graphics().p("AwxceMAAAgjQMAzPAAAMAAAAjQg");
	var mask_2_graphics_712 = new cjs.Graphics().p("AvbceMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_713 = new cjs.Graphics().p("AuFcfMAAAgjQMAzPAAAMAAAAjQg");
	var mask_2_graphics_714 = new cjs.Graphics().p("AsvcfMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_715 = new cjs.Graphics().p("ArZcfMAAAgjOMAzPAAAMAAAAjOg");
	var mask_2_graphics_716 = new cjs.Graphics().p("AqDcgMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_717 = new cjs.Graphics().p("AotcgMAAAgjOMAzPAAAMAAAAjOg");
	var mask_2_graphics_718 = new cjs.Graphics().p("AnXchMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_719 = new cjs.Graphics().p("AmBciMAAAgjQMAzPAAAMAAAAjQg");
	var mask_2_graphics_720 = new cjs.Graphics().p("AkrciMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_721 = new cjs.Graphics().p("AjVcjMAAAgjQMAzPAAAMAAAAjQg");
	var mask_2_graphics_722 = new cjs.Graphics().p("Ah/cjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_723 = new cjs.Graphics().p("AgpcjMAAAgjPMAzPAAAMAAAAjPg");
	var mask_2_graphics_724 = new cjs.Graphics().p("AAsckMAAAgjPMAzQAAAMAAAAjPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(514).to({graphics:mask_2_graphics_514,x:227.6,y:175.9}).wait(1).to({graphics:mask_2_graphics_515,x:222.3,y:177.1}).wait(1).to({graphics:mask_2_graphics_516,x:207.9,y:177.1}).wait(1).to({graphics:mask_2_graphics_517,x:195.2,y:177.5}).wait(1).to({graphics:mask_2_graphics_518,x:181.5,y:186.7}).wait(1).to({graphics:mask_2_graphics_519,x:172.7,y:203.1}).wait(1).to({graphics:mask_2_graphics_520,x:172.7,y:222.7}).wait(1).to({graphics:mask_2_graphics_521,x:172.7,y:237.5}).wait(1).to({graphics:mask_2_graphics_522,x:172.7,y:243.5}).wait(1).to({graphics:mask_2_graphics_523,x:172.7,y:244.4}).wait(1).to({graphics:mask_2_graphics_524,x:172.7,y:244.4}).wait(1).to({graphics:mask_2_graphics_525,x:173.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_526,x:189.1,y:244.7}).wait(1).to({graphics:mask_2_graphics_527,x:202.6,y:244.7}).wait(1).to({graphics:mask_2_graphics_528,x:212.6,y:244.7}).wait(1).to({graphics:mask_2_graphics_529,x:214.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_530,x:214.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_531,x:214.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_532,x:214.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_533,x:214.8,y:244.7}).wait(1).to({graphics:mask_2_graphics_534,x:214.8,y:244.7}).wait(172).to({graphics:mask_2_graphics_706,x:177.6,y:181.9}).wait(1).to({graphics:mask_2_graphics_707,x:186.2,y:182}).wait(1).to({graphics:mask_2_graphics_708,x:194.8,y:182}).wait(1).to({graphics:mask_2_graphics_709,x:203.4,y:182.1}).wait(1).to({graphics:mask_2_graphics_710,x:212,y:182.1}).wait(1).to({graphics:mask_2_graphics_711,x:220.6,y:182.2}).wait(1).to({graphics:mask_2_graphics_712,x:229.2,y:182.2}).wait(1).to({graphics:mask_2_graphics_713,x:237.8,y:182.3}).wait(1).to({graphics:mask_2_graphics_714,x:246.4,y:182.3}).wait(1).to({graphics:mask_2_graphics_715,x:255,y:182.4}).wait(1).to({graphics:mask_2_graphics_716,x:263.6,y:182.4}).wait(1).to({graphics:mask_2_graphics_717,x:272.2,y:182.5}).wait(1).to({graphics:mask_2_graphics_718,x:280.8,y:182.5}).wait(1).to({graphics:mask_2_graphics_719,x:289.4,y:182.6}).wait(1).to({graphics:mask_2_graphics_720,x:298,y:182.6}).wait(1).to({graphics:mask_2_graphics_721,x:306.6,y:182.7}).wait(1).to({graphics:mask_2_graphics_722,x:315.2,y:182.7}).wait(1).to({graphics:mask_2_graphics_723,x:323.8,y:182.8}).wait(1).to({graphics:mask_2_graphics_724,x:332.4,y:182.8}).wait(103));

	// Layer 36
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AijAqQgHgBgJgFIgPgJQgUgIAGgPQAEgKAOgMQAKgIAYgEQBAgKATAAQAbgCArACQBpAEBMAWQAdAJADAFQADAHgcgBQgHgBh3ANIh+ANQgnAEgUADQgWAEgKAAIgFAAg");
	this.shape_1.setTransform(252.3,182.4);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(705).to({_off:false},0).to({_off:true},32).wait(90));

	// switch outline
	this.instance_3 = new lib.switchol("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(215.2,251.3,1,1,0,0,0,113.5,69.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(514).to({_off:false},0).wait(192).to({startPosition:0},0).to({_off:true},31).wait(90));

	// FlashAICB
	this.instance_4 = new lib.circlebasic();
	this.instance_4.parent = this;
	this.instance_4.setTransform(259.3,251,1,1,0,0,0,68,68);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(505).to({_off:false},0).to({_off:true},232).wait(90));

	// 4 line1
	this.instance_5 = new lib.ioshline("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-278.7,137.6,1,1,0,0,0,273.3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(505).to({_off:false},0).to({x:130.9},24).wait(165).to({startPosition:0},0).to({x:-278.7},23).to({_off:true},20).wait(90));

	// 4 line2
	this.instance_6 = new lib.ioshline("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-278.7,367.6,1,1,0,0,0,273.3,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(505).to({_off:false},0).to({x:130.9},24).wait(165).to({startPosition:0},0).to({x:-278.7},23).to({_off:true},20).wait(90));

	// 4 vertline
	this.instance_7 = new lib.vertline2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(406.4,-248.8,1,1,0,0,0,0,244.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(505).to({_off:false},0).to({y:260},38).wait(151).to({startPosition:0},0).to({y:762.4},23).to({_off:true},20).wait(90));

	// controls
	this.instance_8 = new lib.controls("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(374.2,251.2,1,1,0,0,0,148.6,33);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(453).to({_off:false},0).to({_off:true},52).wait(322));

	// button down
	this.instance_9 = new lib.buttondown("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(259.7,251.4,1,1,0,0,0,66,66);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(489).to({_off:false},0).to({_off:true},16).wait(322));

	// browser frame mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_348 = new cjs.Graphics().p("EgEMAx3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp6AAMAAAhDMMAmbAAAIAAABMBH4AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_349 = new cjs.Graphics().p("EgGPAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_350 = new cjs.Graphics().p("EgISAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_351 = new cjs.Graphics().p("EgKUAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_352 = new cjs.Graphics().p("EgMXAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_353 = new cjs.Graphics().p("EgOaAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_354 = new cjs.Graphics().p("EgQdAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmbAAAIAAABMBH5AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_355 = new cjs.Graphics().p("EgSfAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_356 = new cjs.Graphics().p("EgUiAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_357 = new cjs.Graphics().p("EgWlAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_358 = new cjs.Graphics().p("EgYoAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg5g9QgegCgmgIQhJgSing9IgqgPIp7AAMAAAhDMMAmcAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_359 = new cjs.Graphics().p("EgaqAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_360 = new cjs.Graphics().p("EgctAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp7AAMAAAhDMMAmdAAAIAAABMBH3AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_361 = new cjs.Graphics().p("EgewAx3IAA42QgNgTgLgXQgphRgYhjQgFgVgCgSIhAhBIg5g9QgegCgmgIQhJgSiog9IgpgPIp8AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIADAAMAAAAghg");
	var mask_3_graphics_362 = new cjs.Graphics().p("EggUAx3IAA42QgNgTgLgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhKgSing9IgqgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_363 = new cjs.Graphics().p("Egh4Ax3IAA42QgMgTgMgXQgphRgYhjQgEgVgCgSIhBhBIg6g9QgdgCgmgIQhJgSing9IgrgPIp6AAMAAAhDMMAmcAAAIAAABMBH3AAAMAAABDLIAEAAMAAAAghg");
	var mask_3_graphics_364 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_365 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_366 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_367 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_368 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_369 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_370 = new cjs.Graphics().p("EgjcAx3IAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g9QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_371 = new cjs.Graphics().p("EgjcAyfIAA42QgMgTgMgXQgphRgYhjQgEgVgDgSIhAhBIg5g+QgegBgmgJQhKgRimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");
	var mask_3_graphics_372 = new cjs.Graphics().p("EgjcA1mIAA41QgMgTgMgYQgphQgYhkQgEgUgDgSIhAhCIg5g8QgegCgmgIQhKgSimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAggg");
	var mask_3_graphics_373 = new cjs.Graphics().p("EgjcA4vIAA42QgMgTgMgYQgphQgYhkQgEgUgDgSIhAhBIg5g+QgegBgmgJQhKgRimg9IgrgPIp7AAMAAAhDMMAmdAAAIAAABMBH4AAAMAAABDLIACAAMAAAAghg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(348).to({graphics:mask_3_graphics_348,x:559.3,y:-53}).wait(1).to({graphics:mask_3_graphics_349,x:546.2,y:-53}).wait(1).to({graphics:mask_3_graphics_350,x:533.1,y:-53}).wait(1).to({graphics:mask_3_graphics_351,x:520,y:-53}).wait(1).to({graphics:mask_3_graphics_352,x:506.9,y:-53}).wait(1).to({graphics:mask_3_graphics_353,x:493.9,y:-53}).wait(1).to({graphics:mask_3_graphics_354,x:480.8,y:-53}).wait(1).to({graphics:mask_3_graphics_355,x:467.7,y:-53}).wait(1).to({graphics:mask_3_graphics_356,x:454.6,y:-53}).wait(1).to({graphics:mask_3_graphics_357,x:441.6,y:-53}).wait(1).to({graphics:mask_3_graphics_358,x:428.5,y:-53}).wait(1).to({graphics:mask_3_graphics_359,x:415.4,y:-53}).wait(1).to({graphics:mask_3_graphics_360,x:402.3,y:-53}).wait(1).to({graphics:mask_3_graphics_361,x:389.3,y:-53}).wait(1).to({graphics:mask_3_graphics_362,x:379.3,y:-19.6}).wait(1).to({graphics:mask_3_graphics_363,x:369.3,y:13.7}).wait(1).to({graphics:mask_3_graphics_364,x:359.3,y:47}).wait(1).to({graphics:mask_3_graphics_365,x:359.3,y:87}).wait(1).to({graphics:mask_3_graphics_366,x:359.3,y:127}).wait(1).to({graphics:mask_3_graphics_367,x:359.3,y:167}).wait(1).to({graphics:mask_3_graphics_368,x:359.3,y:207}).wait(1).to({graphics:mask_3_graphics_369,x:359.3,y:247}).wait(1).to({graphics:mask_3_graphics_370,x:359.3,y:287}).wait(1).to({graphics:mask_3_graphics_371,x:359.3,y:323.1}).wait(1).to({graphics:mask_3_graphics_372,x:359.3,y:343.1}).wait(1).to({graphics:mask_3_graphics_373,x:359.3,y:363.1}).wait(132).to({graphics:null,x:0,y:0}).wait(322));

	// browser frame
	this.instance_10 = new lib.browserframe("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(77,48.5,1,1,0,0,0,-18,-74.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(348).to({_off:false},0).to({_off:true},157).wait(322));

	// shadowmask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_372 = new cjs.Graphics().p("EhCaA8zMAAAh5lMCE1AAAMAAAB5lgEhByA8LMCDlAAAMAAAh4VMiDlAAAMAAAB4VgEhByA8LMAAAh4VMCDlAAAMAAAB4VgEgkogcvQh/A1hhBiIAAAAQhiBig1B+IAAAAQg4CDAACPIAAAAMAAAAy7QAACQA4CDIAAAAQA1B+BiBiIAAAAQBhBiB/A1IAAAAQCCA3CQAAIAAAAMBH3AAAQCPAACEg3IAAAAQB9g1BjhiIAAAAQBhhiA1h+IAAAAQA4iDAAiQIAAAAMAAAgy7QAAiPg4iDIAAAAQg1h+hhhiIAAAAQhjhih9g1IAAAAQiEg4iPAAIAAAAMhH3AAAQiQAAiCA4g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(372).to({graphics:mask_4_graphics_372,x:375.1,y:315.1}).wait(133).to({graphics:null,x:0,y:0}).wait(322));

	// shadow outer
	this.instance_11 = new lib.bshad();
	this.instance_11.parent = this;
	this.instance_11.setTransform(399.9,357.2,1,1,0,0,0,304.9,234.2);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",-17,-16,90);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(372).to({_off:false},0).to({alpha:0.301},50).to({_off:true},83).wait(322));

	// otherbut mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_372 = new cjs.Graphics().p("AgEBYQgWAAgUgNQgTgNgKgUQgKgTAAgXQAAgWAKgUQAKgTATgMQATgMAUABQAIAAAAgEQAeACAXAUQAYAUAGAcQAHAbgOAdQgNAcgaANQgTAKgTAAIgEgBg");
	var mask_5_graphics_373 = new cjs.Graphics().p("AhyBeQgfgRgOgdQgPgdAFghQAFgiAVgZQAcgeAsgEQAtgEAfAZQALAJAIALQAGgGAHgEQATgNAVACQAJAAAAgEQAdABAYAUQAYAUAGAdQAGAbgNAcQgNAcgaAOQgXAKgUgBQgWgBgUgNIgLgJQgJAMgMAJQgZAWghADIgIAAQgcAAgagOg");
	var mask_5_graphics_374 = new cjs.Graphics().p("AAUB5QgdgRgPgdIgEgJQgRALgXAFQghAIgxgBQgjgBgVgDQgegGgUgNQgZgRgOgcQgNgcAEgeQAEgdATgZQAUgYAcgKQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQAMANAIARQAVgNAdgCQAsgEAgAZQALAIAIALQAGgFAIgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAbQAHAcgOAdQgNAcgaANQgWALgVgCQgWAAgUgNIgLgJQgJALgLAKQgbAWggADIgJAAQgcAAgagOg");
	var mask_5_graphics_375 = new cjs.Graphics().p("ABzB5QgegRgPgdIgDgJQgSALgXAFQggAIgxgBQgjgBgVgDIgEgBQgKAEgLADIgcAFQgTACgKACQgNAEgYAMQgYAMgNADQgbAHgdgIQgcgJgTgUQgUgVgHgdQgHgcAGgbQAHgbATgYQASgXAZgPQAvgcBAgEQAmgEAgAIIAKgEQARgHAZgBIArgBIAzABQAcABAUAIQAYAJASAUQAOANAHARQAWgNAcgCQAsgEAgAZQAMAIAIALQAGgFAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAbQAHAcgOAdQgNAcgaANQgWALgVgCQgWAAgUgNIgLgJQgIALgMAKQgbAWggADIgJAAQgbAAgbgOg");
	var mask_5_graphics_376 = new cjs.Graphics().p("AmoDgQgcgFgVgRQgWgRgLgaQgLgaADgcQADgdAUghQAHgNAggpIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAmgEAgAIIAKgEQARgHAYgBIArgBIAzABQAdABAUAIQAYAJASAUQANANAIARQAWgNAcgCQAsgEAgAZQALAIAJALQAGgFAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAHAcgOAdQgNAcgaAMQgWALgVgCQgWAAgUgNIgLgIQgIAKgMAKQgbAWggADQghACgegQQgegRgPgcIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgDgBQgKAEgLACIgcAFQgTACgKACQgNAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEAMgHAOQgJARgZAkQgfAtgRARQgdAgghALQgQAFgRAAQgKAAgLgCg");
	var mask_5_graphics_377 = new cjs.Graphics().p("AnxFiQgegFgZgVQgZgUgNgdQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgLQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAlgDAgAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQAOAOAHARQAWgNAcgDQAsgEAgAZQAMAJAIALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAHAcgOAcQgNAcgaAOQgWAKgVgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgTACgKADQgMADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAsgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgPAbgeAOQgWAKgWAAIgRgBg");
	var mask_5_graphics_378 = new cjs.Graphics().p("AnqH+QgZgCgWgOQgWgNgNgWQgNgXgEgjIgCg/IgBgzQAAgdADgWQAHgrAWgbQgTgSgLgYQgMgdABggQABggANgdQAJgSASgaIAfgsIAYgmQAPgVAPgMQAVgPAagEIAAgDQADgdAUghQAHgNAggqIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAlgDAgAHIAKgEQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQAOAOAHAQQAWgNAcgCQAsgEAgAZQAMAJAIALQAGgGAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAHAcgOAdQgNAcgaANQgWALgVgCQgWAAgUgNIgLgJQgIALgMAKQgbAWggADQghACgegQQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgEgBQgKAFgLACIgcAFQgTACgKACQgMAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEANgHANQgJARgZAkQgfAtgRARQgdAgghALIgQAEIgCAPQgFAegZAqQggA2gHARQgLAigJAQQgFAJgHAIQAOAPAHATQAKAXACAgIAAA6QAABEgCAQQgGAvgWAcQgQAUgYAKQgVAJgVAAIgIgBg");
	var mask_5_graphics_379 = new cjs.Graphics().p("AmNJ7Qg0gPgrgwQgegggPgkQgRgoACgnQADggAQgbIgEgCQgWgNgNgWQgNgXgEgjIgCg/IgBgzQAAgdADgWQAHgsAWgaQgTgSgLgXQgMgdABggQABggANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgPAagFIAAgCQADgdAUghQAHgNAggqIAggpQATgWATgMQAZgQAfgBQAXgCAUAHQAHgaASgWQASgXAZgPQAvgcBAgEQAlgDAgAHIAKgEQARgHAZgBIArgBIAzABQAdABAUAIQAYAJASAUQAOAOAHAQQAWgNAcgCQAsgEAgAZQAMAIAIALQAGgFAHgFQATgMAUABQAJAAAAgEQAeACAXAUQAYAUAGAcQAHAcgOAdQgNAcgaANQgWALgVgCQgWAAgUgNIgLgJQgIALgMAKQgbAWggADQghACgegQQgegRgPgdIgDgJQgSALgXAFQghAIgxgBQgjgBgVgDIgEgBQgKAFgLACIgcAFQgTACgKACQgMAEgYAMQgYAMgNADQgbAHgdgIIgGgCQgEAMgHAOQgJARgZAkQgfAtgRARQgdAgghALIgQAEIgCAPQgFAegZArQggA2gHARQgLAhgJAQQgFAJgHAIQAOAPAHATQAKAXACAgIAAA6QAABEgCAQQgEAhgMAYQALAHAJAKQALALAOAbQAQAcAKALQAHAHAQAOQARANAHAIQAeAigFAxQgFAyglAaQgWARgfAEIgRABQgUAAgUgGg");
	var mask_5_graphics_380 = new cjs.Graphics().p("AiILsQglgGgvgcQgsgZgygpQgwgogNgiQgHgWACgWIgRgEQg0gQgrgvQgegggPglQgRgoACgnQADgfAQgbIgEgCQgWgOgNgWQgNgXgEgjIgCg/IgBgyQAAgeADgUQAHgsAWgbQgTgSgLgYQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAlgDAgAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQAOAOAHARQAWgNAcgDQAsgEAgAZQAMAJAIALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAHAcgOAcQgNAcgaAOQgWAKgVgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgTACgKADQgMADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAtgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgFAKgHAIQAOAPAHATQAKAWACAgIAAA6QAABEgCAQQgEAhgMAYQALAHAJAJQALAMAOAbQAQAbAKALQAHAIAQANQARAOAHAIQAeAhgEAwQAdAEAYAQQAMAIAbAYQAYAVAPAIIAnARQAYAJAMALQAiAbABA0QABAegLAbQgMAdgXAQQgaATglAAQgMAAgNgCg");
	var mask_5_graphics_381 = new cjs.Graphics().p("ACrMLQgMgCgLgFQgQAGgRABQgUACgSgFQgKADgMAAQggACgZgOQgbgOgQgaQgGgLgEgLQggAVgxgIQglgGgvgcQgsgZgygpQgwgogNgiQgHgWACgWIgRgEQg0gQgrgvQgegggPglQgRgoACgnQADgfAQgbIgEgCQgWgOgNgWQgNgXgEgjIgCg/IgBgyQAAgdADgVQAHgsAWgbQgTgSgLgYQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAlgDAgAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQAOAOAHARQAWgNAcgDQAsgEAgAZQAMAJAIALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAHAcgOAcQgNAcgaAOQgWAKgVgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgTACgKADQgMADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAtgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgFAKgHAIQAOAPAHATQAKAWACAhIAAA5QAABEgCAQQgEAhgMAYQALAHAJAJQALAMAOAbQAQAbAKALQAHAIAQANQARAOAHAIQAeAhgEAwQAdAEAYAQQAMAIAbAYQAYAVAPAIIAnARQAYAJAMALQAaAVAHAkQAHgFAJgEQAfgLAiAJIABAAQAcgIAfAIIALAEIAEgCQAfgLAiAJQAiAJAVAZQAWAaADAjQADAjgQAdQgQAdggAPQgXALgYAAIgRgBg");
	var mask_5_graphics_382 = new cjs.Graphics().p("ACrMLQgMgCgLgFQgQAGgRABQgUACgSgFQgKADgMAAQggACgZgOQgbgOgQgaQgGgLgEgLQggAVgxgIQglgGgvgcQgsgZgygpQgwgogNgiQgHgWACgWIgRgEQg0gQgrgvQgegggPglQgRgoACgnQADgfAQgbIgEgCQgWgOgNgWQgNgXgEgjIgCg/IgBgyQAAgdADgVQAHgsAWgbQgTgSgLgYQgMgcABghQABgfANgdQAJgTASgaIAfgsIAYgmQAPgVAPgMQAVgQAagEIAAgCQADgeAUggQAHgNAggrIAggpQATgVATgMQAZgQAfgCQAXgBAUAHQAHgaASgXQASgWAZgQQAvgcBAgEQAlgDAgAIIAKgFQARgGAZgCIArAAIAzAAQAdACAUAIQAYAJASATQAOAOAHARQAWgNAcgDQAsgEAgAZQAMAJAIALQAGgGAHgEQATgNAUACQAJAAAAgEQAeABAXAUQAYAUAGAdQAHAcgOAcQgNAcgaAOQgWAKgVgBQgWgBgUgNIgLgJQgIAMgMAJQgbAWggADQghADgegRQgegRgPgdIgDgIQgSAKgXAGQghAIgxgBQgjgBgVgEIgEAAQgKAEgLADIgcAEQgTACgKADQgMADgYAMQgYAMgNAEQgbAHgdgJIgGgCQgEANgHANQgJASgZAjQgfAtgRASQgdAgghAKIgQAEIgCAQQgFAegZArQggA1gHARQgLAjgJAPQgFAKgHAIQAOAPAHATQAKAWACAhIAAA5QAABEgCAQQgEAhgMAYQALAHAJAJQALAMAOAbQAQAbAKALQAHAIAQANQARAOAHAIQAeAhgEAwQAdAEAYAQQAMAIAbAYQAYAVAPAIIAnARQAYAJAMALQAaAVAHAkQAHgFAJgEQAfgLAiAJIABAAQAcgIAfAIIALAEIAEgCQAfgLAiAJQAWAGAQAMQAJgKALgJQAYgTAsgVQApgUAXgCQAXgDAYAIQAXAHARARQARAQAJAXQAJAXgCAXQgEA4g3AtQgiAcgpALQgsALgmgMQgUgGgPgMQgPATgZAMQgXALgYAAIgRgBg");
	var mask_5_graphics_383 = new cjs.Graphics().p("ACZMLQgMgCgLgFQgPAGgSABQgUACgRgFQgLADgMAAQgfACgagOQgagOgQgaQgHgLgDgLQghAVgwgIQglgGgwgcQgsgZgxgpQgxgogMgiQgIgWADgWIgSgEQgzgQgsgvQgdgggQglQgRgoADgnQACgfAQgbIgDgCQgWgOgNgWQgOgXgDgjIgDg/IgBgyQAAgdADgVQAHgsAWgbQgTgSgKgYQgMgcABghQABgfANgdQAIgTASgaIAfgsIAZgmQAPgVAPgMQAUgQAagEIAAgCQADgeAUggQAIgNAggrIAfgpQATgVATgMQAagQAfgCQAWgBAUAHQAHgaASgXQASgWAagQQAugcBAgEQAlgDAgAIIAKgFQASgGAYgCIArAAIAzAAQAdACAVAIQAXAJATATQANAOAHARQAWgNAcgDQAtgEAgAZQALAJAIALQAGgGAHgEQATgNAVACQAJAAAAgEQAdABAYAUQAYAUAGAdQAGAcgNAcQgNAcgaAOQgXAKgUgBQgWgBgUgNIgMgJQgIAMgMAJQgaAWghADQggADgegRQgfgRgOgdIgEgIQgSAKgXAGQggAIgygBQgjgBgUgEIgFAAQgKAEgKADIgdAEQgSACgJADQgNADgYAMQgYAMgNAEQgcAHgcgJIgHgCQgEANgHANQgJASgZAjQgfAtgQASQgeAgggAKIgRAEIgBAQQgFAegaArQggA1gGARQgLAjgJAPQgGAKgHAIQAOAPAIATQAJAWACAhIABA5QgBBEgCAQQgEAhgMAYQALAHAJAJQALAMAPAbQAPAbAKALQAHAIARANQAQAOAHAIQAeAhgEAwQAdAEAZAQQAMAIAaAYQAYAVAQAIIAmARQAYAJANALQAZAVAHAkQAIgFAKgEQAegLAiAJIAAAAQAcgIAfAIIALAEIAEgCQAfgLAiAJQAWAGAQAMQAJgKAMgJQAYgTArgVQApgUAXgCIAPgBQAEgXAPgVQAUgdAggLQAfgLAiAJQAiAJAVAaQAVAZAEAeQAEAegNAcQgMAdgZARQgYARgfACIgLABQgJAwgwAoQgiAcgpALQgsALgngMQgUgGgPgMQgPATgYAMQgYALgYAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(372).to({graphics:mask_5_graphics_372,x:517.5,y:187.5}).wait(1).to({graphics:mask_5_graphics_373,x:509,y:187.8}).wait(1).to({graphics:mask_5_graphics_374,x:495.5,y:185.2}).wait(1).to({graphics:mask_5_graphics_375,x:486,y:185.2}).wait(1).to({graphics:mask_5_graphics_376,x:474.6,y:194.3}).wait(1).to({graphics:mask_5_graphics_377,x:466,y:207.2}).wait(1).to({graphics:mask_5_graphics_378,x:466,y:222.8}).wait(1).to({graphics:mask_5_graphics_379,x:466,y:235.8}).wait(1).to({graphics:mask_5_graphics_380,x:466,y:246.7}).wait(1).to({graphics:mask_5_graphics_381,x:466,y:249.7}).wait(1).to({graphics:mask_5_graphics_382,x:466,y:249.7}).wait(1).to({graphics:mask_5_graphics_383,x:467.7,y:249.7}).wait(122).to({graphics:null,x:0,y:0}).wait(322));

	// otherbut
	this.instance_12 = new lib.circlebasic();
	this.instance_12.parent = this;
	this.instance_12.setTransform(486,251,1,1,0,0,0,68,68);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(372).to({_off:false},0).to({_off:true},133).wait(322));

	// browser hline
	this.instance_13 = new lib.broswerhline("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(783.2,375.5,1,1,0,0,0,254.1,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(362).to({_off:false},0).to({x:481.5},13).to({x:416.9},3).to({x:350.6},4).to({_off:true},123).wait(322));

	// main circle
	this.instance_14 = new lib.circlebasic();
	this.instance_14.parent = this;
	this.instance_14.setTransform(259.3,251,1,1,0,0,0,68,68);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(347).to({_off:false},0).to({_off:true},158).wait(322));

	// bar gradient
	this.instance_15 = new lib.browserbarshadow("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(400.2,250.4,1,1,0,0,0,302.1,126.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(374).to({_off:false},0).to({alpha:1},19).to({_off:true},112).wait(322));

	// but2
	this.instance_16 = new lib.butcompose("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(257.6,-40,0.732,0.732,0,0,0,48.6,48.6);
	this.instance_16.alpha = 0.039;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(294).to({_off:false},0).to({regX:48.9,regY:48.8,scaleX:1.17,scaleY:1.17,x:258.2,y:-34.6,alpha:1},4).to({regX:48.5,regY:48.5,scaleX:1,scaleY:1,x:257.6,y:-35},3).wait(34).to({startPosition:0},0).to({scaleX:0.42,scaleY:0.42,alpha:0},21).to({_off:true},1).wait(470));

	// but1
	this.instance_17 = new lib.butcompose("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(257.6,97.5,0.732,0.732,0,0,0,48.6,48.6);
	this.instance_17.alpha = 0.039;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(292).to({_off:false},0).to({regX:48.9,regY:48.8,scaleX:1.17,scaleY:1.17,x:258.2,y:97.9,alpha:1},4).to({regX:48.5,regY:48.5,scaleX:1,scaleY:1,x:257.6,y:97.5},3).wait(36).to({startPosition:0},0).to({scaleX:0.44,scaleY:0.44,alpha:0},21).to({_off:true},1).wait(470));

	// plusgrow mask
	this.instance_18 = new lib.anothermasky("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(259.6,251.4,1,1,0,0,0,20.7,20.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(204).to({_off:false},0).to({scaleX:2.34,scaleY:2.41,x:259.7,y:252.4},11).to({regX:20.8,regY:20.8,scaleX:2.65,scaleY:2.73,x:259.9,y:252.7},5).to({_off:true},1).wait(606));

	// FAB mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_192 = new cjs.Graphics().p("EgBYA+dQoRgknlhkQoqhymni2QiYhCkMkRQkFkKkal0QknmGjdl6Qj0mhhhk3Qg1iogXkRQgZkmARlJQApsjEEp4QDypPGqnJQF4mVH5keQCjhbEaiJQFCicE3iFQM7lgEnAAQCyAAGNBoQGtBwG+CvQIFDKGCDlQHDELDUEOQEFFLDZI6QDUIsBzJ6QB3KPgSI4QgUJni0GGQiMEskRFWQkIFMlZE8QlcFAlxD3QmBEDldCLQihBAl4AXQiqALi4AAQj1AAkMgTgAjUhuQhPBQAABwQAABwBPBPQBQBQBxAAQBvAABPhQQBQhPAAhwQAAhwhQhQQhPhPhvAAQhxAAhQBPg");
	var mask_6_graphics_193 = new cjs.Graphics().p("EgBSA6OQntginFhdQoEhqmKiqQiNg9j6j/Qjzj4kHlaQkUlsjOlgQjjmFhbkiQgwicgWj/QgXkSAPkzQAnrsDypNQDionGMmqQFfl6HXkKQCXhVEIiAQEriREjh8QMClIETAAQCmAAFyBhQGQBoGgCjQHhC9FoDVQGlD5DFD7QDzE1DLITQDGIGBrJPQBvJjgRIRQgTI+ioFrQiCEYj/E/Qj2E1lBEnQlFEqlXDmQloDxlECCQiWA8lfAVQieAKisAAQjkAAj6gRgAjFhmQhKBKAABoQAABpBKBKQBKBKBpAAQBnAABKhKQBLhKAAhpQAAhohLhKQhKhKhnAAQhpAAhKBKg");
	var mask_6_graphics_194 = new cjs.Graphics().p("EgBMA1+QnJgfmkhXQnehiltidQiEg5jnjsQjijmj0lBQj/lRi/lHQjTlphUkMQgtiRgUjsQgVj+AOkcQAkq3DgohQDSn/FvmLQFGleG0j3QCMhPD0h3QEWiGENhzQLLkwD+AAQCbAAFXBaQFyBhGCCWQG+CvFODGQGGDnC3DpQDhEeC8HsQC3HhBkIkQBnI2gQHqQgRIUicFRQh5EEjsEnQjkEfkqERQktEUk+DWQlODfktB5QiLA3lFAUQiTAJieAAQjUAAjogQgAi3hfQhEBGAABgQAABhBEBEQBFBFBhAAQBgAABFhFQBFhEAAhhQAAhghFhGQhFhEhgAAQhhAAhFBEg");
	var mask_6_graphics_195 = new cjs.Graphics().p("EgBGAxvQmlgdmDhQQm5halQiSQh5g0jWjaQjPjTjhkoQjrk3iwktQjClMhOj3QgpiGgTjZQgUjqAOkGQAhqADOn3QDBnWFTltQEslCGSjjQCBhJDhhtQEAh8D4hqQKSkYDrAAQCOAAE8BTQFVBZFjCLQGcChEzC2QFoDVCoDWQDQEICtHGQCpG6BcH5QBeIKgOHEQgQHqiQE2QhvDvjZERQjTEHkSD8QkVD/kmDFQkzDOkVBuQiAA0ksASQiHAIiSAAQjDAAjWgOgAiphXQg+BAAABYQAABaA+A/QBAA/BaAAQBYAAA/g/QBAg/AAhaQAAhYhAhAQg/g/hYAAQhaAAhAA/g");
	var mask_6_graphics_196 = new cjs.Graphics().p("EgBAAtfQmBgalihJQmThTk0iFQhugvjEjIQi+jBjNkPQjXkcihkTQiykwhHjiQgmh7gRjHQgSjWAMjvQAepJC9nMQCxmvE2lNQESknFwjQQB2hCDOhkQDqhxDjhhQJakBDWAAQCCAAEiBMQE4BSFEB/QF5CTEZCnQFJDDCaDEQC+DxCeGfQCbGVBUHOQBWHdgNGdQgOHAiEEcQhmDbjHD5QjADxj7DnQj+DpkMCzQkZC9j+BlQh1AvkSARQh7AIiGAAQizAAjDgOgAiahQQg6A7AABRQAABSA6A5QA6A6BSAAQBRAAA6g6QA6g5AAhSQAAhRg6g7Qg6g5hRAAQhSAAg6A5g");
	var mask_6_graphics_197 = new cjs.Graphics().p("EgA6ApQQldgYlBhCQluhLkXh5Qhkgrixi1Qisivi6j2QjEkBiRj6QiikUhAjNQgihvgQi0QgQjCALjZQAboTCsmhQCgmGEZkuQD4kLFNi9QBsg8C7hbQDUhmDOhYQIhjpDDAAQB2AAEGBFQEbBKEmBzQFWCGD/CXQEqCwCMCyQCsDbCQF4QCMFvBLGjQBPGxgMF2QgNGXh3EBQhdDHi0DhQiuDbjkDRQjmDTjzCjQj/CrjmBcQhqArj5APQhwAHh5AAQiiAAixgMgAiMhIQg0A1AABJQAABKA0A1QA1A0BKAAQBJAAA1g0QA1g1AAhKQAAhJg1g1Qg1g0hJAAQhKAAg1A0g");
	var mask_6_graphics_198 = new cjs.Graphics().p("EABFAlqQk4gWkfg7QlIhDj7htQhagmifiiQiaieinjcQivjniDjgQiRj3g5i4QgfhkgOiiQgPiuAKjDQAZnbCZl2QCQlfD8kPQDfjvEriqQBhg2CnhRQC+hcC5hPQHqjQCuAAQBqAADrA9QD+BDEIBnQEyB4DlCHQELCfB+CfQCaDFCBFRQB+FKBEF3QBGGEgLFQQgLFthrDnQhTCyiiDKQicDFjNC7QjOC9jaCTQjkCZjPBTQhfAmjfANQhlAGhsAAQiSAAiggKgAgDgXQguAuAABDQAABDAuAuQAvAwBCAAQBDAAAvgwQAvguAAhDQAAhDgvguQgvgvhDAAQhCAAgvAvg");
	var mask_6_graphics_199 = new cjs.Graphics().p("EADSAjlQkUgTj/g1Qkig7jehgQhQgiiMiQQiJiLiUjDQibjNh0jGQiAjbgzijQgbhYgMiPQgOiaAJitQAWmlCIlLQB/k2DfjwQDGjUEIiWQBWgwCUhIQCphSCjhFQGxi5CbAAQBdAADRA3QDgA6DqBcQEQBqDKB4QDtCMBvCOQCJCtByErQBvEkA8FMQA/FYgKEpQgKFDhfDMQhJCeiQCzQiKCui1CmQi3CojBCBQjKCIi3BJQhUAijGAMQhZAFhgAAQiAAAiOgJgACRB6QgpAqAAA7QAAA7ApAqQAqAqA7AAQA7AAAqgqQAqgqAAg7QAAg7gqgqQgqgpg7AAQg7AAgqApg");
	var mask_6_graphics_200 = new cjs.Graphics().p("EAFfAhgQjygRjcgtQj9g0jBhTQhGgeh6h9Qh3h6iBipQiHiyhlitQhvi+gsiOQgYhNgLh9QgLiGAHiWQATluB3khQBukNDDjRQCsi5DmiDQBKgpCBg/QCThHCOg9QF5igCHAAQBRAAC2AvQDDAzDMBQQDsBcCwBpQDOB6BhB7QB3CXBjEEQBhD+A1EhQA2ErgJEDQgIEZhTCyQhACJh8CdQh5CXidCQQifCSipBxQiwB2ifBAQhJAdisALQhNAEhUAAQhwAAh7gIgAEmENQgkAkAAAzQAAA0AkAkQAlAkAzAAQAzAAAkgkQAlgkAAg0QAAgzglgkQgkglgzAAQgzAAglAlg");
	var mask_6_graphics_201 = new cjs.Graphics().p("AHrfbQjNgOi9gnQjWgsikhHQg8gZhohrQhlhnhuiQQhziYhViTQhfiigmh5QgUhBgJhqQgKhyAGiAQARk5Bkj0QBfjmCliyQCSidDEhvQBAgkBtg1QB9g8B4g0QFCiJBzAAQBFAACaApQCnArCtBEQDJBPCWBYQCwBoBSBpQBlCBBVDdQBSDYAtD2QAuD/gHDcQgIDwhGCXQg2B1hqCFQhnCBiGB7QiHB8iPBgQiWBkiIA2Qg+AZiTAJQhBAEhIAAQhfAAhpgHgAG7GfQgfAfAAAsQAAArAfAfQAfAfAsAAQArAAAfgfQAfgfAAgrQAAgsgfgfQgfgfgrAAQgsAAgfAfg");
	var mask_6_graphics_202 = new cjs.Graphics().p("AJ4dWQiqgLicggQixgliHg6QgwgVhWhYQhUhVhbh3Qheh9hHh6QhOiGgghjQgQg2gIhYQgIheAGhpQANkCBTjLQBOi8CIiTQB5iCCihcQAzgdBbgsQBngyBkgqQEJhxBfAAQA5AAB/AhQCKAkCPA4QCmBBB7BJQCRBWBEBWQBUBrBFC1QBECzAlDLQAmDTgGC2QgGDFg6B9QgtBghXBuQhVBqhuBmQhwBmh2BPQh8BThwAtQgzAVh5AHQg2ADg7AAQhPAAhWgGgAJQIxQgZAaAAAkQAAAkAZAZQAaAaAkAAQAkAAAZgaQAagZAAgkQAAgkgagaQgZgZgkAAQgkAAgaAZg");
	var mask_6_graphics_203 = new cjs.Graphics().p("AMEbSQiFgKh7gZQiMgchrgvQgmgQhEhFQhChEhHhdQhKhjg4hgQg+hpgYhPQgNgqgGhFQgHhKAFhUQAKjLBCigQA9iVBrh0QBfhmB/hHQApgXBIgjQBRgnBPgiQDRhZBLAAQAtAABkAbQBsAcBxAsQCDAzBhA6QBzBDA1BEQBCBTA3CQQA2CNAdCgQAeCmgFCQQgFCbguBjQgjBMhFBWQhDBUhXBQQhYBRhdA+QhhBBhZAkQgoAQhfAGQgrACgvAAQg+AAhEgEgALlLDQgUAVAAAcQAAAcAUAUQAUAVAdAAQAcAAAUgVQAUgUAAgcQAAgcgUgVQgUgUgcAAQgdAAgUAUg");
	var mask_6_graphics_204 = new cjs.Graphics().p("AORZNQhigHhagSQhmgVhOgiQgcgMgygzQgwgxg0hFQg3hIgphFQgthOgSg5QgJgfgFgzQgEg2ADg9QAHiUAwh1QAthtBPhVQBFhLBeg1QAegRA0gZQA7gdA6gYQCZhBA3AAQAhAABJATQBPAVBTAgQBfAlBHArQBUAxAnAyQAwA9AoBpQAoBnAVB1QAWB6gEBpQgDBxghBIQgaA4gzA/QgxA9g/A7QhBA7hEAuQhHAwhBAZQgdAMhGAEQgfACgiAAQgtAAgygDgAN6NWQgPAOAAAVQAAAVAPAPQAPAOAUAAQAVAAAPgOQAPgPAAgVQAAgVgPgOQgPgPgVAAQgUAAgPAPg");
	var mask_6_graphics_205 = new cjs.Graphics().p("AgQLjQhhgHhagSIAAAAQhmgVhPgiIAAAAQgcgMgxgzIAAAAQgwgxg1hEIAAAAQg2hJgphFIAAAAQgthOgSg5IAAAAQgKgfgEgzIAAAAQgFg2ADg9IAAAAQAIiTAwh1IAAAAQAthtBPhVIAAAAQBFhLBdg1IAAAAQAegQA1gaIAAAAQA7gdA6gYIAAAAQCYhBA2AAIAAAAQAhAABKATIAAAAQBPAVBSAgIAAAAQBgAlBHArIAAAAQBUAxAnAyIAAAAQAwA9AoBpIAAAAQAnBnAWB1IAAAAQAWB5gEBpIAAAAQgDBxgiBIIAAAAQgaA4gyA/IAAAAQgxA9hAA7IAAAAQhAA7hEAuIAAAAQhHAwhBAZIAAAAQgeAMhFAEIAAAAQgfACgiAAIAAAAQguAAgxgDgAADCIIAAAAIAAAAIAAAAgAAECIQAPAAAOgFIAAAAQgOAFgPAAgAgoB+IgBAAIAAAAIABAAgAAXh5QAaALAPAVIAAAAQAQAZAAAiIAAAAQAAAVACAGIAAAAIAEALIAAAAIAFAMQADALAAAMIAAAAQAAgMgDgLIAAAAIgFgMIgEgLIAAAAQgCgGAAgVIAAAAQAAgigQgZIAAAAQgPgVgagLIAAAAIAAAAIAAAAIAAAAgAgbh+QgaAGgTATIAAAAQgTAUgFAaIAAAAQgCAKAAAXIAAAAIgBAwIABgwQAAgXACgKIAAAAQAFgaATgUIAAAAQATgTAagGIAAAAIAAAAgAgah+IAQgBIAAAAIgQABgAgIh/IgCAAIAAAAIACAAg");
	var mask_6_graphics_209 = new cjs.Graphics().p("AnuHvQjNjNAAkiQAAkhDNjNQDMjNEiAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkiAAjMjNg");
	var mask_6_graphics_347 = new cjs.Graphics().p("AlALoIQvwuIQvQuIwvQwg");
	var mask_6_graphics_348 = new cjs.Graphics().p("AkdMHIQuwvIQwQvIwwQvg");
	var mask_6_graphics_349 = new cjs.Graphics().p("Aj6MlIQuwuIQwQuIwwQwg");
	var mask_6_graphics_350 = new cjs.Graphics().p("AjYNEIQvwvIQvQvIwvQvg");
	var mask_6_graphics_351 = new cjs.Graphics().p("Ai1NiIQuwuIQwQuIwwQwg");
	var mask_6_graphics_352 = new cjs.Graphics().p("AiTOBIQvwvIQvQvIwvQvg");
	var mask_6_graphics_353 = new cjs.Graphics().p("AhwOfIQvwuIQvQuIwvQwg");
	var mask_6_graphics_354 = new cjs.Graphics().p("AhNO+IQuwvIQwQvIwwQvg");
	var mask_6_graphics_355 = new cjs.Graphics().p("AgrPcIQvwuIQvQuIwvQwg");
	var mask_6_graphics_356 = new cjs.Graphics().p("AgIP7IQvwvIQvQvIwvQvg");
	var mask_6_graphics_357 = new cjs.Graphics().p("AAaQZIQvwuIQwQuIwwQwg");
	var mask_6_graphics_358 = new cjs.Graphics().p("AA8Q4IQwwwIQvQwIwvQvg");
	var mask_6_graphics_359 = new cjs.Graphics().p("ABfRWIQvwvIQwQvIwwQwg");
	var mask_6_graphics_360 = new cjs.Graphics().p("ACCR1IQvwwIQwQwIwwQvg");
	var mask_6_graphics_361 = new cjs.Graphics().p("ACkSTIQwwvIQvQvIwvQwg");
	var mask_6_graphics_362 = new cjs.Graphics().p("ADHSyIQvwwIQwQwIwwQvg");
	var mask_6_graphics_363 = new cjs.Graphics().p("ADqTQIQvwvIQvQvIwvQwg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(192).to({graphics:mask_6_graphics_192,x:262.2,y:243.4}).wait(1).to({graphics:mask_6_graphics_193,x:262,y:243.8}).wait(1).to({graphics:mask_6_graphics_194,x:261.8,y:244.3}).wait(1).to({graphics:mask_6_graphics_195,x:261.6,y:244.8}).wait(1).to({graphics:mask_6_graphics_196,x:261.4,y:245.3}).wait(1).to({graphics:mask_6_graphics_197,x:261.2,y:245.7}).wait(1).to({graphics:mask_6_graphics_198,x:248.7,y:242}).wait(1).to({graphics:mask_6_graphics_199,x:235,y:228.6}).wait(1).to({graphics:mask_6_graphics_200,x:221.4,y:215.2}).wait(1).to({graphics:mask_6_graphics_201,x:207.7,y:201.8}).wait(1).to({graphics:mask_6_graphics_202,x:194,y:188.4}).wait(1).to({graphics:mask_6_graphics_203,x:180.4,y:175}).wait(1).to({graphics:mask_6_graphics_204,x:166.7,y:161.6}).wait(1).to({graphics:mask_6_graphics_205,x:259.6,y:249}).wait(4).to({graphics:mask_6_graphics_209,x:259.3,y:251}).wait(138).to({graphics:mask_6_graphics_347,x:182.2,y:181.6}).wait(1).to({graphics:mask_6_graphics_348,x:185.7,y:184.6}).wait(1).to({graphics:mask_6_graphics_349,x:189.2,y:187.7}).wait(1).to({graphics:mask_6_graphics_350,x:192.6,y:190.7}).wait(1).to({graphics:mask_6_graphics_351,x:196.1,y:193.8}).wait(1).to({graphics:mask_6_graphics_352,x:199.5,y:196.8}).wait(1).to({graphics:mask_6_graphics_353,x:203,y:199.9}).wait(1).to({graphics:mask_6_graphics_354,x:206.5,y:202.9}).wait(1).to({graphics:mask_6_graphics_355,x:209.9,y:206}).wait(1).to({graphics:mask_6_graphics_356,x:213.4,y:209}).wait(1).to({graphics:mask_6_graphics_357,x:216.9,y:212.1}).wait(1).to({graphics:mask_6_graphics_358,x:220.3,y:215.1}).wait(1).to({graphics:mask_6_graphics_359,x:223.8,y:218.2}).wait(1).to({graphics:mask_6_graphics_360,x:227.3,y:221.2}).wait(1).to({graphics:mask_6_graphics_361,x:230.7,y:224.3}).wait(1).to({graphics:mask_6_graphics_362,x:234.2,y:227.3}).wait(1).to({graphics:mask_6_graphics_363,x:237.6,y:230.3}).wait(464));

	// press splode
	this.instance_19 = new lib.splodecircle("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(253.4,263.2,1.732,1.732,0,0,0,17.8,17.8);
	this.instance_19.alpha = 0.039;
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(274).to({_off:false},0).to({scaleX:4.27,scaleY:4.27,x:259.5,y:251.2,alpha:0},7).to({_off:true},1).wait(545));

	// Layer 4
	this.instance_20 = new lib.splodecircle("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(260.2,250.4,4.162,4.162,0,0,0,17.8,17.8);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(271).to({_off:false},0).to({alpha:0.18},7).wait(12).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(532));

	// mr. butt
	this.instance_21 = new lib.circlefill("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(259.3,251,1,1,0,0,0,68,68);

	this.instance_22 = new lib.circleFAB("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(259.3,251,1,1,-90,0,0,68,68);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_21,this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},192).to({state:[{t:this.instance_22}]},12).to({state:[{t:this.instance_22}]},10).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},72).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_22}]},5).to({state:[]},61).to({state:[]},7).wait(456));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(204).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-16.8},10).to({rotation:-5.5,y:250.9},3).to({scaleX:1,scaleY:1,rotation:0,y:251},3).wait(72).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:-60,x:259.4,y:251.1},4).to({scaleX:1,scaleY:1,rotation:-52.6,x:259.3},2).to({scaleX:1,scaleY:1,rotation:-45,y:251},5).to({_off:true},61).wait(463));

	// mask for lines (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_193 = new cjs.Graphics().p("EgedApLMAAAhSVMA87AAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(193).to({graphics:mask_7_graphics_193,x:179.5,y:245.6}).wait(634));

	// hl1
	this.instance_23 = new lib.hline("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(576.3,79,0.999,1,0,0,0,198.3,0);
	this.instance_23.alpha = 0.199;
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(201).to({_off:false},0).to({regX:198.4,regY:0.1,scaleX:1,x:227.3,y:79.1},18).to({regX:205.1,regY:0,x:169.2,y:79},5).wait(106).to({startPosition:0},0).to({x:585.2},11).to({_off:true},1).wait(485));

	// hl2
	this.instance_24 = new lib.hline("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-217.7,218,0.999,1,0,0,0,198.3,0);
	this.instance_24.alpha = 0.199;
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(201).to({_off:false},0).to({regY:0.1,scaleX:1,x:113.9,y:218.1},18).to({regX:205.1,regY:0,x:169.2,y:218},5).wait(106).to({startPosition:0},0).to({x:585.2},11).to({_off:true},1).wait(485));

	// hlbot
	this.instance_25 = new lib.hline("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(582,366.4,1,1,0,0,0,205.1,0);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(201).to({_off:false},0).to({x:232.3},18).to({x:174},5).wait(106).to({startPosition:0},0).to({x:590},11).to({_off:true},1).wait(485));

	// bot bot line
	this.instance_26 = new lib.hline("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-211.9,483.1,1,1,0,0,0,205.1,0);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(198).to({_off:false},0).to({x:178.1},21).wait(118).to({startPosition:0},0).to({x:594.1},10).to({_off:true},1).wait(479));

	// buttshadow
	this.instance_27 = new lib.shadowFAB("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(260.7,254.4,1,1,0,0,0,140.2,134.3);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(210).to({_off:false},0).to({x:261.2,alpha:0.301},11).wait(121).to({startPosition:0},0).to({alpha:0},15).to({_off:true},8).wait(462));

	// anb mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_216 = new cjs.Graphics().p("EALbAgnQgWgEgRgOQgTgOgJgWQgFgMgBgMIABAAQAdABAZAKIAaAIIAJABIAGADIANAHIgBApIAAAGQgJACgJAAQgIAAgJgBgALSd5IAAAAIADgBIAAADIgDgCgALjd2IABAAIAAACg");
	var mask_8_graphics_217 = new cjs.Graphics().p("EALbAgnQgWgEgSgOQgSgOgJgWQgJgWACgXQADgWAOgUQAOgTAVgJQAPgHAQgBIADALIAHAOQANAeADApQACAXgCAzIAAAGQgJACgJAAQgIAAgJgBg");
	var mask_8_graphics_218 = new cjs.Graphics().p("EAK5AgnQgWgEgRgOQgSgOgKgWQgJgWADgXQACgWAPgUQAOgTAUgJQAbgMAeAHQAfAHASAXQATAXAAAfQABAfgRAYQgQAXgcAJQgMAEgOAAIgRgBg");
	var mask_8_graphics_219 = new cjs.Graphics().p("EAKCAgnQgWgEgSgOQgSgOgJgWQgJgWACgXQADgWAOgUQAOgTAVgJQAagMAfAHIAKADQAHgFAIgEQAZgKAfABQAuADAaAYQATASAFAbQAFAbgJAZQgMAbgZARQgbAQgkgBQgYgBgTgHQgKAHgMAEQgNAEgNAAIgRgBg");
	var mask_8_graphics_220 = new cjs.Graphics().p("EAJLAgnQgWgEgSgOQgSgOgJgWQgJgWACgXQADgWAOgUQAOgTAVgJQAagMAfAHIAKADQAHgFAIgEQAZgKAfABQAuADAZAXQAYgPAeACQAiACAXAWQAWAWADAiQAEAigTAaQgQAXgbAJQgeALgfgNQgRgGgMgMIgEADQgbAQgkgBQgYgBgTgHQgKAHgMAEQgNAEgNAAIgRgBg");
	var mask_8_graphics_221 = new cjs.Graphics().p("EAM9Ag2QgSgKgNgUIgGgMQgaAGgbgKQgRgHgMgLIgDACQgcARgkgCQgXAAgTgIQgKAHgNAFQgUAGgXgEQgWgEgRgNQgSgPgKgVQgJgWADgXQACgXAPgTQAOgTAUgKQAbgMAeAIIAKACQAIgFAIgDQAZgLAeACQAuACAaAYQAXgQAfADQAiACAWAWIAJAJQAJgEAJgBQATgCAUAHQATAHAPAOQAdAdAAArQABAVgJAWQgMAdgYAQQgTANgZABIgCAAQgXAAgUgMg");
	var mask_8_graphics_222 = new cjs.Graphics().p("EANlAiSQgUgCgTgLQgSgMgLgSQgKgRgDgZQgDgPAAgdQgBgjADgTQACgLADgKIgGgKQgaAGgbgLQgRgGgMgLIgDACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgKgWQgJgWADgXQADgWAOgUQAOgTAUgJQAbgMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAXAWIAIAKQAJgEAJgBQATgDAVAHQASAHAPAOQAdAeABArQAAASgGASQAJAQAEAVQAEATAAAhQAAAigDAVQgGAegQATQgNARgTAJQgSAHgRAAIgHAAg");
	var mask_8_graphics_223 = new cjs.Graphics().p("EANGAjWQgegKgSgZQgQgYADggQACggAUgWQAKgKALgGQgMgKgHgNQgKgRgDgYQgDgQAAgdQgBgjADgSQACgMADgJIgGgLQgaAHgbgLQgRgHgMgLIgDACQgbARglgCQgXAAgTgIQgKAIgNAEQgUAGgXgEQgVgEgSgNQgSgPgKgVQgJgWADgXQADgXAOgTQAOgTAUgKQAbgMAeAIIAKADQAIgFAIgEQAZgLAeACQAuACAaAYQAXgPAfACQAiACAXAWIAIAJQAJgDAJgCQATgCAVAHQASAHAPAOQAdAdABArQAAASgGASQAJAQAEAVQAEAUAAAgQAAAjgDAVQgGAegQATQgJAMgNAIIAKAKQASAVADAYQAEAegQAcQgQAcgcALQgOAGgQAAQgNAAgPgFg");
	var mask_8_graphics_224 = new cjs.Graphics().p("EAKvAjeQgbgMgPgcQgOgeAKgiQAJgiAcgSQAbgRAkAGQAaAFATAQQAFgKAIgKQAKgJALgHQgMgJgHgNQgKgRgDgZQgDgPAAgdQgBgjADgTQACgLADgKIgGgKQgaAGgbgLQgRgGgMgLIgDACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgKgWQgJgWADgXQADgWAOgUQAOgTAUgJQAbgMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAXAWIAIAKQAJgEAJgBQATgDAVAHQASAHAPAOQAdAeABArQAAASgGASQAJAQAEAVQAEATAAAhQAAAigDAVQgGAegQATQgJAMgNAIIAKALQASAVADAYQAEAegQAcQgQAbgcALQgcALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_225 = new cjs.Graphics().p("EAKvAjeQgJgEgIgGIgDACQgYARgegBQgggBgWgSQgTgPgIgYQgJgYAEgXIACgHQAGgBACgDIAHgJIAKgJQAHgFACgLQACgGAAgGQATgNAXgCQAdgCAaAQIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgKAIgKQAKgJALgHQgMgJgHgNQgKgRgDgZQgDgPAAgdQgBgjADgTQACgLADgKIgGgKQgaAGgbgLQgRgGgMgLIgDACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgKgWQgJgWADgXQADgWAOgUQAOgTAUgJQAbgMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAXAWIAIAKQAJgEAJgBQATgDAVAHQASAHAPAOQAdAeABArQAAASgGASQAJAQAEAVQAEATAAAhQAAAigDAVQgGAegQATQgJAMgNAIIAKALQASAVADAYQAEAegQAcQgQAbgcALQgcALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_226 = new cjs.Graphics().p("EAKvAjeQgJgEgIgGIgDACQgYARgegBQgggBgWgSQgLgJgIgMQgOgBgOgGQgfgMgQgcQgOgbAIgiQAHghAZgTQAZgSAiACQAiACAXAWQAHAHAFAIQAXABAUANIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgKAIgKQAKgJALgHQgMgJgHgNQgKgRgDgZQgDgPAAgdQgBgjADgTQACgLADgKIgGgKQgaAGgbgLQgRgGgMgLIgDACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgKgWQgJgWADgXQADgWAOgUQAOgTAUgJQAbgMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAXAWIAIAKQAJgEAJgBQATgDAVAHQASAHAPAOQAdAeABArQAAASgGASQAJAQAEAVQAEATAAAhQAAAigDAVQgGAegQATQgJAMgNAIIAKALQASAVADAYQAEAegQAcQgQAbgcALQgcALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_227 = new cjs.Graphics().p("EAKvAjeQgJgEgIgGIgDACQgYARgegBQgggBgWgSQgLgJgIgMQgOgBgOgGQgfgMgQgcQgOgbAIgiIAAgDIgEgHQgNgZAFgeQAFgeAUgUQAUgUAegEQAegEAZAOQAaAOAMAcQAMAdgGAdQAVACAUAMIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgKAIgKQAKgJALgHQgMgJgHgNQgKgRgDgZQgDgPAAgdQgBgjADgTQACgLADgKIgGgKQgaAGgbgLQgRgGgMgLIgDACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgKgWQgJgWADgXQADgWAOgUQAOgTAUgJQAbgMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAXAWIAIAKQAJgEAJgBQATgDAVAHQASAHAPAOQAdAeABArQAAASgGASQAJAQAEAVQAEATAAAhQAAAigDAVQgGAegQATQgJAMgNAIIAKALQASAVADAYQAEAegQAcQgQAbgcALQgcALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_228 = new cjs.Graphics().p("EAKvAjeQgJgEgIgGIgDACQgYARgegBQgggBgWgSQgLgJgIgMQgOgBgOgGQgfgMgQgcQgOgbAIgiIAAgDIgEgHQgNgZAFgeIACgKIAAgBQgGgXAFgXQAGgYAQgRQAXgYAkgCQAlgCAZAWQAaAWAFAkQACAUgFAQQAHAXgFAXQAVACAUAMIAIAFIAIgGQAbgRAkAGQAaAFATAQQAFgKAIgKQAKgJALgHQgMgJgHgNQgKgRgDgZQgDgPAAgdQgBgjADgTQACgLADgKIgGgKQgaAGgbgLQgRgGgMgLIgDACQgbAQglgBQgXgBgTgHQgKAHgNAEQgUAHgXgEQgVgEgSgOQgSgOgKgWQgJgWADgXQADgWAOgUQAOgTAUgJQAbgMAeAHIAKADQAIgFAIgEQAZgKAeABQAuADAaAYQAXgQAfACQAiACAXAWIAIAKQAJgEAJgBQATgDAVAHQASAHAPAOQAdAeABArQAAASgGASQAJAQAEAVQAEATAAAhQAAAigDAVQgGAegQATQgJAMgNAIIAKALQASAVADAYQAEAegQAcQgQAbgcALQgcALgegKQgUgGgOgNQgGAMgKAKQgPAQgVAHQgOAEgNAAQgUAAgSgJg");
	var mask_8_graphics_229 = new cjs.Graphics().p("AgUEVQgJgEgHgGIgDACQgYARgfgBQgfgBgWgSQgLgJgIgMQgOgBgOgGQgggMgPgcQgOgbAHgiIABgDIgEgHQgNgZAFgeIACgKIAAgBQgHgXAGgXQAFgTAMgOQgKgMgFgPQgIgbAGgZQAGgWAQgQQgEgHgEgIQgJgWADgXQACgWAPgUQAOgTAUgJQAbgMAeAHIAKADQAHgFAJgEQAZgKAeABQAuADAZAYQAXgQAfACQAiACAWAWIAJAKQAIgEAKgBQATgDAUAHQATAHAPAOQAdAeAAArQABASgGASQAJAQAEAVQAEATAAAhQAAAhgEAVQgFAegQATQgJAMgNAIIAKALQASAVADAYQAEAegQAcQgQAbgcALQgcALgegKQgUgGgOgNQgGAMgKAKQgQAQgUAHQgOAEgNAAQgTAAgTgJgAAhBuQAbAFASAQQAGgLAIgJQAJgJAMgHQgMgJgHgNQgKgRgDgZQgDgPAAgcQgBgjADgTQABgLADgKIgFgKQgaAGgbgLQgRgGgLgLIgDACQgcAQgkgBIgUgCQAEAJABALQADAYgJAWQgFALgHAJQAOASADAaQADATgFARQAHAXgGAXQAWABAUANIAHAFIAIgGQAUgNAYAAQAJAAAJACg");
	var mask_8_graphics_345 = new cjs.Graphics().p("AAhd9IIEoEIIFIEIoFIEg");
	var mask_8_graphics_346 = new cjs.Graphics().p("AAXdgIIEoEIIEIEIoEIEg");
	var mask_8_graphics_347 = new cjs.Graphics().p("AANdDIIEoEIIEIEIoEIEg");
	var mask_8_graphics_348 = new cjs.Graphics().p("AACclIIEoEIIFIEIoFIFg");
	var mask_8_graphics_349 = new cjs.Graphics().p("AgHcIIIDoEIIEIEIoEIEg");
	var mask_8_graphics_350 = new cjs.Graphics().p("AgSbrIIEoEIIEIEIoEIEg");
	var mask_8_graphics_351 = new cjs.Graphics().p("AgcbOIIDoEIIEIEIoEIEg");
	var mask_8_graphics_352 = new cjs.Graphics().p("AgmaxIIDoFIIEIFIoEIEg");
	var mask_8_graphics_353 = new cjs.Graphics().p("AgxaTIIDoEIIFIEIoFIEg");
	var mask_8_graphics_354 = new cjs.Graphics().p("Ag7Z2IIDoEIIEIEIoEIEg");
	var mask_8_graphics_355 = new cjs.Graphics().p("AhGZZIIEoEIIEIEIoEIEg");
	var mask_8_graphics_356 = new cjs.Graphics().p("AhQY8IIDoFIIEIFIoEIEg");
	var mask_8_graphics_357 = new cjs.Graphics().p("AhaYeIIDoEIIEIEIoEIFg");
	var mask_8_graphics_358 = new cjs.Graphics().p("AhlYBIIDoEIIFIEIoFIEg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(216).to({graphics:mask_8_graphics_216,x:76.7,y:208.8}).wait(1).to({graphics:mask_8_graphics_217,x:76.7,y:208.8}).wait(1).to({graphics:mask_8_graphics_218,x:80.1,y:208.8}).wait(1).to({graphics:mask_8_graphics_219,x:85.6,y:208.8}).wait(1).to({graphics:mask_8_graphics_220,x:91.1,y:208.8}).wait(1).to({graphics:mask_8_graphics_221,x:96.3,y:211.4}).wait(1).to({graphics:mask_8_graphics_222,x:96.9,y:219.4}).wait(1).to({graphics:mask_8_graphics_223,x:96.9,y:226.7}).wait(1).to({graphics:mask_8_graphics_224,x:96.9,y:227.9}).wait(1).to({graphics:mask_8_graphics_225,x:96.9,y:227.9}).wait(1).to({graphics:mask_8_graphics_226,x:96.9,y:227.9}).wait(1).to({graphics:mask_8_graphics_227,x:96.9,y:227.9}).wait(1).to({graphics:mask_8_graphics_228,x:96.9,y:227.9}).wait(1).to({graphics:mask_8_graphics_229,x:167.6,y:427.2}).wait(116).to({graphics:mask_8_graphics_345,x:106.6,y:243.3}).wait(1).to({graphics:mask_8_graphics_346,x:105.5,y:240.4}).wait(1).to({graphics:mask_8_graphics_347,x:104.5,y:237.5}).wait(1).to({graphics:mask_8_graphics_348,x:103.5,y:234.6}).wait(1).to({graphics:mask_8_graphics_349,x:102.4,y:231.6}).wait(1).to({graphics:mask_8_graphics_350,x:101.4,y:228.7}).wait(1).to({graphics:mask_8_graphics_351,x:100.3,y:225.8}).wait(1).to({graphics:mask_8_graphics_352,x:99.3,y:222.9}).wait(1).to({graphics:mask_8_graphics_353,x:98.3,y:219.9}).wait(1).to({graphics:mask_8_graphics_354,x:97.2,y:217}).wait(1).to({graphics:mask_8_graphics_355,x:96.2,y:214.1}).wait(1).to({graphics:mask_8_graphics_356,x:95.1,y:211.2}).wait(1).to({graphics:mask_8_graphics_357,x:94.1,y:208.3}).wait(1).to({graphics:mask_8_graphics_358,x:93.1,y:205.3}).wait(469));

	// android navbut
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,0,1).p("AifiuIE/AAQAPAAAAAPIAAE/QAAAPgPAAIk/AAQgPAAAAgPIAAk/QAAgPAPAAg");
	this.shape_2.setTransform(168.3,428);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(216).to({_off:false},0).to({_off:true},143).wait(468));

	// vert line
	this.instance_28 = new lib.lineanimate();
	this.instance_28.parent = this;
	this.instance_28.setTransform(376.6,736.5,1,1,0,0,0,0,244.5);
	this.instance_28.alpha = 0.051;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(168).to({_off:false},0).to({y:238.5,alpha:1},30).wait(149).to({y:-247.5},15).to({_off:true},1).wait(464));

	// right shade
	this.instance_29 = new lib.rightshade("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(465,253.1,1,1,0,0,0,86,246.1);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(178).to({_off:false},0).to({alpha:0.16},29).wait(132).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(480));

	// radio shadow
	this.instance_30 = new lib.circledrop();
	this.instance_30.parent = this;
	this.instance_30.setTransform(259.8,251.4,2.072,2.068,0,0,0,25.4,25.5);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(107).to({_off:false},0).to({scaleX:1.37,scaleY:1.35,x:259.6,y:251.3,alpha:0.328},3).to({regX:25.5,regY:25.6,scaleX:1.1,scaleY:1.08,x:259.5,y:251.4,alpha:0.461},3).to({regX:25.4,regY:25.7,scaleX:1.01,scaleY:0.99,y:251.3,alpha:0.5},3).wait(64).to({x:260.5,y:251.8,alpha:0.051},11).to({_off:true},1).wait(635));

	// radio mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_106 = new cjs.Graphics().p("A6ad3QlDlEjBnXQjAnVAAnNQAAnxCRnJQCloBEykzQFFlFKXkVQKYkWHJAAQGdAAHKEjQFPDVGSGSQKHKHAAOVQAAGykcImQkAHzlfFfQk4E4nOCnQmtCanfAAQx1AAouougAn/mRQjYDYAAEwQAAExDYDYQDXDYExAAQExAADYjYQDYjYAAkxQAAkwjYjYQjYjYkxAAQkxAAjXDYg");
	var mask_9_graphics_107 = new cjs.Graphics().p("A0dcDQkbkaiomcQiomZAAmSQAAmxB/mQQCRnAEKkLQEckcJCjxQJDjzGPAAQFpAAGPD+QElC5FfFfQI0I1AAMgQAAF7j3HgQjgGzkyEyQkRERmTCRQl2CHmiAAQvkAAnmnngAkZjeQi8C8AAEJQAAELC8C8QC8C9EKAAQEKAAC9i9QC8i8AAkLQAAkJi8i8Qi9i9kKAAQkKAAi8C9g");
	var mask_9_graphics_108 = new cjs.Graphics().p("Auha0QjxjxiPlgQiQldAAlXQAAlzBslUQB8l/DjjkQDyjzHvjOQHujPFVAAQE0AAFVDZQD6CeEsEsQHiHiAAKsQAAFDjTGaQjAF0kFEFQjpDplYB8QlABzllAAQtSAAmgmggAgygHQihCgAADkQAADjChChQCfChDkAAQDkAACgihQChihAAjjQAAjkihigQigihjkAAQjkAAifChg");
	var mask_9_graphics_109 = new cjs.Graphics().p("AokZmQjIjIh3kkQh3kiAAkdQAAkzBakaQBmk9C8i9QDJjJGZirQGbisEbAAQD/AAEbC0QDPCDD5D4QGQGQAAI3QAAEMiwFUQieE0jZDZQjBDBkeBnQkJBfkoAAQrBAAlYlYgACzDQQiFCFAAC9QAAC9CFCFQCFCGC9AAQC9AACFiGQCGiFAAi9QAAi9iGiFQiFiFi9AAQi9AAiFCFg");
	var mask_9_graphics_110 = new cjs.Graphics().p("AioYWQifiehejoQhfjmAAjiQAAj0BIjhQBRj7CViWQCgifFEiIQFGiJDhAAQDLAADgCPQClBoDFDGQE+E8AAHDQAADUiLEOQh+D1itCsQiZCajiBRQjTBMjrAAQoxAAkQkSgAGZGnQhqBqAACWQAACWBqBqQBqBqCWAAQCWAABqhqQBqhqAAiWQAAiWhqhqQhqhqiWAAQiWAAhqBqg");
	var mask_9_graphics_111 = new cjs.Graphics().p("Ag7YAQiTiThYjWQhXjWAAjRQAAjiBCjQQBLjpCKiKQCTiUEth9QEuh/DQAAQC8AADQCEQCYBhC3C3QEmElAAGhQAADFiBD6Qh0DiigCgQiOCNjSBMQjDBGjZAAQoHAAj8j9gAHbHlQhiBiAACLQAACLBiBiQBiBiCLAAQCLAABihiQBihiAAiLQAAiLhihiQhihiiLAAQiLAAhiBig");
	var mask_9_graphics_112 = new cjs.Graphics().p("AAwXqQiGiIhQjFQhRjEAAjAQAAjQA9jAQBFjWB/iAQCHiHEWh0QEVh0DAAAQCsAADAB6QCMBYCoCnQEOEPAAGAQAAC1h2DmQhsDQiSCTQiDCCjBBGQizBAjIAAQneAAjpjogAIdIjQhaBaAACAQAAB/BaBaQBaBbCAAAQB/AABahbQBbhaAAh/QAAiAhbhaQhahah/AAQiAAAhaBag");
	var mask_9_graphics_113 = new cjs.Graphics().p("ACdXTQh8h8hIi0QhJizAAivQAAi+A3ivQA+jEB1h1QB8h8D9hoQD9hqCvAAQCeAACuBvQCABQCaCZQD3D3AAFeQAACmhtDSQhiC+iFCGQh4B3iwBAQikA6i2AAQm0AAjVjUgAJfJgQhTBSAAB1QAAB1BTBSQBSBSB1AAQB0AABShSQBThSAAh1QAAh1hThSQhShSh0AAQh1AAhSBSg");
	var mask_9_graphics_114 = new cjs.Graphics().p("ADBXLQh3h3hIivQhGitAAiqQAAi4A2ipQA8i+BxhxQB4h4D1hlQD1hnCqAAQCYAACpBsQB8BNCVCVQDvDvAAFTQAACghpDLQhfC5iBCBQh0B0iqA9QifA5ixAAQmmAAjOjOgAJ1J1QhQBPAABxQAABxBQBQQBPBPBxAAQBxAABQhPQBPhQAAhxQAAhxhPhPQhQhQhxAAQhxAAhPBQg");
	var mask_9_graphics_115 = new cjs.Graphics().p("ADlXDQhzhzhFipQhEinAAilQAAiyAzijQA7i4BthtQB0h0DthjQDuhiCjAAQCUAACkBmQB3BMCQCQQDnDnAAFIQAACbhlDFQhcCyh9B9QhwBwilA8QiZA3irAAQmYAAjIjIgAKKKJQhNBNAABtQAABtBNBNQBNBNBuAAQBtAABNhNQBNhNAAhtQAAhthNhNQhNhNhtAAQhuAAhNBNg");
	var mask_9_graphics_116 = new cjs.Graphics().p("AEJW8QhwhwhCijQhDiiAAifQAAirAzieQA5iyBphpQBwhxDlhfQDlhfCeAAQCPAACeBjQB0BKCLCKQDfDgAAE9QAACVhiC+QhYCth5B5QhsBrigA6QiUA1ilAAQmLAAjAjAgAKgKdQhLBLAABpQAABqBLBKQBKBLBqAAQBpAABLhLQBKhKAAhqQAAhphKhLQhLhKhpAAQhqAAhKBKg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(106).to({graphics:mask_9_graphics_106,x:258.2,y:239.5}).wait(1).to({graphics:mask_9_graphics_107,x:241.8,y:228.2}).wait(1).to({graphics:mask_9_graphics_108,x:225.5,y:213.2}).wait(1).to({graphics:mask_9_graphics_109,x:209.2,y:198.2}).wait(1).to({graphics:mask_9_graphics_110,x:192.8,y:183.2}).wait(1).to({graphics:mask_9_graphics_111,x:188.1,y:178.9}).wait(1).to({graphics:mask_9_graphics_112,x:183.4,y:174.6}).wait(1).to({graphics:mask_9_graphics_113,x:178.8,y:170.3}).wait(1).to({graphics:mask_9_graphics_114,x:177.2,y:168.9}).wait(1).to({graphics:mask_9_graphics_115,x:175.6,y:167.5}).wait(1).to({graphics:mask_9_graphics_116,x:174,y:166}).wait(711));

	// radio select
	this.instance_31 = new lib.radioselected();
	this.instance_31.parent = this;
	this.instance_31.setTransform(260,252.3,0.969,0.969,0,0,0,49.1,49.1);
	this.instance_31._off = true;

	var maskedShapeInstanceList = [this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(106).to({_off:false},0).to({_off:true},101).wait(620));

	// bar bot copy 2
	this.instance_32 = new lib.ClipGroup_7();
	this.instance_32.parent = this;
	this.instance_32.setTransform(271.5,859.2,0.337,1,0,0,0,700.5,1269.5);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(50).to({_off:false},0).wait(1).to({regX:1110,regY:476,scaleX:0.37,x:412.5,y:65.7,alpha:0.045},0).wait(1).to({scaleX:0.41,x:415.6,alpha:0.091},0).wait(1).to({scaleX:0.44,x:418.6,alpha:0.136},0).wait(1).to({scaleX:0.47,x:421.7,alpha:0.182},0).wait(1).to({scaleX:0.51,x:424.8,alpha:0.227},0).wait(1).to({scaleX:0.54,x:427.8,alpha:0.273},0).wait(1).to({scaleX:0.58,x:430.9,alpha:0.318},0).wait(1).to({scaleX:0.61,x:434,alpha:0.364},0).wait(1).to({scaleX:0.64,x:437,alpha:0.409},0).wait(1).to({scaleX:0.68,x:440.1,alpha:0.455},0).wait(1).to({scaleX:0.71,x:443.1,alpha:0.5},0).wait(1).to({scaleX:0.75,x:446.2,alpha:0.545},0).wait(1).to({scaleX:0.78,x:449.2,alpha:0.591},0).wait(1).to({scaleX:0.81,x:452.3,alpha:0.636},0).wait(1).to({scaleX:0.85,x:455.4,alpha:0.682},0).wait(1).to({scaleX:0.88,x:458.4,alpha:0.727},0).wait(1).to({scaleX:0.92,x:461.5,alpha:0.773},0).wait(1).to({scaleX:0.95,x:464.6,alpha:0.818},0).wait(1).to({scaleX:0.99,x:467.6,alpha:0.864},0).wait(1).to({scaleX:1.02,x:470.7,alpha:0.909},0).wait(1).to({scaleX:1.05,x:473.7,alpha:0.955},0).wait(1).to({scaleX:1.09,x:476.8,alpha:1},0).wait(108).to({scaleX:1.04,x:472.7,alpha:0.952},0).wait(1).to({scaleX:1,x:468.6,alpha:0.905},0).wait(1).to({scaleX:0.95,x:464.6,alpha:0.857},0).wait(1).to({scaleX:0.91,x:460.5,alpha:0.81},0).wait(1).to({scaleX:0.86,x:456.4,alpha:0.762},0).wait(1).to({scaleX:0.82,x:452.3,alpha:0.714},0).wait(1).to({scaleX:0.77,x:448.2,alpha:0.667},0).wait(1).to({scaleX:0.73,x:444.1,alpha:0.619},0).wait(1).to({scaleX:0.68,x:440.1,alpha:0.571},0).wait(1).to({scaleX:0.64,x:436,alpha:0.524},0).wait(1).to({scaleX:0.59,x:431.9,alpha:0.476},0).wait(1).to({scaleX:0.55,x:427.8,alpha:0.429},0).wait(1).to({scaleX:0.5,x:423.7,alpha:0.381},0).wait(1).to({scaleX:0.46,x:419.6,alpha:0.333},0).wait(1).to({scaleX:0.41,x:415.6,alpha:0.286},0).wait(1).to({scaleX:0.37,x:411.4,alpha:0.238},0).wait(1).to({scaleX:0.32,x:407.4,alpha:0.19},0).wait(1).to({scaleX:0.28,x:403.3,alpha:0.143},0).wait(1).to({scaleX:0.23,x:399.2,alpha:0.095},0).wait(1).to({scaleX:0.19,x:395.1,alpha:0.048},0).wait(1).to({scaleX:0.14,x:391,alpha:0},0).to({_off:true},1).wait(626));

	// bar bot copy
	this.instance_33 = new lib.ClipGroup_7();
	this.instance_33.parent = this;
	this.instance_33.setTransform(273.5,1044.1,0.333,1,0,0,0,704.2,1269.5);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(43).to({_off:false},0).wait(1).to({regX:1110,regY:476,scaleX:0.37,x:411.7,y:250.6,alpha:0.043},0).wait(1).to({scaleX:0.4,x:414.7,alpha:0.087},0).wait(1).to({scaleX:0.43,x:417.6,alpha:0.13},0).wait(1).to({scaleX:0.46,x:420.6,alpha:0.174},0).wait(1).to({scaleX:0.5,x:423.6,alpha:0.217},0).wait(1).to({scaleX:0.53,x:426.5,alpha:0.261},0).wait(1).to({scaleX:0.56,x:429.5,alpha:0.304},0).wait(1).to({scaleX:0.6,x:432.4,alpha:0.348},0).wait(1).to({scaleX:0.63,x:435.4,alpha:0.391},0).wait(1).to({scaleX:0.66,x:438.3,alpha:0.435},0).wait(1).to({scaleX:0.69,x:441.3,alpha:0.478},0).wait(1).to({scaleX:0.73,x:444.2,alpha:0.522},0).wait(1).to({scaleX:0.76,x:447.2,alpha:0.565},0).wait(1).to({scaleX:0.79,x:450.1,alpha:0.609},0).wait(1).to({scaleX:0.83,x:453.1,alpha:0.652},0).wait(1).to({scaleX:0.86,x:456.1,alpha:0.696},0).wait(1).to({scaleX:0.89,x:459,alpha:0.739},0).wait(1).to({scaleX:0.92,x:461.9,alpha:0.783},0).wait(1).to({scaleX:0.96,x:464.9,alpha:0.826},0).wait(1).to({scaleX:0.99,x:467.9,alpha:0.87},0).wait(1).to({scaleX:1.02,x:470.8,alpha:0.913},0).wait(1).to({scaleX:1.06,x:473.8,alpha:0.957},0).wait(1).to({scaleX:1.09,x:476.7,alpha:1},0).wait(112).to({scaleX:1.04,x:472.6,alpha:0.952},0).wait(1).to({scaleX:1,x:468.5,alpha:0.905},0).wait(1).to({scaleX:0.95,x:464.4,alpha:0.857},0).wait(1).to({scaleX:0.91,x:460.3,alpha:0.81},0).wait(1).to({scaleX:0.86,x:456.2,alpha:0.762},0).wait(1).to({scaleX:0.82,x:452.1,alpha:0.714},0).wait(1).to({scaleX:0.77,x:448,alpha:0.667},0).wait(1).to({scaleX:0.73,x:443.9,alpha:0.619},0).wait(1).to({scaleX:0.68,x:439.8,alpha:0.571},0).wait(1).to({scaleX:0.64,x:435.7,alpha:0.524},0).wait(1).to({scaleX:0.59,x:431.6,alpha:0.476},0).wait(1).to({scaleX:0.55,x:427.5,alpha:0.429},0).wait(1).to({scaleX:0.5,x:423.4,alpha:0.381},0).wait(1).to({scaleX:0.46,x:419.3,alpha:0.333},0).wait(1).to({scaleX:0.41,x:415.2,alpha:0.286},0).wait(1).to({scaleX:0.37,x:411,alpha:0.238},0).wait(1).to({scaleX:0.32,x:407,alpha:0.19},0).wait(1).to({scaleX:0.28,x:402.9,alpha:0.143},0).wait(1).to({scaleX:0.23,x:398.8,alpha:0.095},0).wait(1).to({scaleX:0.19,x:394.7,alpha:0.048},0).wait(1).to({scaleX:0.14,x:390.6,alpha:0},0).to({_off:true},1).wait(628));

	// bar bot
	this.instance_34 = new lib.ClipGroup_7();
	this.instance_34.parent = this;
	this.instance_34.setTransform(277.5,1224.1,0.33,1,0,0,0,711.9,1269.5);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(36).to({_off:false},0).wait(1).to({regX:1110,regY:476,scaleX:0.36,x:411.8,y:430.6,alpha:0.042},0).wait(1).to({scaleX:0.39,x:414.6,alpha:0.083},0).wait(1).to({scaleX:0.43,x:417.4,alpha:0.125},0).wait(1).to({scaleX:0.46,x:420.3,alpha:0.167},0).wait(1).to({scaleX:0.49,x:423.1,alpha:0.208},0).wait(1).to({scaleX:0.52,x:425.9,alpha:0.25},0).wait(1).to({scaleX:0.55,x:428.6,alpha:0.292},0).wait(1).to({scaleX:0.58,x:431.5,alpha:0.333},0).wait(1).to({scaleX:0.61,x:434.3,alpha:0.375},0).wait(1).to({scaleX:0.65,x:437.1,alpha:0.417},0).wait(1).to({scaleX:0.68,x:439.9,alpha:0.458},0).wait(1).to({scaleX:0.71,x:442.7,alpha:0.5},0).wait(1).to({scaleX:0.74,x:445.5,alpha:0.542},0).wait(1).to({scaleX:0.77,x:448.3,alpha:0.583},0).wait(1).to({scaleX:0.8,x:451.1,alpha:0.625},0).wait(1).to({scaleX:0.84,x:453.9,alpha:0.667},0).wait(1).to({scaleX:0.87,x:456.7,alpha:0.708},0).wait(1).to({scaleX:0.9,x:459.6,alpha:0.75},0).wait(1).to({scaleX:0.93,x:462.4,alpha:0.792},0).wait(1).to({scaleX:0.96,x:465.2,alpha:0.833},0).wait(1).to({scaleX:0.99,x:468,alpha:0.875},0).wait(1).to({scaleX:1.02,x:470.8,alpha:0.917},0).wait(1).to({scaleX:1.06,x:473.6,alpha:0.958},0).wait(1).to({scaleX:1.09,x:476.4,alpha:1},0).wait(117).to({scaleX:1.04,x:472.4,alpha:0.952},0).wait(1).to({scaleX:1,x:468.4,alpha:0.905},0).wait(1).to({scaleX:0.95,x:464.4,alpha:0.857},0).wait(1).to({scaleX:0.91,x:460.3,alpha:0.81},0).wait(1).to({scaleX:0.86,x:456.4,alpha:0.762},0).wait(1).to({scaleX:0.82,x:452.3,alpha:0.714},0).wait(1).to({scaleX:0.77,x:448.3,alpha:0.667},0).wait(1).to({scaleX:0.72,x:444.3,alpha:0.619},0).wait(1).to({scaleX:0.68,x:440.3,alpha:0.571},0).wait(1).to({scaleX:0.63,x:436.3,alpha:0.524},0).wait(1).to({scaleX:0.59,x:432.3,alpha:0.476},0).wait(1).to({scaleX:0.54,x:428.3,alpha:0.429},0).wait(1).to({scaleX:0.5,x:424.3,alpha:0.381},0).wait(1).to({scaleX:0.45,x:420.2,alpha:0.333},0).wait(1).to({scaleX:0.41,x:416.3,alpha:0.286},0).wait(1).to({scaleX:0.36,x:412.2,alpha:0.238},0).wait(1).to({scaleX:0.32,x:408.2,alpha:0.19},0).wait(1).to({scaleX:0.27,x:404.2,alpha:0.143},0).wait(1).to({scaleX:0.23,x:400.2,alpha:0.095},0).wait(1).to({scaleX:0.18,x:396.1,alpha:0.048},0).wait(1).to({scaleX:0.13,x:392.2,alpha:0},0).to({_off:true},1).wait(629));

	// circle 1
	this.instance_35 = new lib.circlebasic();
	this.instance_35.parent = this;
	this.instance_35.setTransform(259.3,66.6,1,1,0,0,0,68,68);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(37).to({_off:false},0).to({alpha:1},29).wait(103).to({alpha:0},22).to({_off:true},13).wait(623));

	// circle 3
	this.instance_36 = new lib.circlebasic();
	this.instance_36.parent = this;
	this.instance_36.setTransform(259.3,429.6,1,1,0,0,0,68,68);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(32).to({_off:false},0).to({alpha:1},23).wait(114).to({alpha:0},22).to({_off:true},13).wait(623));

	// circlecenter mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_2 = new cjs.Graphics().p("ATsOoQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALQAOALAFAQQAFARgGARQgGARgOAJQgNAJgQAAIgEAAg");
	var mask_10_graphics_3 = new cjs.Graphics().p("AUAOyQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQARAAAOALQAOALAFARQAFAQgGARQgGARgOAJQgOAJgRAAIgCAAg");
	var mask_10_graphics_4 = new cjs.Graphics().p("AUYOzQgagCgPgIQgOAJgSAAQgSgBgOgLQgFgEgDgFQgSAAgOgLQgNgKgFgRQgEgRAGgQQAFgQAPgKQAOgKARAAQARABAPALIAJAIQAOABAMAHQAQgJAdgBQAmgBATAMQAVAOACAbQABAagUASQgTAPgkAAIgIAAg");
	var mask_10_graphics_5 = new cjs.Graphics().p("AVuPFQgJgBgOgFIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQAOAMAEATQAFASgHARQgGARgRAKQgNAJgOAAIgHgBg");
	var mask_10_graphics_6 = new cjs.Graphics().p("AWFPgQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARQAKAbgNAYQgHALgLAIQgMAIgNAAIgDABQgTAAgVgOg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AXVQaQgTgEgTgSIggghIgSgSQgIgJgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARIABABIADAAQAaAFAgAiQAVAVAKAQQAOAWgDAVQgCAWgUAPQgPAMgRAAIgJgBg");
	var mask_10_graphics_8 = new cjs.Graphics().p("AYKRXQgRgBgPgJQgNgIgNgRIgUgfQgVgkgEgLIgDgKQgRgFgSgQIggghIgRgSQgJgJgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgLIgFgIIgIgDIgWgJQgagDgNgFQgOgFgJgNIgBgBQgSAGgagBQgagCgPgIQgOAJgSAAQgSgBgOgLQgFgEgDgFQgSAAgOgLQgNgKgFgRQgEgRAGgQQAFgQAPgKQAOgKARAAQARABAPALIAJAIQAOABAMAHQAQgJAdgBQAmgBATAMQAIAGAGAHQAJgDAMgBQAegDAeAJQAZAHAOAOQAKAKAFANIAKACQARAEAaARQAWANAMALQARAQAHARIAAABIAEAAQAZAFAhAiQAVAVAJAQQAFAIADAIQAIACAIAFQANAIAQAZIAoA8QAOAVACAMQAEARgIAQQgIAPgOAJQgOAIgQAAIgCgBg");
	var mask_10_graphics_9 = new cjs.Graphics().p("AXbSTQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgNAcgYASQgZARgfACIgIAAQgaAAgXgMg");
	var mask_10_graphics_10 = new cjs.Graphics().p("AYZUhQgrgCgbgeQgmgpAChgQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBpgxAqQgbAWglAAIgJAAg");
	var mask_10_graphics_11 = new cjs.Graphics().p("AXyWaQgfgDgZgRQgYgSgNgdQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgYALgZAAIgKAAg");
	var mask_10_graphics_12 = new cjs.Graphics().p("AV5YNQgcgCgYgPQgXgPgNgaQgOgZAAgbQAAgZALglQAThDAggbQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgYQAHguAIgVQAKgaAWgSIABgBQgbgqABhRQABggAEgUQAFgcAMgUIACgCIgCgCQgbgNgQgbQgQgbAAgeQAAgaANgYQgJgHgIgMIgUgfQgVgkgEgLIgDgKQgSgFgRgQIggghIgSgSQgIgJgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgEgFQgSAAgNgLQgNgKgFgRQgFgRAGgQQAGgQAOgKQAPgKARAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARIABABIADAAQAaAFAgAiQAVAVAKAQQAFAIADAIQAIACAHAFQAOAIAQAZIAnA8QAJAOAEAJQAPAAAOAEQAiAJAWAaQAUAYAEAfQAEAegMAcQgFALgGAJQAWALAOATQAaAkACBHQADBogwAqQAZAkAAA9QgBAzgSAoQgVAvgnATQgbANgegCQAMAZABAgQABAugVAsQgZA0gmATQgVALgYAAIgIAAg");
	var mask_10_graphics_13 = new cjs.Graphics().p("AQ0ZFQgYgNgQgYQgPgYgCgcQgCgbAMgaQAMgaAWgQQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQggAJgcAAQgjAAgbgOg");
	var mask_10_graphics_14 = new cjs.Graphics().p("AMcZSQhBgWgbgpQgPgXgBgdQgCgdAMgZQANgZAXgQQAYgRAcgCQAYgCAkAJIA8AQIBaAFQAYABAUAFQAJgNANgKQAQgLAbgKIAugQIAlgQQAWgKAPgEQAggKAhAGIAJACQADgUAHgZQAUhEAfgaQAegZArADIgEgJQgNgdAEgeIAGgZIAHgZQAGgtAIgWQAKgaAXgSIAAAAQgbgqAChSQABggADgTQAFgdANgTIACgDIgDgBQgagOgQgaQgQgbAAgeQAAgbANgXQgJgIgJgLIgUggQgVgkgEgKIgDgKQgRgFgSgQIgggiIgRgRQgJgKgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgKIgFgJIgIgDIgWgIQgagEgNgFQgOgFgJgMIgBgCQgSAGgagBQgagBgPgJQgOAKgSgBQgSgBgOgKQgFgEgDgFQgSgBgOgKQgNgLgFgRQgEgRAGgQQAFgQAPgKQAOgKARABQARAAAPALIAJAJQAOAAAMAIQAQgKAdgBQAmgBATANQAIAFAGAIQAJgDAMgBQAegDAeAJQAZAHAOANQAKAKAFAOIAKABQARAEAaARQAWAOAMALQARAPAHARIAAABIAEABQAZAFAhAhQAVAVAJAQQAFAIADAJQAIABAIAFQANAIAQAaIAoA8QAJANAEAKQAOAAAPAEQAiAJAVAZQAVAZAEAfQAEAdgNAdQgEAKgGAJQAVAMAPATQAaAjACBHQADBogxArQAZAkAAA9QAAAygTApQgVAugnATQgbANgegCQANAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgFAegUAXQgTAWguAWQg3AbgpAKQg3APgogKQgOARgTALQghAShBAAQhsAAhEgWg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AMdZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQhMhIAFhFQADgdASgZQARgZAbgMQAbgMAeADQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_16 = new cjs.Graphics().p("AMcZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg5gbQgzgYgvgsQg9g7gIg4QgoAGghgUQgTgLgSgVQgMgNgSgaQgog5gSgoQgag5AAgzQABg3AdgiQASgVAbgKQAbgKAbAEQAcAFAWASQAWASALAaQAEAKAFAXQAFAWAFALQAHAQAbAjQAiAsANAoQADAMACAKQANgCAPACQAfADAXASQALAIAfAjQAZAcAVAIQAMAFAVADIAhAEIAJADIAHgGQAYgRAcgCQAYgCAkAJIA8AQIBaAFQAYABAUAFQAJgNANgKQAQgLAbgKIAugQIAlgQQAWgKAPgEQAggKAhAGIAJACQADgUAHgZQAUhEAfgaQAegZArADIgEgJQgNgdAEgeIAGgZIAHgZQAGgtAIgWQAKgaAXgSIAAAAQgbgqAChSQABggADgTQAFgdANgTIACgDIgDgBQgagOgQgaQgQgbAAgeQAAgbANgXQgJgIgJgLIgUggQgVgkgEgKIgDgKQgRgFgSgQIgggiIgRgRQgJgKgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgKIgFgJIgIgDIgWgIQgagEgNgFQgOgFgJgMIgBgCQgSAGgagBQgagBgPgJQgOAKgSgBQgSgBgOgKQgFgEgDgFQgSgBgOgKQgNgLgFgRQgEgRAGgQQAFgQAPgKQAOgKARABQARAAAPALIAJAJQAOAAAMAIQAQgKAdgBQAmgBATANQAIAFAGAIQAJgDAMgBQAegDAeAJQAZAHAOANQAKAKAFAOIAKABQARAEAaARQAWAOAMALQARAPAHARIAAABIAEABQAZAFAhAhQAVAVAJAQQAFAIADAJQAIABAIAFQANAIAQAaIAoA8QAJANAEAKQAOAAAPAEQAiAJAVAZQAVAZAEAfQAEAdgNAdQgEAKgGAJQAVAMAPATQAaAjACBHQADBogxArQAZAkAAA9QAAAygTApQgVAugnATQgbANgegCQANAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgFAegUAXQgTAWguAWQg3AbgpAKQg3APgogKQgOARgTALQghAShBAAQhsAAhEgWg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AMcZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg5gbQgzgYgvgsQg9g7gIg4QgoAGghgUQgTgLgSgVQgMgNgSgaQgog5gSgoQgag5AAgzQABg3AdgiIACgCQgLgEgLgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAVgcAegMQAfgLAiAJQAiAJAWAZQAVAZAEAgQACANgCANIAAACQADARgEASIABAGQAEAegNAcQgHARgMANQAVAGARAOQAWASALAaQAEAKAFAXQAFAWAFALQAHAQAbAjQAiAsANAoQADAMACAKQANgCAPACQAfADAXASQALAIAfAjQAZAcAVAIQAMAFAVADIAhAEIAJADIAHgGQAYgRAcgCQAYgCAkAJIA8AQIBaAFQAYABAUAFQAJgNANgKQAQgLAbgKIAugQIAlgQQAWgKAPgEQAggKAhAGIAJACQADgUAHgZQAUhEAfgaQAegZArADIgEgJQgNgdAEgeIAGgZIAHgZQAGgtAIgWQAKgaAXgSIAAAAQgbgqAChSQABggADgTQAFgdANgTIACgDIgDgBQgagOgQgaQgQgbAAgeQAAgbANgXQgJgIgJgLIgUggQgVgkgEgKIgDgKQgRgFgSgQIgggiIgRgRQgJgKgEgIQgOgDgPgKQgagTgOgIIgagPQgPgJgHgKIgFgJIgIgDIgWgIQgagEgNgFQgOgFgJgMIgBgCQgSAGgagBQgagBgPgJQgOAKgSgBQgSgBgOgKQgFgEgDgFQgSgBgOgKQgNgLgFgRQgEgRAGgQQAFgQAPgKQAOgKARABQARAAAPALIAJAJQAOAAAMAIQAQgKAdgBQAmgBATANQAIAFAGAIQAJgDAMgBQAegDAeAJQAZAHAOANQAKAKAFAOIAKABQARAEAaARQAWAOAMALQARAPAHARIAAABIAEABQAZAFAhAhQAVAVAJAQQAFAIADAJQAIABAIAFQANAIAQAaIAoA8QAJANAEAKQAOAAAPAEQAiAJAVAZQAVAZAEAfQAEAdgNAdQgEAKgGAJQAVAMAPATQAaAjACBHQADBogxArQAZAkAAA9QAAAygTApQgVAugnATQgbANgegCQANAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgFAegUAXQgTAWguAWQg3AbgpAKQg3APgogKQgOARgTALQghAShBAAQhsAAhEgWg");
	var mask_10_graphics_18 = new cjs.Graphics().p("AMdZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRQAsgQApAPQAXAJASARQASASAHAXQAGASgBAYQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_19 = new cjs.Graphics().p("AMdZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAfgLAiAJQAiAJAVAZQAVAZAEAfQAEAdgNAdQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_20 = new cjs.Graphics().p("AMdZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAfgLAiAIQAhAJAWAZQAVAZAEAgQAEAegNAcQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AMdZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAPgGAPAAQAEgXAPgVQAUgdAfgLQAegLAgAIQATgZAcgKQAfgMAiAJQAiAJAVAZQAWAZAEAgQAEAegNAcQgNAdgZAQQgYARgfACQgQABgOgDQgKAMgNAJQgZARgeACQgDANgGANQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AMdZSQgTgHgQgIIgNAJQgkAUgrABQg4ACg6gbQgzgYgugsQg+g7gIg4QgnAGgigUQgTgLgSgVQgLgNgSgaQgog5gTgoQgag5ABgzQABg3AdgiIACgCQgMgEgKgFQgagOgQgbQgQgbAAgdQAAgLACgJQgCgLAAgKIABgOIgBgPQAAghAUgdQAMgQAPgLQgPgOgJgTQgNgagBg1QAAgxALgaQARgnAsgRIADAAQgEgPAAgOQAAghAUgdQAUgdAggLQAIgDAJgCIAAgBQABgiAUgcQAUgdAfgLQAPgGAPAAQAEgXAPgVQAUgdAfgLQAegLAgAIQATgZAcgKIACgBIAIgNQAVgdAfgLQAfgMAiAKQAiAJAWAaQAUAYAEAfQAEAdgNAdQgMAcgZASQgMAIgPAFQgMAZgXAPQgYARgfACQgQABgOgDQgKAMgNAJQgZARgeACQgDANgGANQgMAcgZARQgTAOgXAEQAAAXgKAWQgMAcgZASQgIAGgJAEQAEAQgBAVQgBAQgFAbQgIAsgKAUQgMAWgUAOIAKALQAVAZAEAgQACANgBANIAAACQACARgDASIABAGQAEAegNAcQgIARgLANQAUAGARAOQAXASAKAaQAEAKAGAXQAFAWAEALQAHAQAbAjQAjAsAMAoQAEAMABAKQAOgCAOACQAfADAXASQAMAIAfAjQAZAcAVAIQAMAFAUADIAiAEIAIADIAIgGQAYgRAbgCQAYgCAlAJIA8AQIBZAFQAZABATAFQAKgNANgKQAQgLAbgKIAtgQIAlgQQAXgKAOgEQAhgKAhAGIAJACQACgUAIgZQAThEAggaQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgZQAHgtAIgWQAKgaAWgSIABAAQgbgqABhSQABggAEgTQAFgdAMgTIACgDIgCgBQgbgOgQgaQgQgbAAgeQAAgbANgXQgJgIgIgLIgUggQgVgkgEgKIgDgKQgSgFgRgQIgggiIgSgRQgIgKgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgKIgEgJIgJgDIgWgIQgagEgMgFQgOgFgJgMIgBgCQgSAGgbgBQgZgBgPgJQgOAKgTgBQgSgBgNgKQgFgEgEgFQgSgBgNgKQgNgLgFgRQgFgRAGgQQAGgQAOgKQAPgKARABQARAAAOALIAJAJQAOAAAMAIQAQgKAegBQAmgBASANQAJAFAFAIQAJgDAMgBQAfgDAdAJQAaAHANANQALAKAFAOIAJABQARAEAbARQAWAOAMALQARAPAGARIABABIADABQAaAFAgAhQAVAVAKAQQAFAIADAJQAIABAHAFQAOAIAQAaIAnA8QAJANAEAKQAPAAAOAEQAiAJAWAZQAUAZAEAfQAEAdgMAdQgFAKgGAJQAWAMAOATQAaAjACBHQADBogwArQAZAkAAA9QgBAygSApQgVAugnATQgbANgegCQAMAZABAhQABAtgVAsQgZA0gmAUQgYAMgdgCQgJAAgIgCQgEAegUAXQgUAWguAWQg3AbgpAKQg2APgpgKQgNARgTALQghAShCAAQhrAAhEgWg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AhlL2QgTgGgQgIIgNAIQgkAVgrABQg4ACg6gcQgzgYgugrQg+g7gIg4QgnAFgigTQgTgMgSgUQgLgOgSgZQgog6gTgoQgag4ABgzQABg4AdgiIACgCQgMgDgKgGQgagOgQgaQgQgbAAgeQAAgKACgKQgCgKAAgLIABgOIgBgOQAAggAUgdQAMgRAPgLQgPgOgJgSQgNgbgBg1QAAgxALgaQARgnAsgQIADgBQgEgOAAgPQAAghAUgdQAUgdAggLQAIgDAJgBIAAgCQABghAUgdQAUgcAfgMQAPgFAPgBQAEgXAPgVQAUgcAfgMQAegKAgAHQATgYAcgLIACAAIAIgOQAVgcAfgMQAfgLAiAJIADABQAIgJAKgGQAagSAhgBQAigBAbARQAWANAOAYQANgIAOAAQARABAOALIAJAIQAOABAMAHQAQgJAegBQAmgBASAMQAJAGAFAHQAJgDAMgBQAfgDAdAJQAaAHANAOQALAKAFANIAJACQARAEAbARQAWANAMALQARAQAGARIABABIADAAQAaAFAgAiQAVAVAKAQQAFAIADAIQAIACAHAFQAOAIAQAZIAnA8QAJAOAEAJQAPAAAOAEQAiAJAWAaQAUAYAEAfQAEAegMAcQgFALgGAJQAWALAOATQAaAkACBHQADBngwAqQAZAkAAA9QgBAzgSAoQgVAvgnATQgbANgegCQAMAZABAgQABAugVAsQgZA0gmATQgYANgdgCQgJgBgIgCQgEAegUAXQgUAXguAWQg3AagpALQg2AOgpgJQgNARgTAKQghAThCAAQhqAAhEgXgAgzIZIA7APIBZAFQAZACATAEQAKgNANgJQAQgMAbgJIAtgQIAlgQQAXgKAOgFQAhgJAhAFIAJACQACgUAIgZQAThDAggbQAegZAqADIgEgJQgMgdAEgeIAFgZIAHgYQAHguAIgVQAKgaAWgSIABgBQgbgqABhQQABggAEgUQAFgcAMgUIACgCIgCgCQgbgNgQgbQgQgbAAgeQAAgaANgYQgJgHgIgMIgUgfQgVgkgEgLIgDgKQgSgFgRgQIggghIgSgSQgIgJgEgIQgOgDgQgKQgagTgNgIIgbgPQgPgJgHgLIgEgIIgJgDIgWgJQgagDgMgFQgOgFgJgNIgBgBQgSAGgbgBQgZgCgPgIQgOAJgTAAQgSgBgNgLQgFgEgDgFQgJAAgHgDQgIARgNAPQgWAYgeAJQgeAIgfgKQgHAJgKAGQgMAJgPAFQgMAZgXAPQgYARgfABQgQABgOgDQgKANgNAJQgZARgeACQgDANgGANQgMAcgZARQgTANgXAEQAAAXgKAWQgMAdgZARQgIAGgJAEQAEARgBAVQgBAPgFAbQgIAsgKAUQgMAWgUAPIAKAKQAVAZAEAgQACAMgBAOIAAABQACASgDARIABAHQAEAdgNAdQgIARgLANQAUAGARAOQAXASAKAZQAEALAGAXQAFAWAEALQAHAPAbAjQAjAsAMApQAEALABALQAOgCAOABQAfAEAXARQAMAJAfAiQAZAcAVAJQAMAFAUACIAiAFIAIACIAIgGQAYgQAbgDIAJAAQAWAAAeAIg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_10_graphics_2,x:131.6,y:93.6}).wait(1).to({graphics:mask_10_graphics_3,x:133.6,y:94.6}).wait(1).to({graphics:mask_10_graphics_4,x:138.6,y:94.7}).wait(1).to({graphics:mask_10_graphics_5,x:145.1,y:96.6}).wait(1).to({graphics:mask_10_graphics_6,x:150.6,y:100.6}).wait(1).to({graphics:mask_10_graphics_7,x:155.6,y:105.1}).wait(1).to({graphics:mask_10_graphics_8,x:160.6,y:111.2}).wait(1).to({graphics:mask_10_graphics_9,x:165.8,y:118.3}).wait(1).to({graphics:mask_10_graphics_10,x:168,y:131.3}).wait(1).to({graphics:mask_10_graphics_11,x:168,y:143.4}).wait(1).to({graphics:mask_10_graphics_12,x:168,y:154.9}).wait(1).to({graphics:mask_10_graphics_13,x:168,y:161.9}).wait(1).to({graphics:mask_10_graphics_14,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_15,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_16,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_17,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_18,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_19,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_20,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_21,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_22,x:168,y:164}).wait(1).to({graphics:mask_10_graphics_23,x:260.2,y:250}).wait(804));

	// circle center
	this.instance_37 = new lib.circlebasic();
	this.instance_37.parent = this;
	this.instance_37.setTransform(259.3,251,1,1,0,0,0,68,68);
	this.instance_37._off = true;

	var maskedShapeInstanceList = [this.instance_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(2).to({_off:false},0).to({_off:true},202).wait(623));

	// press shad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.078)","rgba(0,0,0,0.157)"],[0.831,1],0,0,0,0,0,69.4).s().p("AngHhQjHjHAAkaQAAkZDHjHQDIjHEYAAQEZAADHDHQDIDHAAEZQAAEajIDHQjHDHkZAAQkYAAjIjHg");
	this.shape_3.setTransform(259.3,251);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(96).to({_off:false},0).to({_off:true},11).wait(720));

	// line animate
	this.instance_38 = new lib.lineanimate();
	this.instance_38.parent = this;
	this.instance_38.setTransform(106.5,453.8);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(32).to({_off:false},0).wait(1).to({regY:231.7,y:669,alpha:0.037},0).wait(1).to({y:652.6,alpha:0.074},0).wait(1).to({y:636.1,alpha:0.111},0).wait(1).to({y:619.7,alpha:0.148},0).wait(1).to({y:603.2,alpha:0.185},0).wait(1).to({y:586.8,alpha:0.222},0).wait(1).to({y:570.3,alpha:0.259},0).wait(1).to({y:553.9,alpha:0.296},0).wait(1).to({y:537.4,alpha:0.333},0).wait(1).to({y:521,alpha:0.37},0).wait(1).to({y:504.6,alpha:0.407},0).wait(1).to({y:488.1,alpha:0.444},0).wait(1).to({y:471.7,alpha:0.481},0).wait(1).to({y:455.2,alpha:0.519},0).wait(1).to({y:438.8,alpha:0.556},0).wait(1).to({y:422.3,alpha:0.593},0).wait(1).to({y:405.9,alpha:0.63},0).wait(1).to({y:389.4,alpha:0.667},0).wait(1).to({y:373,alpha:0.704},0).wait(1).to({y:356.5,alpha:0.741},0).wait(1).to({y:340.1,alpha:0.778},0).wait(1).to({y:323.7,alpha:0.815},0).wait(1).to({y:307.2,alpha:0.852},0).wait(1).to({y:290.8,alpha:0.889},0).wait(1).to({y:274.3,alpha:0.926},0).wait(1).to({y:257.9,alpha:0.963},0).wait(1).to({y:241.4,alpha:1},0).wait(121).to({y:222.9,alpha:0.952},0).wait(1).to({y:204.4,alpha:0.905},0).wait(1).to({y:185.8,alpha:0.857},0).wait(1).to({y:167.2,alpha:0.81},0).wait(1).to({y:148.6,alpha:0.762},0).wait(1).to({y:130.1,alpha:0.714},0).wait(1).to({y:111.5,alpha:0.667},0).wait(1).to({y:92.9,alpha:0.619},0).wait(1).to({y:74.3,alpha:0.571},0).wait(1).to({y:55.8,alpha:0.524},0).wait(1).to({y:37.2,alpha:0.476},0).wait(1).to({y:18.6,alpha:0.429},0).wait(1).to({y:0.1,alpha:0.381},0).wait(1).to({y:-18.5,alpha:0.333},0).wait(1).to({y:-37.1,alpha:0.286},0).wait(1).to({y:-55.6,alpha:0.238},0).wait(1).to({y:-74.2,alpha:0.19},0).wait(1).to({y:-92.8,alpha:0.143},0).wait(1).to({y:-111.4,alpha:0.095},0).wait(1).to({y:-129.9,alpha:0.048},0).wait(1).to({y:-148.5,alpha:0},0).to({_off:true},1).wait(626));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 520,
	height: 500,
	fps: 30,
	color: "#FF1616",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;

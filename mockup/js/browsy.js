// class ~ instance
// superclass ~ ancestor
class RbHNode { // hierarchy node
  constructor(object, instance, ancestor) {
    this.object = object;
    this.instance = instance || null;
    this.ancestor = ancestor || null;
  }
}

class RbHClass extends RbHNode { }
class RbHEigenClass extends RbHNode { }
class RbHModInclusion extends RbHNode { }
class RbHVar extends RbHNode { }

class RbHLink {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}

class RbHInstanceLink extends RbHLink { }
class RbHAncestorLink extends RbHLink { }

var nodes = [];
var links = [];
var vars = [];
var eigens = [];
var instlinks = [];

// Ruby sample hierarchy
var basicObj = new RbHClass("BasicObject", null, null)
var modi1 = new RbHModInclusion("Kernel", null, basicObj);
var object = new RbHClass("Object", null, modi1);
var module = new RbHClass("Module", null, object);
var klass = new RbHClass("Class", null, module);
basicObj.instance = klass;
object.instance = klass;
module.klass = klass;
klass.instance = klass;
nodes.push(basicObj);
nodes.push(modi1);
nodes.push(object);
nodes.push(module);
nodes.push(klass);

// Mini Shop
var ar = new RbHClass("ActiveRecord::Base", klass, object);
nodes.push(ar);

// Accounts
var user = new RbHClass("User", klass, ar);
nodes.push(user);
// Fulfillment
var modi1 = new RbHModInclusion("Itemable", null, ar);
var modi2 = new RbHModInclusion("Quantifiable", null, modi1);
var modi3 = new RbHModInclusion("ItemCombinable", null, modi2);
var modi4 = new RbHModInclusion("Status::Mixin", null, modi3);
var fulfillment = new RbHClass("Fulfillment", klass, modi4);
var onlineFulfillment = new RbHClass("OnlineFulfillment", klass, fulfillment);
var shippingFulfillment = new RbHClass("ShippingFulfillment", klass, fulfillment);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(fulfillment);
nodes.push(onlineFulfillment);
nodes.push(shippingFulfillment);

var modi1 = new RbHModInclusion("Itemable", null, ar);
var modi2 = new RbHModInclusion("Quantifiable", null, modi1);
var modi3 = new RbHModInclusion("ItemCombinable", null, modi2);
var modi4 = new RbHModInclusion("Deletable", null, modi3);
var ownership = new RbHClass("Ownership", klass, modi4);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(ownership);

var modi1 = new RbHModInclusion("Itemable", null, ar);
var modi2 = new RbHModInclusion("Quantifiable", null, modi1);
var modi3 = new RbHModInclusion("ItemCombinable", null, modi2);
var shipment = new RbHClass("Shipment", klass, modi3);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(shipment);
//Inventory
var currency = new RbHClass("Currency", klass, ar);
var price = new RbHClass("Price", klass, ar);
var pricepoint = new RbHClass("Pricepoint", klass, ar);
var pricepointPrice = new RbHClass("PricepointPrice", klass, ar);
var discount = new RbHClass("Discount", klass, ar);
nodes.push(currency);
nodes.push(price);
nodes.push(pricepoint);
nodes.push(pricepointPrice);
nodes.push(discount);

var modi1 = new RbHModInclusion("Deletable", null, ar);
var modi2 = new RbHModInclusion("Displayable", null, modi1);
var modi3 = new RbHModInclusion("Activable", null, modi2);
var modi4 = new RbHModInclusion("Itemable", null, modi3);
var modi5 = new RbHModInclusion("Priceable", null, modi4);
var modi6 = new RbHModInclusion("Fulfillable", null, modi5);
var modi7 = new RbHModInclusion("Orderable", null, modi6);
var promotion = new RbHClass("Promotion", klass, modi7);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(modi5);
nodes.push(modi6);
nodes.push(modi7);
nodes.push(promotion);

var modi1 = new RbHModInclusion("Displayable", null, ar);
var modi2 = new RbHModInclusion("Fulfillable", null, modi1);
var modi3 = new RbHModInclusion("Orderable", null, modi2);
var coupon = new RbHClass("Coupon", null, modi3);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(coupon);

var modi1 = new RbHModInclusion("Deletable", null, ar);
var modi2 = new RbHModInclusion("Activable", null, modi1);
var batch = new RbHClass("Batch", klass, modi2);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(batch);

var modi1 = new RbHModInclusion("Activable", null, ar);
var modi2 = new RbHModInclusion("Deletable", null, modi1);
var modi3 = new RbHModInclusion("Displayable", null, modi2);
var modi4 = new RbHModInclusion("Fulfilable", null, modi3);
var modi5 = new RbHModInclusion("ItemResource", null, modi4);
var modi6 = new RbHModInclusion("Quantifiable", null, modi5);
var physicalItem = new RbHClass("PhysicalItem", klass, modi6);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(modi5);
nodes.push(modi6);
nodes.push(physicalItem);

var modi1 = new RbHModInclusion("Activable", null, ar);
var modi2 = new RbHModInclusion("Deletable", null, modi1);
var modi3 = new RbHModInclusion("Displayable", null, modi2);
var modi4 = new RbHModInclusion("Fulfilable", null, modi3);
var modi5 = new RbHModInclusion("ItemResource", null, modi4);
var digitalItem = new RbHClass("DigitalItem", klass, modi5);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(modi5);
nodes.push(digitalItem);

var modi1 = new RbHModInclusion("Activable", null, ar);
var modi2 = new RbHModInclusion("Deletable", null, modi1);
var modi3 = new RbHModInclusion("Displayable", null, modi2);
var modi4 = new RbHModInclusion("Fulfilable", null, modi3);
var modi5 = new RbHModInclusion("ItemResource", null, modi4);
var bundle = new RbHClass("Bundle", klass, modi5);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(modi5);
nodes.push(bundle);

var modi1 = new RbHModInclusion("Itemable", null, ar);
var modi2 = new RbHModInclusion("Quantifiable", null, modi1);
var modi3 = new RbHModInclusion("ItemCombinable", null, modi2);
var bundled = new RbHClass("Bundled", klass, modi3);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(bundled);

var modi1 = new RbHModInclusion("Deletable", null, ar);
var modi2 = new RbHModInclusion("Displayable", null, modi1);
var modi3 = new RbHModInclusion("Fulfillable", null, modi2);
var modi4 = new RbHModInclusion("Itemable", null, modi3);
var modi5 = new RbHModInclusion("Priceable", null, modi4);
var storeItem = new RbHClass("StoreItem", klass, modi5);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(modi5);
nodes.push(storeItem);

// Shopping
var address = new RbHClass("Address", klass, ar);
var paymentMethod = new RbHClass("PaymentMethod", klass, ar);
nodes.push(address);
nodes.push(paymentMethod);

var modi1 = new RbHModInclusion("Committable", null, ar);
var transaction = new RbHClass("Transaction", klass, modi1);
var paymentTransaction = new RbHClass("PaymentTransaction", klass, transaction);
var refundTransaction = new RbHClass("RefundTransaction", klass, transaction);
nodes.push(modi1);
nodes.push(transaction);
nodes.push(paymentTransaction);
nodes.push(refundTransaction);

var modi1 = new RbHModInclusion("Committable", null, ar);
var purchase = new RbHClass("Purchase", klass, modi1);
nodes.push(modi1);
nodes.push(purchase);

var modi1 = new RbHModInclusion("Itemable", null, ar);
var modi2 = new RbHModInclusion("Quantifiable", null, modi1);
var modi3 = new RbHModInclusion("ItemCombinable", null, modi2);
var modi4 = new RbHModInclusion("Deletable", null, modi3);
var modi5 = new RbHModInclusion("Status::Mixin", null, modi4);
var order = new RbHClass("Order", klass, modi5);
nodes.push(modi1);
nodes.push(modi2);
nodes.push(modi3);
nodes.push(modi4);
nodes.push(modi5);
nodes.push(order);

var eigenclass = new RbHEigenClass("*eigenclass*", klass, physicalItem);
var physItemInst = new RbHVar("physical", eigenclass, null);
eigens.push(eigenclass);
vars.push(physItemInst);
vars.forEach(function(v) {
  instlinks.push(new RbHInstanceLink(v.instance, v));
});
instlinks.push(new RbHAncestorLink(eigenclass.ancestor, eigenclass));

nodes.forEach(function(node) {
  var n = node;
  var cs = nodes.filter(function(k) { return k.ancestor === n; });
  if (cs.length > 0)
    n.children = cs;

  n.id = n.constructor.name + nodes.indexOf(n);
  // if (n.instance)
  //   links.push(new RbHInstanceLink(n.instance, n));
  // while (n) {
  //   if (n.ancestor)
  //     links.push(new RbHAncestorLink(n.ancestor, n));
  //   n = n.ancestor;
  // }
});

function setNodePaths(root) {
  if (root.children) {
    root.paths = root.children.map(function(c) { return c.id; });
    root.children.forEach(function(c) {
      setNodePaths(c);
    });
    root.children.forEach(function(c) {
      if (c.paths)
        root.paths = root.paths.concat(c.paths);
    });
  } else
    return;
}

setNodePaths(basicObj);

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
}

var ndds = nodes;

$(document).ready(function() {
  // setting up dummy console
  var container = $("<div class='console'></div>");
  var terminal = container.console({
    commandValidate: function(line) { return true; },
    commandHandle: function(line) { return "Sorry, not implemented yet!"; },
    promptLabel: '> ',
    autofocus: true,
    animateScroll: true,
    promptHistory: true
  });
  $("div.code").append(container);

  var doc = $("<div class='doc'></div>");
  $("div.code").append(doc);
  ndds.forEach(function(n) {
    doc.append("<div id='"+n.id+"' class='pull-left subdoc' style='background-color:#"+intToRGB(hashCode(n.object))+"'></div>");
  });



  // d3
  var svg = d3.select("div.graph")
    .append("svg")
    .append("g")
    .attr("transform", "translate(50,0)");

  var width = $("svg").width(),
      height = $("svg").height();

  var cluster = d3.layout.cluster()
      .size([height - 100, width - 200]);

  var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

  var nodes = cluster.nodes(basicObj),
      links = cluster.links(nodes);

  links.forEach(function(link) {
    link.paths = []
    link.paths.push(link.target.id);
    link.paths = link.paths.concat(link.target.paths);
  });

  vars.forEach(function(v, i) {
    v.y = height - 20;
    v.x = 50 * i + 25;
  });

  eigens.forEach(function(e, i) {
    e.y = height - 60;
    e.x = 50 * i + 25;
  });



var ilinks = svg.selectAll(".instlink")
      .data(instlinks)
    .enter().append("line")
    .attr("class", "instlink")
    .attr("x1", function(d) { return d.target.x; }).attr("y1", function(d) { return d.target.y; })
    .attr("x2", function(d) {
      if (d.source instanceof RbHClass)
        return d.source.y;
      else
        return d.source.x;
    })
    .attr("y2", function(d) {
      if (d.source instanceof RbHClass)
        return d.source.x;
      else
        return d.source.y
    });

  var insts = svg.selectAll(".var")
      .data(vars)
    .enter().append("g")
    .attr("class", "inst rbHVar")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  insts.append("circle")
    .attr("r", 12);

  insts.append("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "middle")
    .text(function(d) { return d.object; });

  var eigen = svg.selectAll(".eigen")
      .data(eigens)
    .enter().append("g")
    .attr("class", "eigen rbHEigenClass")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .style("visibility", "hidden");

  eigen.append("circle")
    .attr("r", 10);

  eigen.append("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "middle")
    .text(function(d) { return d.object; });

  insts.on("mouseenter", function() {
    d3.selectAll(".eigen")
      .transition()
      .duration(250)
      .style("visibility", "visible");

    d3.selectAll(".instlink")
      .transition()
      .duration(250)
      .style("visibility", "visible");

    var circle = d3.selectAll(".eigen").select("circle");
    circle
      .transition()
      .duration(250)
      .style("fill", circle.style("stroke"));

    var circle = d3.select(this).select("circle");
    circle
      .transition()
      .duration(250)
      .style("fill", circle.style("stroke"));
  });

  insts.on("mouseleave", function() {
     d3.selectAll(".eigen")
      .transition()
      .duration(250)
      .style("visibility", "hidden");

    d3.selectAll(".instlink")
      .transition()
      .duration(250)
      .style("visibility", "hidden");

    var circle = d3.selectAll(".eigen").select("circle");
    circle
      .transition()
      .duration(250)
      .style("fill", "#fff");

    var circle = d3.select(this).select("circle");
    circle
      .transition()
      .duration(250)
      .style("fill", "#fff");
  });



  var link = svg.selectAll(".link")
      .data(links)
    .enter().append("path")
      .attr("class", function(l) { return "link " + l.paths.join(" "); })
      .attr("d", diagonal);

  var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", function(n) {
        var k;
        if (n instanceof RbHClass)
          k = "node rbHClass";
        else if (n instanceof RbHModInclusion)
          k = "node rbHModInclusion";
        else
          k = "node";
        if (n.paths)
          k += " " + n.paths.join(" ");
        return k;
      })
      .attr("id", function(n) { return n.id; })
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

  node.append("circle")
      .attr("r", 10);

  node.append("text")
      .attr("dx", function(d) { return d.children ? 0 : 15; })
      .attr("dy", 3)
      .attr("transform", function(d) { return d.children ? "rotate(-45)" : null; })
      .style("text-anchor", function(d) { return d.children ? "middle" : "start"; })
      .text(function(d) { return d.object; });

  node.on("mouseenter", function() {
    d3.selectAll(".link")
      .transition()
      .duration(250)
      .style("opacity", 0.2);
    d3.selectAll(".node")
      .transition()
      .duration(250)
      .style("opacity", 0.2);
    d3.select(this)
      .transition()
      .duration(250)
      .style("opacity", 1);

    var circle = d3.select(this).select("circle");
    circle
      .transition()
      .duration(250)
      .style("fill", circle.style("stroke"));

    d3.selectAll(".link." + d3.select(this).attr("id"))
      .transition()
      .duration(250)
      .style("opacity", 1)
      .style("stroke", "#b9ca4a")
      .style("stroke-width", "3px");

    var g = d3.selectAll(".node." + d3.select(this).attr("id"))
      .transition()
      .duration(250)
      .style("opacity", 1)

    var circles = g.select("circle")
      .style("fill", function() { return d3.select(this).style("stroke"); });

    d3.selectAll(".subdoc").transition().duration(250).style("display", "none")
    d3.selectAll(".subdoc#" + d3.select(this).attr("id")).transition().duration(250).style("display", "block").style("visibility", "visible");
  });

  node.on("mouseleave", function() {
    d3.selectAll(".link")
      .transition()
      .duration(250)
      .style("opacity", 1)
      .style("stroke", "#ccc")
      .style("stroke-width", "1.5px");
    var g = d3.selectAll(".node")
      .transition()
      .duration(250)
      .style("opacity", 1);

    var circle = d3.select(this).select("circle");
    circle
      .transition()
      .duration(250)
      .style("fill", "#fff");

    var circles = d3.selectAll(".node." + d3.select(this).attr("id"))
      .select("circle")
      .transition()
      .duration(250)
      .style("fill", "#fff");

    d3.selectAll(".subdoc").transition().duration(250)
    .style("display", "none")
    .style("visibility", "hidden");
  });
});

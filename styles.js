var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "height" : 20.0,
      "width" : 20.0,
      "shape" : "ellipse",
      "text-valign" : "center",
      "text-halign" : "center",
      "border-width" : 1.0,
      "background-opacity" : 0.0784313725490196,
      "background-color" : "rgb(0,0,0)",
      "font-size" : 12,
      "border-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "border-color" : "rgb(0,102,102)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[Degree > 39]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[Degree = 39]",
    "css" : {
      "font-size" : 54
    }
  }, {
    "selector" : "node[Degree > 0][Degree < 39]",
    "css" : {
      "font-size" : "mapData(Degree,0,39,15,54)"
    }
  }, {
    "selector" : "node[Degree = 0]",
    "css" : {
      "font-size" : 15
    }
  }, {
    "selector" : "node[Degree < 0]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[Book = 'Book']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[Book = 'Publisher']",
    "css" : {
      "background-color" : "rgb(102,102,102)"
    }
  }, {
    "selector" : "node[Book = 'Book']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[Book = 'Publisher']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[Book = 'Book']",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node[Book = 'Publisher']",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node[ id = '545' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '578' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '547' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '579' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '548' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '612' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '581' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '550' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '582' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '583' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '585' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '617' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '554' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '618' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '619' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '620' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '557' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '589' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '591' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '624' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '593' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '625' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '626' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '563' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '627' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '628' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '629' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '566' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '631' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '568' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '600' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '632' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '601' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '538' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '603' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '635' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '540' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '637' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '638' ]",
    "css" : { }
  }, {
    "selector" : "node[ id = '575' ]",
    "css" : { }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(64,64,64)",
      "line-style" : "solid",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(64,64,64)",
      "source-arrow-shape" : "none",
      "width" : 1.0,
      "line-color" : "rgb(64,64,64)",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "opacity" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_NONCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_OTHER']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'cofactor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'right']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'controlled']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'contains']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_IRREVERSIBLE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_COMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_NONALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[ id = '833' ]",
    "css" : { }
  }, {
    "selector" : "edge[ id = '834' ]",
    "css" : { }
  }, {
    "selector" : "edge[ id = '815' ]",
    "css" : { }
  }, {
    "selector" : "edge[ id = '789' ]",
    "css" : { }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]
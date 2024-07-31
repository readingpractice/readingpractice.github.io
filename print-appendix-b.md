---
layout: page
title: Network Analysis
permalink: /print-appendix-b/
---

Before the incorporation of the Stationers' Company in 1557, English printers very often published
editions of the same practical texts and competed with one another in the very crowded London print market.
As I show in _Reading Practice_, these practical books were often sourced from fifteenth-century manuscripts sources,
which contained medical recipes, herbals, texts on
phlebotomy, on uroscopy, on agriculture, and on animal husbandry that were subsequently printed in
vernacular editions. By and large, for the first six decades of English print, London publishers
very rarely commissioned _new_ practical texts for publication. They simply reproduced editions of 
texts that were already enormously popular in manuscript. Before the creation of the Stationers' Register, there was little to stop an English printer from reproducing his own copy of a rival's 
medical recipe collection. As a result, the English print market was cluttered with competing editions of the _same_ practical texts.
Yet every printer needed readers to purchase _their_ edition over that of their rival if they wanted to 
stay in business. 
<br>
<br>
When I realized that so many early editions of practical books were reprints of older texts from
manuscript sources, which were then reissued in multiple editions, it became clear to me that I could
only understand the densely interconnected market for practical books if I plotted these editions and their 
publishers in a network. To do so, I used the publication data I had compiled from the [_English Short Title Catalogue_](https://estc.bl.uk),
viewable and downloadable as [Print Appendix A](/print-appendix-a), which I then
cleaned and standardized using [OpenRefine](https://openrefine.org). Because early modern printers so often 
retitled subsequent editions of the same texts, and because spelling conventions were so inconsistent in the 
sixteenth century, I used the assigned STC number for every edition to establish standard titles 
for all editions of the same text. Only then would it be possible to see how many editions of the 
same practical texts were published over the period from 1485 to 1550. 
<br>
<br>
The dataset with these standardized titles is available for download as a .csv file [here](https://doi.org/10.5281/zenodo.11122956). 

#### Printers and Editions of Practical Books, 1485–1550

    
<html class="no-js">
	<meta charset="utf-8">
        <meta name="description" content="Single network exported from Cytoscape 3.8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!--[if lt IE 10]>
            <p class="browsehappy">
                You are using an <strong>ancient</strong> browser.
                Please <a href="http://browsehappy.com/">upgrade your browser
                </a> to improve your experience.
            </p>
        <![endif]-->

        <!-- Actual Cytoscape.js Instance -->
        <div id="cy"></div>
        
        <script src="{{ site.baseurl }}/networks.js"></script>
        <script src="{{ site.baseurl }}/styles.js"></script>

        <script src="{{ site.baseurl }}/scripts/vendor.js"></script>
        <script src="{{ site.baseurl }}/scripts/main.js"></script>
        <script src="{{ site.baseurl }}/scripts/custom.js"></script>
</html>
 <br>
   This network analysis was produced using Cytoscape (version 3.8.2), an open source 
   software platform for visualizing complex networks. For more information about Cytoscape
   please visit [Cytoscape.org](https://cytoscape.org).
   
#### Interpreting the Network Analysis 
In the network visualization above, we see 149 editions of practical books, which represent just 49 unique texts. 
Each of those 49 unique texts appears as one node within the network diagram (in blue), just as every 
English printer is represented by a single node (in black). In addition, both printers’ names and the titles of 
books have been sized relative to their frequency in the network. So, for example, in the interactive visualization
below, you can see that Richard Banckes’s very popular herbal (represented in this figure as 
_A boke of the properties of herbes the which is called an herbal_) and the medical recipe collection 
_Treasure of pore men_ were central to the economy of practical knowledge exchange in sixteenth-century England, 
given that their titles appear larger than others in the network. But, Richard Banckes’s name is small in this 
network, because he only produced just four editions of practical books. 
<br>
<br>
In addition to the relative sizes of nodes within the diagram, lines connecting printers and 
book titles represent a single edition of that book. For example, at the bottom left of the network 
diagram, the two lines connecting Reynolde Wolde to _The urinal of phyisick_
indicate that Wolfe printed two editions of the text over the course of his career. 
Really popular titles like _This is the myrour or glasse of helth_ have multiple lines
connecting the title to multiple printers, indicating that the work went through several
editions from multiple printing houses. The title _This is the myrour or glasse of helth_ is
larger than that of _This lytell boke contaynethe certayne gostly medycynes_ because it was 
issued more than a dozen times before 1550, whereas _This lytell boke_ was issued only once.
<br>
<br>
You can explore the network analysis by clicking on individual nodes or edges, or even rearranging the nodes in the network to get a better sense of how 
London printers competed over the same practical texts. Use two fingers to zoom in and out (you'll zoom in
wherever the mouse cursor is located in the network) and click and drag individual dones to move them in the network.
<br>
<br>
<hr>
| Appendix A | Appendix B | Appendix C |
| :---- | :----: | ---: |
| [Bibliographic Data](/print-appendix-a) | [Network Analysis](/print-appendix-b/) | [Graphs & Gantt Plots](/print-appendix-c/) |


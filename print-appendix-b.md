---
layout: page
title: Print Appendix B
permalink: /print-appendix-b/
---

### Network Analysis of Printers and Editions of Practical Books, 1485–1550

This network analysis is intended to show the relationship between printers who published many of the same
practical texts in competing editions between 1485 and 1560, roughly the period of English printing
before the incorporation of the Stationer's Company. The data I collected from the [English Short Title Catalogue](https://estc.bl.uk)
is accessible in [Appendix A]({{ site.baseurl }}/print-appendix-a/). Because early modern printers so often retitled subsequent editions of the same texts, and 
because spelling conventions were so inconsistent in the 
sixteenth century, I used the assigned STC numbers in the _ESTC_ to establish standard titles 
for all editions of the same text so that it would be possible to see how many editions of the 
same practical texts were published over the period from 1485 to 1550. A CSV file with
these standardized titles can also be downloaded [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vTCv6EiFo5wd_N0MBuJH2ymK_xticVm3k2-4ZgccZTCeA9v-yTA2kEE3ff9ER_4xbkwIkSrt4IoX0dk/pub?output=csv).
The network analysis below was created using these standardized titles.
<br>
<br>
In the network visualization below, we see 151 editions of practical books, which represent just 49 unique texts. 
Each of those 49 unique texts appears as one node within the network diagram (a white diamond), just as every 
English printer is represented by a single node (a circle). In addition, both printers’ names and the titles of 
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
diagram, the two lines connecting Wynkyn de Worde to _Here begynneth a litill boke necessarye & behouefull agenst the pestilence_
indicate that De Worde printed two editions of the text over the course of his career. 
The three lines connecting the same title to William Machlinia illustrate that he, too, printed the 
text three times. The printers are connected to one another by their shared publication of the plague treatise, 
but De Worde’s name is far larger than Machlinia’s because he printed many more practical books in total.
<br>
<br>
You can explore the network analysis by clicking on individual nodes or edges, or even rearranging the nodes in the network to get a better sense of how 
London printers competed over the same practical texts. Use two fingers to zoom in and out (you'll zoom in
wherever the mouse cursor is located in the network) and click and drag individual dones to move them in the network.

<br>
<br>
    
<html class="no-js">
	<meta charset="utf-8">
        <meta name="description" content="Single network exported from Cytoscape 3.3">
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


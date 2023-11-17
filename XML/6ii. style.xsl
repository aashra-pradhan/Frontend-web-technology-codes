<?xml version = "1.0" encoding="utf-8"?>
<!-- yo first line xsl ma ni rakhnuparcha -->
<!-- xml files sab internet explorer bata khola hai, aru browser le support nagarna sakcha -->

<!-- yo tala ko statement ditto same lekhnuparcha to link to xsl spreadsheet -->
<!-- stylesheet is tag name so you can change that, xmlns rakhera namespace use gare ho,
 xsl ko satta abcd j lekhe ni ok, uri chai kanthai garera jau exam ma, 
 that is valid uri of xsl -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <!-- aba sabai kura ma namespace use garcham, template is inbuilt, bhayebharko sab kamtemplate bhitra garcham, match=/ bhane chai aba hamikaamchai root element bata startgarna lako bhaneko i.e.,<personinfo> -->
    <!-- aba esbhitra  html code lekhna sakcham-->
    <html>
        <head>
            <title>Stylesheet</title>
        </head>
        <body>
        
            <xsl:value-of select="personInfo/user/fname" />
        <!-- aba etti garesi Ram bhanera print garnuparyo, select ma chai path dine ho, upperlowercase be careful,it's case sensitive -->
            <xsl:value-of select="personInfo/user/lname" />

            <!-- aba second third data ni lina loop chalaunuparcha -->
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>

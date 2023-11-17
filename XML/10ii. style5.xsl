<!-- for sorting -->

<?xml version = "1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    
    <html>
        <head>
            <title>Stylesheet</title>
            <style> 
                table{
                    width:800px;
                    border:2px solid black;
                }
                td{
                    border:2px solid black;
                }   
                th{
                    border:2px solid black;
                } 
            </style>
        </head>
        <body>
            <table>
                <tr>
                    <th>id</th>
                    <th>fname</th>
                    <th>lname</th>
                    <th>age</th>
                </tr>
                <xsl:for-each select="personInfo/user">
                    <xsl:if test="age &lt; 30">
                    <!-- jasko age 30 bhanda kamcha, tyo display garna khojeko(lt means less than) -->
                    <!-- XSLT <choose> is like switch case,it also is a conditional statement,,check it in w3schools and make a file, do it. -->
                <tr>
                    <td><xsl:value-of select="@id" /></td>
                    <!--mathi path diysake bhayera eta full path dinuparena  -->
                    <td><xsl:value-of select="fname" /></td>
                    <td><xsl:value-of select="lname" /></td>
                    <td><xsl:value-of select="age" /></td>
                </tr>
                </xsl:if> 
                <!-- if lai ni close garnuparyo -->
                </xsl:for-each>
                <!-- yo chai loop lai close gareko -->
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>

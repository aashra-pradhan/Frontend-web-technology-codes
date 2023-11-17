<?xml version = "1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    
    <html>
        <head>
            <title>Stylesheet</title>
            <!-- esari css ni rakhna milcha -->
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
        <!-- suppose i wanna store data in table -->
        <table>
            <tr>
                <th>id</th>
                <th>fname</th>
                <th>lname</th>
                <th>address</th>
            </tr>
            <tr>
                <td><xsl:value-of select="personInfo/user/@id" /></td> 
                <!-- attribute lai @ rakhera lekhnuparcha -->
                <td><xsl:value-of select="personInfo/user/fname" /></td>
                <td><xsl:value-of select="personInfo/user/lname" /></td>
                <td><xsl:value-of select="personInfo/user/address" /></td>
            </tr>
        </table>

        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>

<!-- j kholyo, tyo close ni garnuparcha hai remember, it is strict -->
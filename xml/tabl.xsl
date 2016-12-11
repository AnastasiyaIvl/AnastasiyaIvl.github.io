<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
<style>
BODY
{
background: url("1.jpg");
}
H2{color:#FFFFF0;}
</style>
  
<body >
<h2 align="center" >Список студентов клуба «Единение».
</h2>
  <table border="2" style="margin:0 auto">
  <tr bgcolor="4682B4">
  	<th>№</th>
        <th>ФИО</th>
        <th>№ комнаты</th>
	<th>Факультет,курс,группа</th>
  </tr>
  
   <xsl:for-each select="tabl/unity">
   	<tr bgcolor="#ADD8E6">
   	<th><xsl:value-of select="number"/></th>
  	 <td><xsl:value-of select="name"/></td>
    	<td><xsl:value-of select="block"/></td>
	<td><xsl:value-of select="kurs"/></td>
       
	 </tr>
	 </xsl:for-each>
	 </table>
	 </body>
	 </html>
	 </xsl:template></xsl:stylesheet>
	 
   
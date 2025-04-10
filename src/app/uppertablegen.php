<html>
<?php

//TODO

//Each color can only be chosen once (remove from dropdown somehow?)
//onclick event? jquery??
//Integrate into html

function validateColorSelection(){

}

function generateUpperTable($colors, $maxWidth){
    
    //get table into 20% 80% columns
    $tablebase = "<table>\n<colgroup>\n";
    $colStyling = "<col style=\"width:";
    
    $tablebase = $tablebase . $colStyling;
    $tablebase = $tablebase . (string)($maxWidth * .2) . "px\">";
    $tablebase = $tablebase . $colStyling;
    $tablebase = $tablebase . (string)($maxWidth * .8) . "px\">";

    //get one td per color
    $colorsStartRow = "<tr>\n";
    $colorsStartDataEntry = "<td>\n";
    $colorsEndDataEntry = "</td>\n";
    $colorsEndRow = "</tr>\n";

    $colorsRadio = "<input type=\"radio\" id=\"selection\"name=\"rowSelection\" value=\"Selected\">\n";
    $colorsRadioLabel = "<label for=\"selection\">Select Row</label><br>\n";

    $colorsDropdownLabel = "<label for=\"selectColor\">Choose a color:</label>\n";
    $colorsSelectStart = "<select name=\"selectColor\" id=\"selectColor\">\n";
    $colorsSelectEnd = "</select>";
    
    $colorsList = array(
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Teal",
        "Blue",
        "Purple",
        "Grey",
        "Brown",
        "Black");

    $defaultColorLocation = 0; //loop variable for unique option selection
    $initialColorAmount = $colors; //does an option need to be disabled?
    

    while ($colors > 0){
        $tablebase = $tablebase . $colorsStartRow . $colorsStartDataEntry;
        //add radio buttons
        $tablebase = $tablebase . $colorsRadio . $colorsRadioLabel;
        //add color dropdown
        $tablebase = $tablebase . $colorsDropdownLabel . $colorsSelectStart;

        
        //add color dropdown 
        foreach($colorsList as $currColor){
            if($currColor === $colorsList[$defaultColorLocation]){
                //select unique option for each button, and add to list
                $tablebase = $tablebase . '<option value="' . $currColor . '" selected>' . $currColor;
            }

            else{
                //does a value need to be disabled to start with?
                
                //disable the color if it's selected by default for another option
                //get current location of color
                $key = 0;
                foreach($colorsList as $colorOption){
                    if($currColor === $colorOption){
                        break;
                    }
                    else {$key++;}
                }

                if($key < $initialColorAmount){
                    $tablebase = $tablebase . '<option value="' . $currColor . '"disabled>' . $currColor;
                }
                
                else{
                    $tablebase = $tablebase . '<option value="' . $currColor . '">' . $currColor;}
                }
            
        }

        $tablebase = $tablebase . $colorsSelectEnd;

        //end Radio + Color data entry
        $tablebase = $tablebase . $colorsEndDataEntry;
        
        //end row
        $tablebase = $tablebase . $colorsEndRow;
        
        //iterate loops
        $colors -= 1;
        $defaultColorLocation += 1;
    }
    //echo the Whole Table
    echo $tablebase;
}



?>

</html>
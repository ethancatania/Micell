package com.seating.host.Model;

import java.util.ArrayList;
/*
 * COLLECTION OF TABLES SHOULD BE ACCESIBLE TO HOST TO KEEP TRACK OF NUMBERS
 */
public class Section{
    int sectNum;
    int numTables; 
    ArrayList<Table> tables;
    String server;

    public Section(int sectNum, int numTables, ArrayList<Table> tables, String server){
        this.sectNum = sectNum;
        this.numTables = numTables;
        this.tables = tables;
        this.server = server;
    }

    public int getSectNum(){
        return this.sectNum;
    }

    public int getNumTables(){
        return this.numTables;
    }
    public void setSectNum(int n){
        this.sectNum = n;
    }

    public void setNumTables(int n){
        this.numTables = n;
    }

    public ArrayList<Table> getTables(){
        return this.tables;
    }
    
    public String getServer(){
        return this.server;
    }


}
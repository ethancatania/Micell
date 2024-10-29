package com.seating.host.Model;
/* 
 * TABLE ENTITY 
 * SHOULD BE ACCESIBLE BY HOST TO BE SET AND COMBINED
 * I PROB WANT TO CHANGE TO STRING METHOD... 
 */
public class Table{
    int tableNum;
    String status;
    int numSeats;

    public Table(int tableNum, String status, int numSeats){
        this.tableNum = tableNum;
        this.status = status;
        this.numSeats = numSeats;
    }

    public void setStatus(String s){
        status = s;
    }

    public String getStatus(){
        return status;
    }

    public void setTableNum(int n){
        tableNum = n;
    }

    public int getTableNum(){
        return tableNum;
    }

    public int getNumSeats(){
        return numSeats;
    }

    public void setNumSeats(int n){
        numSeats = n;
    }

    public String toString(){
        return  "This is Table: " + tableNum + ". It has " + numSeats + " seats and is currently " + status + ".";
    }

}
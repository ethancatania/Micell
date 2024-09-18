public class Table{
    int tableNum;
    String status;
    int numSeats;

    public Table(int tableNum, String status){
        this.tableNum = tableNum;
        this.status = status;
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

}
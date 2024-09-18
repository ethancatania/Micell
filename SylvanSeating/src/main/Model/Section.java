import java.util.ArrayList;
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

}
package com.seating.host.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.seating.host.Model.Table;
import com.seating.host.Util.ConnectionUtil;

/*
 * RESPONSIBLE FOR INTERACTING WITH TABLES DATABASE 
 */
public class TableDAO {
    public static void setupTables() {
        // I DONT LIKE THIS...
        String setupSQL = "DROP TABLE IF EXISTS Tables;" +
                          "CREATE TABLE Tables (" +
                          "pk_table_num INT PRIMARY KEY, " +
                          "status VARCHAR(255) NOT NULL, " +
                          "num_seats INT NOT NULL);" +
                          "INSERT INTO Tables (pk_table_num, status, num_seats) VALUES" +
                          "(201, 'R', 4), (202, 'R', 4), (203, 'R', 4), (204, 'R', 4), (205, 'R', 4)," +
                          "(206, 'R', 4), (207, 'R', 4), (208, 'R', 5), (209, 'R', 4), (210, 'R', 4)," +
                          "(211, 'R', 4), (212, 'R', 4), (213, 'R', 4), (214, 'R', 6), (215, 'R', 4)," +
                          "(216, 'R', 4), (217, 'R', 4), (218, 'R', 4), (219, 'R', 4), (220, 'R', 4)," +
                          "(221, 'R', 4), (222, 'R', 4), (223, 'R', 4), (224, 'R', 6), (225, 'R', 6)," +
                          "(226, 'R', 4), (227, 'R', 4), (228, 'R', 4), (229, 'R', 6), (230, 'R', 4)," +
                          "(231, 'R', 6), (232, 'R', 4), (233, 'R', 4), (234, 'R', 4), (235, 'R', 4)," +
                          "(236, 'R', 4), (237, 'R', 6), (238, 'R', 6), (239, 'R', 4);";

        try {
            Connection conn = ConnectionUtil.getConnection();
            PreparedStatement stmt = conn.prepareStatement(setupSQL);
            stmt.executeUpdate();
            System.out.println("Tables created and data inserted successfully.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static List<Table> getAllTables(){
        Connection conn = ConnectionUtil.getConnection();
        ArrayList<Table> tables = new ArrayList<>();
        try{
            String sql = "SELECT * FROM Tables;";
            PreparedStatement stmnt = conn.prepareStatement(sql);
            ResultSet rs = stmnt.executeQuery(); 
            while(rs.next()){
                Table table = new Table(rs.getInt("pk_table_num"),  rs.getString("status"), rs.getInt("num_seats"));

                tables.add(table);
            }

        } catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return tables;
    }

    public static List<Table> getOpenTables(){
        Connection conn = ConnectionUtil.getConnection();
        ArrayList<Table> tables = new ArrayList<>();
        try{
            String sql = "SELECT * FROM Tables WHERE status = 'R';";
            PreparedStatement stmnt = conn.prepareStatement(sql);
            ResultSet rs = stmnt.executeQuery(); 
            while(rs.next()){
                Table table = new Table(rs.getInt("pk_table_num"),  rs.getString("status"), rs.getInt("num_seats"));

                tables.add(table);
            }

        } catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return tables;
    }

    public static Table setTableTo(int tableNum , String newStatus){
        Connection conn = ConnectionUtil.getConnection();
        try{
            String sql = "Update Tables Set status = ? WHERE pk_table_num = ?;";
            PreparedStatement stmnt = conn.prepareStatement(sql);
            stmnt.setString(1, newStatus);
            stmnt.setInt(2, tableNum);
            int rs = stmnt.executeUpdate(); 
            if(rs > 0){
                return new Table(tableNum,  newStatus, getNumSeats(tableNum));
            }
        } catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public static int getNumSeats(int tableNum){
        Connection conn = ConnectionUtil.getConnection();
        try{
            String sql = "Select num_seats From Tables WHERE pk_table_num = ?;";
            PreparedStatement stmnt = conn.prepareStatement(sql);
            stmnt.setInt(1, tableNum);
            ResultSet rs = stmnt.executeQuery(); 
            if(rs.next()){
                return rs.getInt("num_seats");
            }
        } catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return 0;
    }
}
package com.seating.host.Util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/*
 * CLASS TO CONNECT TO LOCAL DATABASE AND A METHOD TO TEST THE CONNECTION 
 */
public class ConnectionUtil{

    private static final String URL = "jdbc:h2:./h2/db";
    private static final String USER = "sa";
    private static final String PASSWORD = "";
    public ConnectionUtil(){
    }

    public static Connection getConnection() { 
        Connection connection = null; 
        try {
            Class.forName("org.h2.Driver");
             connection = DriverManager.getConnection(URL, USER, PASSWORD); 
    } catch (ClassNotFoundException | SQLException e) {
        } 
        return connection;
    }

    public static void TestConnection(){
        try {
            Class.forName("org.h2.Driver");
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            if (conn != null) {
                System.out.println("Connected to the database!");
            } else {
                System.out.println("Failed to connect to the database.");
            }
        } catch (ClassNotFoundException | SQLException e) {
        }
    }
    

}
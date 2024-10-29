package com.seating.host;

import com.seating.host.DAO.TableDAO;
import com.seating.host.Util.ConnectionUtil;

/**
 * ESSENTIALLY TEST CLASS UNTIL WORKING UI AND TEST CASES ADDED 
 * @author ethan
 */
public class app {
    static TableDAO tableDAO;
    private static final String OPEN = "OPEN";
    private static final String CHECK = "PAYING";
    private static final String BUS = "BUS";
    private static final String OCC = "OCCUPIED";

    public static void main(String[] args) {
        TableDAO.setupTables();
        ConnectionUtil.TestConnection();
        System.out.println(TableDAO.setTableTo(201, CHECK));
        System.out.println(TableDAO.setTableTo(201, OCC));
        System.out.println(TableDAO.setTableTo(201, BUS));
        System.out.println(TableDAO.setTableTo(201, OPEN));






        

    }
}

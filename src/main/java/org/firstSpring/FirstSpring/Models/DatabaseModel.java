package org.firstSpring.FirstSpring.Models;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseModel {
    private static final String DRIVER = "org.mariadb.jdbc.Driver";
    private static final String URL = "jdbc:mariadb://localhost:3306/kms";
    private static final String USER = "root";
    private static final String PW = "";

    public void testConnection() throws Exception {
        Class.forName(DRIVER);
        try (Connection con = DriverManager.getConnection(URL, USER, PW)){
            System.out.println(con);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

   // public void
}

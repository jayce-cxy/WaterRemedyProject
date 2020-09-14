
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/12/2020 23:02:55
-- Generated from EDMX file: D:\IEProject\WaterRemedyProject\WaterRemedy\WaterRemedy\Models\waterremedyModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [waterremedy_db];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_BathroomBathproduct]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[BathproductSet] DROP CONSTRAINT [FK_BathroomBathproduct];
GO
IF OBJECT_ID(N'[dbo].[FK_BathproductBathalternative]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[BathalternativeSet] DROP CONSTRAINT [FK_BathproductBathalternative];
GO
IF OBJECT_ID(N'[dbo].[FK_KitchenKitproduct]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KitproductSet] DROP CONSTRAINT [FK_KitchenKitproduct];
GO
IF OBJECT_ID(N'[dbo].[FK_KitproductKitalternative]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[KitalternativeSet] DROP CONSTRAINT [FK_KitproductKitalternative];
GO
IF OBJECT_ID(N'[dbo].[FK_LaundryLaunproduct]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[LaunproductSet] DROP CONSTRAINT [FK_LaundryLaunproduct];
GO
IF OBJECT_ID(N'[dbo].[FK_LaunproductLaunalternative]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[LaunalternativeSet] DROP CONSTRAINT [FK_LaunproductLaunalternative];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[UserSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserSet];
GO
IF OBJECT_ID(N'[dbo].[BathroomSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BathroomSet];
GO
IF OBJECT_ID(N'[dbo].[BathproductSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BathproductSet];
GO
IF OBJECT_ID(N'[dbo].[BathalternativeSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BathalternativeSet];
GO
IF OBJECT_ID(N'[dbo].[KitchenSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KitchenSet];
GO
IF OBJECT_ID(N'[dbo].[KitproductSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KitproductSet];
GO
IF OBJECT_ID(N'[dbo].[KitalternativeSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[KitalternativeSet];
GO
IF OBJECT_ID(N'[dbo].[LaundrySet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[LaundrySet];
GO
IF OBJECT_ID(N'[dbo].[LaunproductSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[LaunproductSet];
GO
IF OBJECT_ID(N'[dbo].[LaunalternativeSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[LaunalternativeSet];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'UserSet'
CREATE TABLE [dbo].[UserSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [username] nvarchar(max)  NOT NULL,
    [password] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'BathroomSet'
CREATE TABLE [dbo].[BathroomSet] (
    [bath_id] int IDENTITY(1,1) NOT NULL,
    [chemical_name] nvarchar(max)  NOT NULL,
    [harm] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'BathproductSet'
CREATE TABLE [dbo].[BathproductSet] (
    [ba_product_id] int IDENTITY(1,1) NOT NULL,
    [chemical] nvarchar(max)  NOT NULL,
    [Bathroom_bath_id] int  NOT NULL
);
GO

-- Creating table 'BathalternativeSet'
CREATE TABLE [dbo].[BathalternativeSet] (
    [alter_id] int IDENTITY(1,1) NOT NULL,
    [name] nvarchar(max)  NOT NULL,
    [Bathproduct_ba_product_id] int  NOT NULL
);
GO

-- Creating table 'KitchenSet'
CREATE TABLE [dbo].[KitchenSet] (
    [kitchen_id] int IDENTITY(1,1) NOT NULL,
    [chemical_name] nvarchar(max)  NOT NULL,
    [harm] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'KitproductSet'
CREATE TABLE [dbo].[KitproductSet] (
    [kit_product_id] int IDENTITY(1,1) NOT NULL,
    [chemical] nvarchar(max)  NOT NULL,
    [Kitchen_kitchen_id] int  NOT NULL
);
GO

-- Creating table 'KitalternativeSet'
CREATE TABLE [dbo].[KitalternativeSet] (
    [alter_id] int IDENTITY(1,1) NOT NULL,
    [Kitproduct_kit_product_id] int  NOT NULL,
    [name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'LaundrySet'
CREATE TABLE [dbo].[LaundrySet] (
    [laun_id] int IDENTITY(1,1) NOT NULL,
    [chemical_name] nvarchar(max)  NOT NULL,
    [harm] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'LaunproductSet'
CREATE TABLE [dbo].[LaunproductSet] (
    [laun_id] int IDENTITY(1,1) NOT NULL,
    [chemical] nvarchar(max)  NOT NULL,
    [Laundry_laun_id] int  NOT NULL
);
GO

-- Creating table 'LaunalternativeSet'
CREATE TABLE [dbo].[LaunalternativeSet] (
    [alter_id] int IDENTITY(1,1) NOT NULL,
    [name] nvarchar(max)  NOT NULL,
    [Launproduct_laun_id] int  NOT NULL
);
GO

-- Creating table 'RainfallSet'
CREATE TABLE [dbo].[RainfallSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [month] nvarchar(max)  NOT NULL,
    [rainfall_day] float  NOT NULL,
    [rainfall_month] float  NOT NULL,
    [possibility] float  NOT NULL,
    [storage_month] float  NOT NULL,
    [indoor_req] float  NOT NULL,
    [outdoor_req] float  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'UserSet'
ALTER TABLE [dbo].[UserSet]
ADD CONSTRAINT [PK_UserSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [bath_id] in table 'BathroomSet'
ALTER TABLE [dbo].[BathroomSet]
ADD CONSTRAINT [PK_BathroomSet]
    PRIMARY KEY CLUSTERED ([bath_id] ASC);
GO

-- Creating primary key on [ba_product_id] in table 'BathproductSet'
ALTER TABLE [dbo].[BathproductSet]
ADD CONSTRAINT [PK_BathproductSet]
    PRIMARY KEY CLUSTERED ([ba_product_id] ASC);
GO

-- Creating primary key on [alter_id] in table 'BathalternativeSet'
ALTER TABLE [dbo].[BathalternativeSet]
ADD CONSTRAINT [PK_BathalternativeSet]
    PRIMARY KEY CLUSTERED ([alter_id] ASC);
GO

-- Creating primary key on [kitchen_id] in table 'KitchenSet'
ALTER TABLE [dbo].[KitchenSet]
ADD CONSTRAINT [PK_KitchenSet]
    PRIMARY KEY CLUSTERED ([kitchen_id] ASC);
GO

-- Creating primary key on [kit_product_id] in table 'KitproductSet'
ALTER TABLE [dbo].[KitproductSet]
ADD CONSTRAINT [PK_KitproductSet]
    PRIMARY KEY CLUSTERED ([kit_product_id] ASC);
GO

-- Creating primary key on [alter_id] in table 'KitalternativeSet'
ALTER TABLE [dbo].[KitalternativeSet]
ADD CONSTRAINT [PK_KitalternativeSet]
    PRIMARY KEY CLUSTERED ([alter_id] ASC);
GO

-- Creating primary key on [laun_id] in table 'LaundrySet'
ALTER TABLE [dbo].[LaundrySet]
ADD CONSTRAINT [PK_LaundrySet]
    PRIMARY KEY CLUSTERED ([laun_id] ASC);
GO

-- Creating primary key on [laun_id] in table 'LaunproductSet'
ALTER TABLE [dbo].[LaunproductSet]
ADD CONSTRAINT [PK_LaunproductSet]
    PRIMARY KEY CLUSTERED ([laun_id] ASC);
GO

-- Creating primary key on [alter_id] in table 'LaunalternativeSet'
ALTER TABLE [dbo].[LaunalternativeSet]
ADD CONSTRAINT [PK_LaunalternativeSet]
    PRIMARY KEY CLUSTERED ([alter_id] ASC);
GO

-- Creating primary key on [Id] in table 'RainfallSet'
ALTER TABLE [dbo].[RainfallSet]
ADD CONSTRAINT [PK_RainfallSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Bathroom_bath_id] in table 'BathproductSet'
ALTER TABLE [dbo].[BathproductSet]
ADD CONSTRAINT [FK_BathroomBathproduct]
    FOREIGN KEY ([Bathroom_bath_id])
    REFERENCES [dbo].[BathroomSet]
        ([bath_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_BathroomBathproduct'
CREATE INDEX [IX_FK_BathroomBathproduct]
ON [dbo].[BathproductSet]
    ([Bathroom_bath_id]);
GO

-- Creating foreign key on [Bathproduct_ba_product_id] in table 'BathalternativeSet'
ALTER TABLE [dbo].[BathalternativeSet]
ADD CONSTRAINT [FK_BathproductBathalternative]
    FOREIGN KEY ([Bathproduct_ba_product_id])
    REFERENCES [dbo].[BathproductSet]
        ([ba_product_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_BathproductBathalternative'
CREATE INDEX [IX_FK_BathproductBathalternative]
ON [dbo].[BathalternativeSet]
    ([Bathproduct_ba_product_id]);
GO

-- Creating foreign key on [Kitchen_kitchen_id] in table 'KitproductSet'
ALTER TABLE [dbo].[KitproductSet]
ADD CONSTRAINT [FK_KitchenKitproduct]
    FOREIGN KEY ([Kitchen_kitchen_id])
    REFERENCES [dbo].[KitchenSet]
        ([kitchen_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_KitchenKitproduct'
CREATE INDEX [IX_FK_KitchenKitproduct]
ON [dbo].[KitproductSet]
    ([Kitchen_kitchen_id]);
GO

-- Creating foreign key on [Kitproduct_kit_product_id] in table 'KitalternativeSet'
ALTER TABLE [dbo].[KitalternativeSet]
ADD CONSTRAINT [FK_KitproductKitalternative]
    FOREIGN KEY ([Kitproduct_kit_product_id])
    REFERENCES [dbo].[KitproductSet]
        ([kit_product_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_KitproductKitalternative'
CREATE INDEX [IX_FK_KitproductKitalternative]
ON [dbo].[KitalternativeSet]
    ([Kitproduct_kit_product_id]);
GO

-- Creating foreign key on [Laundry_laun_id] in table 'LaunproductSet'
ALTER TABLE [dbo].[LaunproductSet]
ADD CONSTRAINT [FK_LaundryLaunproduct]
    FOREIGN KEY ([Laundry_laun_id])
    REFERENCES [dbo].[LaundrySet]
        ([laun_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_LaundryLaunproduct'
CREATE INDEX [IX_FK_LaundryLaunproduct]
ON [dbo].[LaunproductSet]
    ([Laundry_laun_id]);
GO

-- Creating foreign key on [Launproduct_laun_id] in table 'LaunalternativeSet'
ALTER TABLE [dbo].[LaunalternativeSet]
ADD CONSTRAINT [FK_LaunproductLaunalternative]
    FOREIGN KEY ([Launproduct_laun_id])
    REFERENCES [dbo].[LaunproductSet]
        ([laun_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_LaunproductLaunalternative'
CREATE INDEX [IX_FK_LaunproductLaunalternative]
ON [dbo].[LaunalternativeSet]
    ([Launproduct_laun_id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------